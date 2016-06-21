function momfruitCollision(){
	for(var i=0; i<fruit.num; i++){
		//calculate distance between mom and fruit, use function in commonFunctions.js
		if(fruit.alive[i]){
			var l= calLength2(mom.x, mom.y, fruit.x[i], fruit.y[i]);
			if(l<900){
				fruit.dead(i);
		}

		}		


	}
}