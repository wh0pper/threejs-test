var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//cube geometry
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.set(0, 0, 100);
// camera.lookAt(new THREE.Vector3(0, 0, 0));

//line geometry and material
var lineMat = new THREE.LineBasicMaterial({ color: 0x0000ff });

var lineGeo = new THREE.Geometry();
lineGeo.vertices.push(new THREE.Vector3(-10, 0, 0));
lineGeo.vertices.push(new THREE.Vector3(0, 10, 0));
// lineGeo.vertices.push(new THREE.Vector3(10, 0, 0));

//combine geo and mat into line object
var line = new THREE.Line(lineGeo, lineMat);
scene.add(line);


//skeleton
// var bones = [];
//
// var shoulder = new THREE.Bone();
// var elbow = new THREE.Bone();
// var hand = new THREE.Bone();
//
// shoulder.add( elbow );
// elbow.add( hand );
//
// bones.push( shoulder );
// bones.push( elbow );
// bones.push( hand );
//
// shoulder.position.y = -10;
// elbow.position.y = 0;
// hand.position.y = 10;
//
// var armSkeleton = new THREE.Skeleton( bones );
//
// scene.add( armSkeleton );


renderer.render(scene, camera);

//cube animate
// var animate = function () {
//   requestAnimationFrame( animate );
//
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//
//   renderer.render(scene, camera);
// };
//
// animate();
