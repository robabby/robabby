import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['scene-container'],
  didInsertElement() {
    var renderer	= new THREE.WebGLRenderer({
  		antialias	: true,
      alpha: true
  	});
  	renderer.setSize( window.innerWidth, window.innerHeight );
  	document.getElementsByClassName('scene-container')[0].appendChild( renderer.domElement );
  	renderer.shadowMap.enabled	= true;

  	var updateFcts	= [];
  	var scene	= new THREE.Scene();

    var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100 );
  	camera.position.z = 2;

    var ambientLight	= new THREE.AmbientLight( 0x888888 );
  	scene.add( ambientLight );

  	var directionalLight	= new THREE.DirectionalLight( 0xcccccc, 1 );
  	directionalLight.position.set(5,5,5);
  	scene.add( directionalLight );
  	directionalLight.castShadow	= true;
  	directionalLight.shadow.camera.near	= 0.01;
  	directionalLight.shadow.camera.far	= 15;
  	directionalLight.shadow.camera.fov	= 45;
  	directionalLight.shadow.camera.left	= -1;
  	directionalLight.shadow.camera.right	=  1;
  	directionalLight.shadow.camera.top	=  1;
  	directionalLight.shadow.camera.bottom= -1;
  	directionalLight.shadow.bias	= 0.001;
  	//light.shadowDarkness	= 0.2; TODO: Deprecated. Find alternative.
  	directionalLight.shadow.mapSize.width	= 1024;
  	directionalLight.shadow.mapSize.height	= 1024;
  	//////////////////////////////////////////////////////////////////////////////////
  	//		add an object and make it move					//
  	//////////////////////////////////////////////////////////////////////////////////

  	var earthMesh	= THREEx.Planets.createEarth();
  	scene.add(earthMesh);
    updateFcts.push(function(delta) {
      earthMesh.rotation.y += 1/16 * delta;
    });

  	var mesh	= THREEx.Planets.createEarthCloud();
  	scene.add(mesh);
  	updateFcts.push(function(delta) {
  		mesh.rotation.y += 1/8 * delta;
  	});

  	//////////////////////////////////////////////////////////////////////////////////
  	//		Camera Controls							//
  	//////////////////////////////////////////////////////////////////////////////////
  	// var mouse	= {x : 0, y : 0};
  	// document.addEventListener('mousemove', function(event){
  	// 	mouse.x	= (event.clientX / window.innerWidth ) - 0.5;
  	// 	mouse.y	= (event.clientY / window.innerHeight) - 0.5;
  	// }, false);
  	// updateFcts.push(function(delta) {
  	// 	camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3);
  	// 	camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3);
  	// 	camera.lookAt( scene.position );
  	// });
  	//////////////////////////////////////////////////////////////////////////////////
  	//		render the scene						//
  	//////////////////////////////////////////////////////////////////////////////////
  	updateFcts.push(function(){
  		renderer.render( scene, camera );
  	});

  	//////////////////////////////////////////////////////////////////////////////////
  	//		loop runner							//
  	//////////////////////////////////////////////////////////////////////////////////
  	var lastTimeMsec= null;
  	requestAnimationFrame(function animate(nowMsec){
  		// keep looping
  		requestAnimationFrame( animate );
  		// measure time
  		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60;
  		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec);
  		lastTimeMsec	= nowMsec;
  		// call each update function
  		updateFcts.forEach(function(updateFn){
  			updateFn(deltaMsec/1000, nowMsec/1000);
  		});
  	});
  }
});
