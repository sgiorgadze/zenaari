$(document).ready(function () {

	$('.page-wrapper').click(function (e) {
		e.stopPropagation();
		$('.popup-box').hide();
	});

	$('#navigation .nav-item').click(function (e) {
		e.stopPropagation();
		$('.popup-box').hide();
		$('#img-vid-content').show();
		$('#img-vid-content>div:first-child').show();
	});

	$('#img-vid-content').bind('dblclick', function (e) {
		e.stopPropagation();
		$('#img-vid-content>div, #img-vid-content').hide();
	});


	$('#img-vid-content>div').click(function (e) {
		e.stopPropagation();
		$(this).next().show();
	});

	$('.action-btn').click(function (e) {
		e.stopPropagation();
		let idVal = $(this).attr('id');
		$('.popup-box').hide();
		$('#'+ idVal +'-popup').show();
	});

	$('.register').click(function (e) {
		e.stopPropagation();
		$('.reg-field').show().siblings('div.log-field').hide();
	});

	$('.submit').click(function (e) {
		e.stopPropagation();
		$('.popup-box').hide();
		$('#terms-popup').show();
	});

	$('.popup-title').click(function (e) {
		e.stopPropagation();
		$('#list-item-popup').show();
		$('#nights-popup').hide();
	})

});

let draggable = $('.dragit'); //element

draggable.on('mousedown', function(e){
	$(this).addClass('active-media').siblings('div').removeClass('active-media');
	e.stopPropagation();
	let dr = $(this).addClass("drag").css("cursor","move");
	let height = dr.outerHeight();
	let width = dr.outerWidth();
	let ypos = dr.offset().top + height - e.pageY;
	let xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		e.stopPropagation();
		let itop = e.pageY + ypos - height;
		let ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
		e.stopPropagation();
		dr.removeClass("drag");
	});
});
