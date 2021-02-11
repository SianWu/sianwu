$(function(){
	//image source
	var imgArray = new Array();

	imgArray[0]="images/about/P1293451.jpg";
	imgArray[1]="images/about/P1293431.jpg";
	imgArray[2]="images/about/P1293437.jpg";

	//timer
	var thisID=0;

	window.setInterval(function(){
		//get screen width
		var width = $(window).width();

		if(thisID==0){
			$('.about-photo').css('width','250px');
			$('.about-photo').attr('src', imgArray[thisID]);
		}else{
			if (width>375){
				$('.about-photo').css('width','500px');
			}else{
				$('.about-photo').css('width','300px');
			}
			console.log(thisID)
			$('.about-photo').attr('src', imgArray[thisID]);
		}

		thisID++;
		if(thisID==3) thisID=0;//repeat from start
	},5000);

});
