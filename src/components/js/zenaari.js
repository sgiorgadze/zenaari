$(document).ready(function () {
  $(".action-btn").bind("click", function () {
    openPage($(this));
    console.log(1);
  });

  $("#side-bar, #main-container").click(function (e) {
    e.stopPropagation();
  });

  drawDateTime();

  $("#follower").click(function (e) {
    e.preventDefault();
  });

  $("#mute-btn").click(function () {
    $("#audio").prop("muted", true);
  });
  $("#sound-btn").click(function () {
    $("#audio").prop("muted", false);
  });
});

$(document).bind("mousemove", function (e) {
  $("#follower").css({
    top: e.pageY + 1,
  });
});

function openPage(e) {
  let elemId = $(e).attr("data-id");
  elemId === "main-page" ? $("#footer").hide() : $("#footer").show();
  $("#" + elemId)
    .show()
    .siblings("div:not(#footer)")
    .hide();
}

// function getDateTime(type) {
// 	let timeDate;
// 	let currentDate = new Date();
// 	function pad(num) {return (num < 10) ? '0' + num.toString() : num.toString()}
// 	if(type === 'time'){
// 		timeDate = pad(currentDate.getHours()) + " : "
// 			+ pad(currentDate.getMinutes())  + " : "
// 			+ pad(currentDate.getSeconds());
// 	}
// 	else if(type === 'date'){
// 		timeDate = pad(currentDate.getDate())  + " . "
// 			+ pad((currentDate.getMonth()+1)) + " . "
// 			+ currentDate.getFullYear().toString().substring(2);
// 	}
// 	return timeDate;
// }

// function drawDateTime(){
// 	$('#curr-date').attr('data-time', getDateTime('time')).attr('data-date', getDateTime('date'));
// 	let dateTimeout = setInterval(function () {
// 		drawDateTime();
// 		clearTimeout(dateTimeout);
// 	}, 1000);
// }
