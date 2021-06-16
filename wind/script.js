// JavaScript Document
$(function(){
	$('html, body').mousewheel(function (e, d){
		this.scrollLeft-=(d*100);
		e.preventDefault();
	});
});					