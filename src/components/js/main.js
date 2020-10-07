$(document).ready(function () {
	domEvents();
	dragElement(document.getElementById("draggable"));
});


let title1 = 'DJ STRINGRAY';
let title2 = 'lead from the shadow';
let title3 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s\ standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a';
let title4 = 'There are many ways to frame the story\n' +
	'\t\t\t\t\t\t\t\tof Sherard Ingram’s unique rise and\n' +
	'\t\t\t\t\t\t\t\tstature as one of techno and electro’s\n' +
	'\t\t\t\t\t\t\t\tmost consistent, authentic and trustworthy\n' +
	'\t\t\t\t\t\t\t\tDJs. He has limitless chapters entrenched in\n' +
	'\t\t\t\t\t\t\t\tthe entire lifetime of Detroit music culture;\n' +
	'\t\t\t\t\t\t\t\tmultiple aliases and collaborative projects\n' +
	'\t\t\t\t\t\t\t\tthat place him in the Venn overlap of so many\n' +
	'\t\t\t\t\t\t\t\tgenres, from electro to downtempo, even drum &\n' +
	'\t\t\t\t\t\t\t\tbass. He has numerous personal interests and ideologies.\n' +
	'\t\t\t\t\t\t\t\tThere are countless curious and singular details;\n' +
	'\t\t\t\t\t\t\t\tthe fact he didn’t choose the name Stingray, but was\n' +
	'\t\t\t\t\t\t\t\tbequeathed it by one of electro’s most forthright,\n' +
	'\t\t\t\t\t\t\t\tand sadly missed, pioneers. There’s the fact that\n' +
	'\t\t\t\t\t\t\t\tat 52, he’s recognised more for his art now than ever.\n' +
	'\t\t\t\t\t\t\t\tHe’s still peaking and becoming even more in demand.\n' +
	'\t\t\t\t\t\t\t\tMost importantly, he still loves what he does.\n' +
	'\t\t\t\t\t\t\t\taround my mind when we first meet one Sunday afternoon\n' +
	'\t\t\t\t\t\t\t\tthis summer. It’s an hour before we sit down for a\n' +
	'\t\t\t\t\t\t\t\tlengthy interview that will touch on everything from\n' +
	'\t\t\t\t\t\t\t\treligion\t\t\t\t\t\t\t\tThere are many ways to frame the story\n' +
	'\t\t\t\t\t\t\t\tof Sherard Ingram’s unique rise and\n' +
	'\t\t\t\t\t\t\t\tstature as one of techno and electro’s\n' +
	'\t\t\t\t\t\t\t\tmost consistent, authentic and trustworthy\n' +
	'\t\t\t\t\t\t\t\tDJs. He has limitless chapters entrenched in\n' +
	'\t\t\t\t\t\t\t\tthe entire lifetime of Detroit music culture;\n' +
	'\t\t\t\t\t\t\t\tmultiple aliases and collaborative projects\n' +
	'\t\t\t\t\t\t\t\tthat place him in the Venn overlap of so many\n' +
	'\t\t\t\t\t\t\t\tgenres, from electro to downtempo, even drum &\n' +
	'\t\t\t\t\t\t\t\tbass. He has numerous personal interests and ideologies.\n' +
	'\t\t\t\t\t\t\t\tThere are countless curious and singular details;\n' +
	'\t\t\t\t\t\t\t\tthe fact he didn’t choose the name Stingray, but was\n' +
	'\t\t\t\t\t\t\t\tbequeathed it by one of electro’s most forthright,\n' +
	'\t\t\t\t\t\t\t\tand sadly missed, pioneers. There’s the fact that\n' +
	'\t\t\t\t\t\t\t\tat 52, he’s recognised more for his art now than ever.\n' +
	'\t\t\t\t\t\t\t\tHe’s still peaking and becoming even more in demand.\n' +
	'\t\t\t\t\t\t\t\tMost importantly, he still loves what he does.\n' +
	'\t\t\t\t\t\t\t\taround my mind when we first meet one Sunday afternoon\n' +
	'\t\t\t\t\t\t\t\tthis summer. It’s an hour before we sit down for a\n' +
	'\t\t\t\t\t\t\t\tlengthy interview that will touch on everything from\n' +
	'\t\t\t\t\t\t\t\treligion\t\t\t\t\t\t\t\tThere are many ways to frame the story\n' +
	'\t\t\t\t\t\t\t\tof Sherard Ingram’s unique rise and\n' +
	'\t\t\t\t\t\t\t\tstature as one of techno and electro’s\n' +
	'\t\t\t\t\t\t\t\tmost consistent, authentic and trustworthy\n' +
	'\t\t\t\t\t\t\t\tDJs. He has limitless chapters entrenched in\n' +
	'\t\t\t\t\t\t\t\tthe entire lifetime of Detroit music culture;\n' +
	'\t\t\t\t\t\t\t\tmultiple aliases and collaborative projects\n' +
	'\t\t\t\t\t\t\t\tthat place him in the Venn overlap of so many\n' +
	'\t\t\t\t\t\t\t\tgenres, from electro to downtempo, even drum &\n' +
	'\t\t\t\t\t\t\t\tbass. He has numerous personal interests and ideologies.\n' +
	'\t\t\t\t\t\t\t\tThere are countless curious and singular details;\n' +
	'\t\t\t\t\t\t\t\tthe fact he didn’t choose the name Stingray, but was\n' +
	'\t\t\t\t\t\t\t\tbequeathed it by one of electro’s most forthright,\n' +
	'\t\t\t\t\t\t\t\tand sadly missed, pioneers. There’s the fact that\n' +
	'\t\t\t\t\t\t\t\tat 52, he’s recognised more for his art now than ever.\n' +
	'\t\t\t\t\t\t\t\tHe’s still peaking and becoming even more in demand.\n' +
	'\t\t\t\t\t\t\t\tMost importantly, he still loves what he does.\n' +
	'\t\t\t\t\t\t\t\taround my mind when we first meet one Sunday afternoon\n' +
	'\t\t\t\t\t\t\t\tthis summer. It’s an hour before we sit down for a\n' +
	'\t\t\t\t\t\t\t\tlengthy interview that will touch on everything from\n' +
	'\t\t\t\t\t\t\t\treligion\t\t\t\t\t\t\t\tThere are many ways to frame the story\n' +
	'\t\t\t\t\t\t\t\tof Sherard Ingram’s unique rise and\n' +
	'\t\t\t\t\t\t\t\tstature as one of techno and electro’s\n' +
	'\t\t\t\t\t\t\t\tmost consistent, authentic and trustworthy\n' +
	'\t\t\t\t\t\t\t\tDJs. He has limitless chapters entrenched in\n' +
	'\t\t\t\t\t\t\t\tthe entire lifetime of Detroit music culture;\n' +
	'\t\t\t\t\t\t\t\tmultiple aliases and collaborative projects\n' +
	'\t\t\t\t\t\t\t\tthat place him in the Venn overlap of so many\n' +
	'\t\t\t\t\t\t\t\tgenres, from electro to downtempo, even drum &\n' +
	'\t\t\t\t\t\t\t\tbass. He has numerous personal interests and ideologies.\n' +
	'\t\t\t\t\t\t\t\tThere are countless curious and singular details;\n' +
	'\t\t\t\t\t\t\t\tthe fact he didn’t choose the name Stingra\t\t\t\t\t\t\t\tThere are many ways to frame the story\n' +
	'\t\t\t\t\t\t\t\tof Sherard Ingram’s unique rise and\n' +
	'\t\t\t\t\t\t\t\tstature as one of techno and electro’s\n' +
	'\t\t\t\t\t\t\t\tmost consistent, authentic and trustworthy\n' +
	'\t\t\t\t\t\t\t\tDJs. He has limitless chapters entrenched in\n' +
	'\t\t\t\t\t\t\t\tthe entire lifetime of Detroit music culture;\n' +
	'\t\t\t\t\t\t\t\tmultiple aliases and collaborative projects\n' +
	'\t\t\t\t\t\t\t\tthat place him in the Venn overlap of so many\n' +
	'\t\t\t\t\t\t\t\tgenres, from electro to downtempo, even drum &\n' +
	'\t\t\t\t\t\t\t\tbass. He has numerous personal interests and ideologies.\n' +
	'\t\t\t\t\t\t\t\tThere are countless curious and singular details;\n' +
	'\t\t\t\t\t\t\t\tthe fact he didn’t choose the name Stingray, but was\n' +
	'\t\t\t\t\t\t\t\tbequeathed it by one of electro’s most forthright,\n' +
	'\t\t\t\t\t\t\t\tand sadly missed, pioneers. There’s the fact that\n' +
	'\t\t\t\t\t\t\t\tat 52, he’s recognised more for his art now than ever.\n' +
	'\t\t\t\t\t\t\t\tHe’s still peaking and becoming even more in demand.\n' +
	'\t\t\t\t\t\t\t\tMost importantly, he still loves what he does.\n' +
	'\t\t\t\t\t\t\t\taround my mind when we first meet one Sunday afternoon\n' +
	'\t\t\t\t\t\t\t\tthis summer. It’s an hour before we sit down for a\n' +
	'\t\t\t\t\t\t\t\tlengthy interview that will touch on everything from\n' +
	'\t\t\t\t\t\t\t\treligion\t\t\t\t\t\t\t\tThere are many ways to frame the story\n' +
	'\t\t\t\t\t\t\t\tof Sherard Ingram’s unique rise and\n' +
	'\t\t\t\t\t\t\t\tstature as one of techno and electro’s\n' +
	'\t\t\t\t\t\t\t\tmost consistent, authentic and trustworthy\n' +
	'\t\t\t\t\t\t\t\tDJs. He has limitless chapters entrenched in\n' +
	'\t\t\t\t\t\t\t\tthe entire lifetime of Detroit music culture;\n' +
	'\t\t\t\t\t\t\t\tmultiple aliases and collaborative projects\n' +
	'\t\t\t\t\t\t\t\tthat place him in the Venn overlap of so many\n' +
	'\t\t\t\t\t\t\t\tgenres, from electro to downtempo, even drum &\n' +
	'\t\t\t\t\t\t\t\tbass. He has numerous personal interests and ideologies.\n' +
	'\t\t\t\t\t\t\t\tThere are countless curious and singular details;\n' +
	'\t\t\t\t\t\t\t\tthe fact he didn’t choose the name Stingray, but was\n' +
	'\t\t\t\t\t\t\t\tbequeathed it by one of electro’s most forthright,\n' +
	'\t\t\t\t\t\t\t\tand sadly missed, pioneers. There’s the fact that\n' +
	'\t\t\t\t\t\t\t\tat 52, he’s recognised more for his art now than ever.\n' +
	'\t\t\t\t\t\t\t\tHe’s still peaking and becoming even more in demand.\n' +
	'\t\t\t\t\t\t\t\tMost importantly, he still loves what he does.\n' +
	'\t\t\t\t\t\t\t\taround my mind when we first meet one Sunday afternoon\n' +
	'\t\t\t\t\t\t\t\tthis summer. It’s an hour before we sit down for a\n' +
	'\t\t\t\t\t\t\t\tlengthy interview that will touch on everything from\n' +
	'\t\t\t\t\t\t\t\treligiony, but was\n' +
	'\t\t\t\t\t\t\t\tbequeathed it by one of electro’s most forthright,\n' +
	'\t\t\t\t\t\t\t\tand sadly missed, pioneers. There’s the fact that\n' +
	'\t\t\t\t\t\t\t\tat 52, he’s recognised more for his art now than ever.\n' +
	'\t\t\t\t\t\t\t\tHe’s still peaking and becoming even more in demand.\n' +
	'\t\t\t\t\t\t\t\tMost importantly, he still loves what he does.\n' +
	'\t\t\t\t\t\t\t\taround my mind when we first meet one Sunday afternoon\n' +
	'\t\t\t\t\t\t\t\tthis summer. It’s an hour before we sit down for a\n' +
	'\t\t\t\t\t\t\t\tlengthy interview that will touch on everything from\n' +
	'\t\t\t\t\t\t\t\treligion'


function domEvents() {

	$('.popup-drop-arrow').bind('click', function (e) {
		e.stopPropagation();
		$(this).closest('.popup-drop').toggleClass('active');
		$('.left-side-sec').animate({
			scrollTop: 1000
		}, 200);
	});
	$('.navigation>li').click(function (e) {
		e.stopPropagation();
		if($(this).hasClass('active')){
			if ($(this).attr('id') === 'blog' && $(this).find('div.blog-list').is(":hidden")){
				$(this).find('div.blog-list').show();
				$(this).find('div.popup').hide();
			}
			else if (($(this).attr('id') === 'events' || $(this).attr('id') === 'store') && $(this).find('ul.card-ul').is(":hidden")){
				$(this).find('ul.card-ul').show();
				$(this).find('ul#calendar-list').hide();
				$(this).find('ul#category-list').hide();
				$(this).find('div.popup').hide();
				$('#calendar, #category').removeClass('active');
			}
			else if ($(this).attr('id') === 'residents' && $(this).find('ul.collapse-ul').is(":hidden")){
				$(this).find('ul.collapse-ul').show();
				$(this).find('div.popup').hide();
			}
			else{
				$(this)
					.removeClass('active')
					.siblings('li')
					.removeClass('inactive');

			}
		}
		else{
			$(this)
				.addClass('active')
				.removeClass('inactive')
				.siblings('li')
				.addClass('inactive')
				.removeClass('active');

			$('.canvas-box').html('');
			$(this).find('.item-head .canvas-box').html('<canvas id="canvas"></canvas>');

			test();
		}
	});
	$('.item-body, .li-body').click(function (e) {
		e.stopPropagation()
	});
	$('.collapse-li').click(function (e) {
		e.stopPropagation();

		$(this).toggleClass('active').siblings('li').removeClass('active');

		if ($('.collapse-li.active').prev() && $(this).index() > 3){
			$('#tsts').animate({
				scrollTop: ($(this).offset().top)
			}, 800);
		}

	});
	$('#residents .li-body').click(function (e) {
		e.stopPropagation();
		$('.collapse-ul').hide();
		$('.collapse-ul').siblings('div.popup').fadeIn(500).css('display', 'flex');
	});
	$('#residents .back').click(function (e) {
		e.stopPropagation();

		$('.collapse-ul').fadeIn(500);
		$('.popup').hide();

	});
	$('.card-li').click(function (e) {
		e.stopPropagation();
		$('.card-ul').hide().siblings('div.popup').fadeIn(500).css('display', 'flex');
	});
	$('.card-li').hover(function(e) {
		$( this ).siblings('li').addClass( "hover" );
	}, function() {
		$( this ).siblings('li').removeClass( "hover" );
	});
	$('#events .back').click(function (e) {
		e.stopPropagation();

		$('.card-ul').fadeIn(500);
		$('.card-ul').siblings('div.popup').hide();

	});
	movingText('.card-title');
	$('#calendar, #category').click(function (e) {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).siblings('ul#calendar-list').hide();
			$(this).siblings('ul#category-list').hide();
			$(this).siblings('ul.card-ul').show();
		}
		else{
			$(this).addClass('active');
			$(this).siblings('ul#calendar-list').fadeIn('fast');
			$(this).siblings('ul#category-list').fadeIn('fast');
			$(this).siblings('div.popup, ul.card-ul').hide();
		}
		movingText('.marque-text');
	});
	$('#terms').click(function (e) {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.contact-box').show();
			$('.terms-box').hide();
		}
		else{
			$(this).addClass('active');
			$('.contact-box').hide();
			$('.terms-box').show();
		}
	});
	document.addEventListener("keydown", function(event) {
		event.stopPropagation();
		console.log(event.keyCode)
		let keycode = (event.keyCode ? event.keyCode : event.which);
		let searchBox = $('.search-sec'), searchInput = $('#search-input');

		if(searchBox.hasClass('active') && keycode === 13){
			$('#popup-window').hide();
			$('.main-container').hide();
			$('.searched-container').fadeIn('fast');
			$('.search-sec').hide().removeClass('active');
		}

		if(!searchBox.hasClass('active') && keycode === 34){

			$('#popup-window').show();

			searchBox.fadeToggle(150).toggleClass('active');

			(searchBox.hasClass('active'))?searchInput.val('').focus():searchInput.val('').blur()
		}


		if(keycode === 27){
			if (searchBox.hasClass('active') || $('.searched-container').is(":visible")){
				searchBox.fadeOut(150).removeClass('active');
				$('.searched-container').hide();
				$('.main-container').fadeIn('fast');
				$('.search-sec').hide().removeClass('active');
				(searchBox.hasClass('active'))?searchInput.val('').focus():searchInput.val('').blur()
			}

			$('#popup-window, .log-in-sec, #manifest-popup').hide();
		}
	});
	$('#popup-window').bind('click', function (e) {
		e.stopPropagation();
		$(this).hide();
		$('.search-sec, .log-in-sec').hide().removeClass('active');
	});
	$('#close-searched').click(function () {
		$('.main-container').fadeIn('fast');
		$('.searched-container').hide();
	});
	$('#auth').bind('click', function (e) {
		e.stopPropagation();

		$('#popup-window').show();

		$('.log-in-sec').fadeIn('fast');

	});
	$('#rec').bind('click', function (e) {
		e.stopPropagation();
		let searchBox = $('.search-sec'), searchInput = $('#search-input');

		$('#popup-window').show();

		searchBox.fadeToggle(150).toggleClass('active');

		(searchBox.hasClass('active'))?searchInput.val('').focus():searchInput.val('').blur()

	});
	$('#blog .blog-btn-read').bind('click', function (e) {
		e.stopPropagation();
		$(this).closest('div.blog-list').hide().siblings('div.popup').show();

		$('#blog .popup').empty().append(blogPopUp(title1, title2, title3, title4));

	});

	$('#label .records>li').click(function (e) {
		e.stopPropagation();
		$(this).closest('.records').hide();
		$('#label .card-ul').css({'display':'flex'});

		if ($(this).attr('id') === 'bassiani-rec'){

		}
		else if ($(this).attr('id') === 'horoom-rec') {

		}

		movingText('.card-title');
	});

	$('#store-item-color, #store-item-size').bind('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass('active').find('ul').slideToggle(250);

		$(this).siblings('div.det-option').removeClass('active').find('ul').slideUp(250);
	})

	$('#store>.item-body>.popup').click(function (e) {
		e.stopPropagation();

		$('#store-item-color, #store-item-size').removeClass('active').find('ul').slideUp(250);
	});

	// MANIFESTO

	$('#show-pas').bind('mouseup mousedown', function (e) {
		e.stopPropagation();

		if (e.type === 'mousedown') $('#user-pasw').attr('type', 'text');
		else if(e.type === 'mouseup') $('#user-pasw').attr('type', 'password');
	});

	$('.manifest-item').click(function (e) {
		e.stopPropagation();
		$('#manifest-popup').show();
	})
}

function movingText(elem) {

	let longText = '';

	if (elem === '.marque-text') {
		longText = elem+'>span:last-child';
	}
	else{
		longText = elem+'>span:nth-child(2)';
	}



	$(longText).each(function () {
		console.log(longText, $(this).width(), $(elem).width())
		if($(this).width() > $(elem).width() ){


			$(this).addClass('long-text');
			if(!$(this).hasClass('cloned')){
				let text = $(this).text() + $(this).text();
				$(this).html(text).addClass('cloned');
			}
		}
	});
}

function blogPopUp(title, subTitle, desc, text) {
	let content = '';
	content += '<section>';
	content += '	<div class="blog-item">';
	content += '		<div class="blog-img-part">';
	content += '			<div></div>';
	content += '		</div>';
	content += '		<div class="blog-title-part">';
	content += '			<span class="blog-title">'+title+'</span>';
	content += '			<span class="blog-sub-title">'+subTitle+'</span>';
	content += '			<span class="blog-desc">'+desc+'</span>';
	content += '			<span class="blog-btn-read">read</span>';
	content += '		</div>';
	content += '	</div>';
	content += '	<div class="popup-lang">EN</div>';
	content += '	<div class="popup-text">';
	content += '		<span>'+text+'</span>';
	content += '		<div class="pop-up-text-img"></div>';
	content += '	</div>';
	content += '</section>';
	return content;
}

function dragElement(elmnt) {

	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function test() {
	const canvas = document.getElementById("canvas");
	const c = canvas.getContext("2d");

// size of canvas
	const imgSize = 512;

	canvas.width = imgSize;
	canvas.height = imgSize / 2;

// init image data with black pixels
	const image = c.createImageData(imgSize, imgSize);
	for (let i = 0; i < image.data.length; i += 4) {
		image.data[i] = 0; // R
		image.data[i + 1] = 0; // G
		image.data[i + 2] = 0; // B
		image.data[i + 3] = 1000; // A
	}

// size of our height maps
	const mapSize = 1024;

// returns the distance of point x,y from the origin 0,0
	const distance = (x, y) => Math.sqrt(x * x  / 2 + y * y);

// init height map 1
	const heightMap1 = [];
	for (let u = 0; u < mapSize; u++) {
		for (let v = 0; v < mapSize; v++) {
			// index of coordinate in height map array
			const i = u * mapSize + v;

			// u,v are coordinates with origin at upper left corner
			// cx and cy are coordinates with origin at the
			// center of the map
			const cx = u - mapSize / 2;
			const cy = v - mapSize / 2;

			// distance from middle of map
			const d = distance(cx, cy);

			// stretching so we get the desired ripple density on our map
			const stretch = (3 * Math.PI) / (mapSize / 2);

			// wavy height value between -1 and 1
			const ripple = Math.sin(d * stretch);

			// wavy height value normalized to 0..1
			const normalized = (ripple + 1) / 2;

			// height map value 0..128, integer
			heightMap1[i] = Math.floor(normalized * 50);
		}
	}

	const heightMap2 = [];
	for (let u = 0; u < mapSize; u++) {
		for (let v = 0; v < mapSize; v++) {
			const i = u * mapSize + v;
			const cx = u - mapSize / 2;
			const cy = v - mapSize / 2;

			// skewed distance as input to chaos field calculation,
			// scaled for smoothness over map distance
			const d1 = distance(0.8 * cx, 1.3 * cy) * 0.03;
			const d2 = distance(1.35 * cx, 0.45 * cy) * 0.03;

			const s = Math.sin(d1);
			const c = Math.cos(d2);
			// height value between -2 and +2
			const h = s + c;

			// height value between 0..1
			const normalized = (h + 2) / 3;
			// height value between 0..127, integer
			heightMap2[i] = Math.floor(normalized * 50);
		}
	}

// color helpers

	const interpolate = (c1, c2, f) => {
		return {
			r: Math.floor(c1.r + (c2.r - c1.r) * f),
			g: Math.floor(c1.g + (c2.g - c1.g) * f),
			b: Math.floor(c1.b + (c2.b - c1.b) * f)
		};
	};

// returns a random color
	const randomColor = () => {
		const r = Math.floor(Math.random() * 0);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		return { r, g, b };
	};

// returns a random color palette with 256 color entries
	const makeRandomPalette = () => {
		const c1 = randomColor();
		const c2 = randomColor();
		const c3 = randomColor();
		const c4 = randomColor();
		const c5 = randomColor();

		return makeFiveColorGradient(c1, c2, c3, c4, c5);
	};

	const makeFiveColorGradient = (c1, c2, c3, c4, c5) => {
		const g = [];

		for (let i = 0; i < 64; i++) {
			const f = i / 64;
			g[i] = interpolate(c1, c2, f);
		}

		for (let i = 64; i < 128; i++) {
			const f = (i - 64) / 64;
			g[i] = interpolate(c2, c3, f);
		}

		for (let i = 128; i < 192; i++) {
			const f = (i - 128) / 64;
			g[i] = interpolate(c3, c4, f);
		}

		for (let i = 192; i < 256; i++) {
			const f = (i - 192) / 64;
			g[i] = interpolate(c4, c5, f);
		}

		return g;
	};

// offsets for moving height maps
	let dx1 = 0;
	let dy1 = 0;

	let dx2 = 0;
	let dy2 = 0;

// adjust height maps offsets
	const moveHeightMaps = (t) => {
		dx1 = Math.floor(
			(((Math.cos(t * 0.0002 + 0.4 + Math.PI) + 1) / 2) * mapSize) / 2
		);
		dy1 = Math.floor((((Math.cos(t * 0.0003 - 0.1) + 1) / 2) * mapSize) / 2);
		dx2 = Math.floor((((Math.cos(t * -0.0002 + 1.2) + 1) / 2) * mapSize) / 2);
		dy2 = Math.floor(
			(((Math.cos(t * -0.0003 - 0.8 + Math.PI) + 1) / 2) * mapSize) / 2
		);
	};

// two palettes we interpolate between
	const palettes = [makeRandomPalette(), makeRandomPalette()];

// current palette is edstablished durting animation
	let palette = [];

// stores whether we're interpolating colors
// from palette 0 -> 1 (1) or 1 -> 0 (-1)
	let prevDirection = 1;

	const updatePalette = (t) => {
		const timeScale = 0.0005;
		const x = t * timeScale;

		// normalized value 0..1 used to interpolate palette colors
		const inter = (Math.cos(x) + 1) / 2;

		// did we switch direction, and should ergo pick a new palette
		// random palette to interpolate towards?

		const direction = -Math.sin(x) >= 0 ? 1 : -1;
		if (prevDirection != direction) {
			prevDirection = direction;
			if (direction == -1) {
				palettes[0] = makeRandomPalette();
			} else {
				palettes[1] = makeRandomPalette();
			}
		}

		// create interpolated palette for current frame
		for (let i = 0; i < 256; i++) {
			palette[i] = interpolate(palettes[0][i], palettes[1][i], inter);
		}
	};

	const updateImageData = () => {
		for (let u = 0; u < imgSize; u++) {
			for (let v = 0; v < imgSize; v++) {
				// indexes into height maps for pixel
				const i = (u + dy1) * mapSize + (v + dx1);
				const k = (u + dy2) * mapSize + (v + dx2);

				// index for pixel in image data
				// remember it's 4 bytes per pixel
				const j = u * imgSize * 4 + v * 4;

				// height value of 0..255
				let h = heightMap1[i] + heightMap2[k];
				// get color value from current palette
				let c = palette[h];

				// h = heightMap2[i];
				// c = { r: h, g: h, b: h };

				// set pixel data
				image.data[j] = c.r;
				image.data[j + 1] = c.g;
				image.data[j + 2] = c.b;
			}
		}
	};

// helper to create a linear gradient palette
	const linearGradient = (c1, c2) => {
		const g = [];

		// interpolate between the colors
		// in the gradient

		for (let i = 0; i < 256; i++) {
			const f = i / 255;
			g[i] = interpolate(c1, c2, f);
		}

		return g;
	};

	const tick = (time) => {
		moveHeightMaps(time);
		updatePalette(time);
		updateImageData();

		c.putImageData(image, 0, 0);

		requestAnimationFrame(tick);
	};

	requestAnimationFrame(tick);
}