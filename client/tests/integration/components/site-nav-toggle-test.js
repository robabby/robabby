import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-nav-toggle', 'Integration | Component | site nav toggle', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{site-nav-toggle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#site-nav-toggle}}
      template block text
    {{/site-nav-toggle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
