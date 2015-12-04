var SCREEN_WIDTH = window.innerWidth,
SCREEN_HEIGHT = window.innerHeight,


mouseX = 0, mouseY = 0,

windowHalfX = window.innerWidth / 2,
windowHalfY = window.innerHeight / 2,

SEPARATION = 200,
AMOUNTX = 10,
AMOUNTY = 10,


camera, scene, renderer;

var cameraControls;

var targetRotationX = 0;
var targetRotationOnMouseDownX = 0;

var targetRotationY = 0;
var targetRotationOnMouseDownY = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var mouseY = 0;
var mouseYOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var finalRotationY;

var group;

function init() {


	container = document.createElement('div');
	container.className = 'scene';
	document.body.appendChild(container);

	scene = new THREE.Scene();

	renderer = new THREE.CanvasRenderer( { alpha: true } );
	renderer.setPixelRatio( 1 );
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	container.appendChild( renderer.domElement );


	camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
	camera.position.z = 50;
	camera.lookAt(0,0,0);





	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	   document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	   document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	//create earth
	group = new THREE.Object3D();
	var sphereSize = 20;
	if(SCREEN_WIDTH < 630){
		sphereSize = 15;
	}
	var geometry = new THREE.SphereGeometry(sphereSize, 32, 32)
	var texture = THREE.ImageUtils.loadTexture('assets/images/earthmap1k.jpg')
	var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 1} );
	var earthMesh = new THREE.Mesh(geometry, material)
	group.add(earthMesh)
	scene.add(group)

	window.addEventListener( 'resize', onWindowResize, false );

	animate();

}

function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

}



function onDocumentMouseDown( event ) {

        event.preventDefault();

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        document.addEventListener( 'mouseout', onDocumentMouseOut, false );

        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDownX = targetRotationX;

        mouseYOnMouseDown = event.clientY - windowHalfY;
        targetRotationOnMouseDownY = targetRotationY;

}

function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

        targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.005;
        targetRotationX = targetRotationOnMouseDownX + (mouseX - mouseXOnMouseDown) * 0.005;

}

function onDocumentMouseUp( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {

                event.preventDefault();

                mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
                targetRotationOnMouseDownX = targetRotationX;

                mouseYOnMouseDown = event.touches[ 0 ].pageY - windowHalfY;
                targetRotationOnMouseDownY = targetRotationY;

        }

}

function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

                event.preventDefault();

                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                targetRotationX = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.05;

                mouseY = event.touches[ 0 ].pageY - windowHalfY;
                targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.05;

        }

}

//

function animate() {

        requestAnimationFrame( animate );

        render();


}

function render() {

     //horizontal rotation
     group.rotation.y += ( targetRotationX - group.rotation.y ) * 0.1;

     //vertical rotation
     finalRotationY = (targetRotationY - group.rotation.x);
//     group.rotation.x += finalRotationY * 0.05;

//     finalRotationY = (targetRotationY - group.rotation.x);
    if (group.rotation.x  <= 1 && group.rotation.x >= -1 ) {

        group.rotation.x += finalRotationY * 0.1;
        }
     if (group.rotation.x  > 1 ) {

        group.rotation.x = 1
        }

     if (group.rotation.x  < -1 ) {

        group.rotation.x = -1
        }
        renderer.render( scene, camera );

}



function animate() {


  	requestAnimationFrame(animate);


	render();

}
