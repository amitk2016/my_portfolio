$(document).ready(function(){

	scrollingEffect();

});

function scrollingEffect(){
	$("nav ul li a").click(function(e){

		e.preventDefault();

		var sectionID = e.currentTarget.id +"Section";

		$("html body").animate({
			scrollTop:$("#"+sectionID).offset().top
		},950);

	});
}
