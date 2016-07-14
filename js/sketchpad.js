//create normal sketchpad
function createSketchpad(){
	sketchpadGrid = prompt('How large do you want your grid? Select from 1 to 64');
	if(sketchpadGrid <= 64){
		gridSize = sketchpadGrid*sketchpadGrid;
		gridSizePx = 960 / sketchpadGrid;
		for(i = 0; i < gridSize;i++){
			$('#sketchpad').append("<div class='box'></div>");		
		}
	}
	else {
		alert("Please choose a number beetween 1 and 64");
	}
}	

//change color
function changeColor() {
		createSketchpad();
		//change the box size and color
		$('.box').css({'width':gridSizePx,'height':gridSizePx});
		$('#sketchpad').on('mouseenter','div', function(){
		if(color == 1) {
			colors = '#252b30';
			$(this).css({'background-color': colors});
		}
		if(color == 2){
			colors = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
			$(this).css({'background-color': colors});
		}
		if(color == 3){
			opacityNow = $(this).css('opacity'); 
			if(opacityNow>0){
				colors = opacityNow - 0.1;
				$(this).css('opacity', colors);	
			};
		}
	});
}

color = 1;
changeColor();

$(document).ready(function(){
    //clear function
    $("#clear").click(function(){
        $(".box").remove();
		color = 1;
		changeColor();
    });	
    
    //random color
    $("#randomColor").click(function(){
        $(".box").remove();
		color = 2;
		changeColor();
    });	
	
    //transparant
    $("#transparant").click(function(){
        $(".box").remove();
		color = 3;
		changeColor();
    });	
});
