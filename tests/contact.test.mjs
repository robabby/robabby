import test from 'node:test';
import assert from 'node:assert/strict';
import { handleContact } from '../app/lib/contact.ts';
const config = {apiKey:'test-key',sender:'website@robabby.com',listId:7,recipient:'owner@example.com',allowedOrigins:['https://www.robabby.com']};
const valid = {name:'Visitor',email:'visitor@example.com',message:'Hello Rob',website:''};
const request = (body, headers={}) => new Request('https://www.robabby.com/api/contact', {method:'POST',headers:{origin:config.allowedOrigins[0],'content-type':'application/json',...headers},body:JSON.stringify(body)});
test('only sends to the configured recipient, with the visitor as Reply-To',async()=>{
  let sent;
  let contact;
  const result=await handleContact(request({...valid,to:'attacker@example.com',sender:'attacker@example.com'}),config,async(url,options)=>{
    if(url==='https://api.brevo.com/v3/contacts') {
      contact=JSON.parse(options.body);
      return new Response(null,{status:204});
    }
    assert.equal(url,'https://api.brevo.com/v3/smtp/email');
    sent=JSON.parse(options.body);
    return Response.json({messageId:'test-receipt'}, {status:201});
  });
  assert.equal(result.status,200);
  assert.deepEqual(contact,{email:valid.email,attributes:{CONTACT_FORM_NAME:valid.name},listIds:[7],updateEnabled:true});
  assert.equal(sent.to[0].email,config.recipient);
  assert.equal(sent.sender.email,config.sender);
  assert.equal(sent.replyTo.email,valid.email);
  assert.match(sent.textContent,/Hello Rob/);
});
test('rejects invalid, injected, oversized, and honeypot submissions without sending', async()=>{
  const cases=[{...valid,email:'invalid'},{...valid,name:'Visitor\r\nBcc: x@example.com'},{...valid,message:' '},{...valid,message:'x'.repeat(5001)},{...valid,website:'spam'},null,[]];
  for(const data of cases){
    const response=await handleContact(request(data),config,async()=>assert.fail('must not send'));
    assert.equal(response.status,400);
  }
  assert.equal((await handleContact(request({...valid,message:'x'.repeat(40000)}),config)).status,413);
  assert.equal((await handleContact(request(valid,{origin:'https://other.example'}),config)).status,403);
});
test('does not claim success on missing config, provider rejection, or ambiguous delivery',async()=>{
  assert.equal((await handleContact(request(valid),{...config,apiKey:undefined})).status,503);
  for(const send of [async()=>new Response(null,{status:429}),async(url)=>url.endsWith("/contacts")?new Response(null,{status:204}):Response.json({}),async()=>{throw new Error('timeout')}]){
    assert.equal((await handleContact(request(valid),config,send)).status,502);
  }
});

test('a failed contact upsert does not send an email or claim success',async()=>{
  const calls=[];
  const result=await handleContact(request(valid),config,async(url)=>{
    calls.push(url);
    return new Response(null,{status:403});
  });
  assert.equal(result.status,502);
  assert.deepEqual(calls,['https://api.brevo.com/v3/contacts']);
  assert.equal((await handleContact(request(valid),{...config,listId:NaN})).status,503);
});
