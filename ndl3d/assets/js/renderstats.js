/**
 * @author mrdoob / http://mrdoob.com/
 * @author jetienne / http://jetienne.com/
 */
/** @namespace */
var THREEx	= THREEx || {}

/**
 * provide info on THREE.CanvasRenderer
 *
 * @param {Object} renderer the renderer to update
 * @param {Object} Camera the camera to update
*/
THREEx.RendererStats	= function (){

	var msMin	= 100;
	var msMax	= 0;

	var container	= document.createElement( 'div' );
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var msDiv	= document.createElement( 'div' );
	msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#200;';
	container.appendChild( msDiv );

	var msText	= document.createElement( 'div' );
	msText.style.cssText = 'color:#f00;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	msText.innerHTML= 'CanvasRenderer';
	msDiv.appendChild( msText );

	var msTexts	= [];
	var nLines	= 9;
	for(var i = 0; i < nLines; i++){
		msTexts[i]	= document.createElement( 'div' );
		msTexts[i].style.cssText = 'color:#f00;background-color:#311;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
		msDiv.appendChild( msTexts[i] );
		msTexts[i].innerHTML= '-';
	}


	var lastTime	= Date.now();
	return {
		domElement: container,

		update: function(CanvasRenderer){
			// sanity check
			console.assert(CanvasRenderer instanceof THREE.CanvasRenderer)

			// refresh only 30time per second
			if( Date.now() - lastTime < 1000/30 )	return;
			lastTime	= Date.now()

			var i	= 0;
            console.log(CanvasRenderer);
            return;
			msTexts[i++].textContent = "== Memory =====";
			msTexts[i++].textContent = "Programs: "	+ CanvasRenderer.info.memory;
			msTexts[i++].textContent = "Geometries: "+CanvasRenderer.info.memory;
			msTexts[i++].textContent = "Textures: "	+ CanvasRenderer.info.memory;

			msTexts[i++].textContent = "== Render =====";
			msTexts[i++].textContent = "Calls: "	+ CanvasRenderer.info.render.calls;
			msTexts[i++].textContent = "Vertices: "	+ CanvasRenderer.info.render.vertices;
			msTexts[i++].textContent = "Faces: "	+ CanvasRenderer.info.render.faces;
			msTexts[i++].textContent = "Points: "	+ CanvasRenderer.info.render.points;
		}
	}
};
