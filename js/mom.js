var momObj= function(){

	this.x;
	this.y;
	this.bigEye= new Image();
	this.bigBody= new Image();
	this.bigTail= new Image();
	this.angle;

};

momObj.prototype.init=function(){

	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.bigEye.src="./src/bigEye0.png";
	this.bigBody.src="./src/bigSwim0.png";
	this.bigTail.src="./src/bigTail0.png";
	this.angle=0;

};

momObj.prototype.draw=function(){	
	//lerp x, y use function in commonFunction.js
	this.x= lerpDistance(mx,this.x,0.98);
	this.y= lerpDistance(my,this.y,0.98);

	//delta angle
	var deltaY= my-this.y;
	var deltaX= mx-this.x;
	var beta= Math.atan2(deltaY,deltaX)+Math.PI;//atan2 return [-PI,PI]

	// lerp angle, use function in commonFunction.js
	this.angle= lerpAngle(beta, this.angle, 0.7);

	ctx1.save();

	ctx1.translate(this.x,this.y);//gaibianyuandian
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
	
	ctx1.restore();
};