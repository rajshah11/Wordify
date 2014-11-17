function generateTexture(letter){
	var bitmap = document.createElement('canvas');
	var ctx = bitmap.getContext('2d');
	bitmap.width = 200;
	bitmap.height = 200;
	ctx.font = '90px Calibri';
	ctx.fillStyle = "#EFFAB4";
	ctx.fillRect(0,0,200,200);

	ctx.textAlign = "center";
	ctx.fillStyle = "#556270";
	ctx.fillText(letter, 0.5*bitmap.width, 0.6*bitmap.width);
	ctx.font = '40px Calibri';
	ctx.fillText(getPoints(letter), 0.9*bitmap.width, 0.2*bitmap.width);
	// ctx.strokeStyle = 'yellow';
	// ctx.strokeText(text, 25, 50);

	// canvas contents will be used for a texture
	var texture = new THREE.Texture(bitmap) 
	texture.needsUpdate = true;
	return texture;
}