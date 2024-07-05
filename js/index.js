/// <reference types="../@types/jquery" />;
/* side nav open and close */
$("#openButton").on("click", function (e) {
  $(".sideBar").animate({ width: "toggle", paddingInline: "toggle" }, 500);
  //  $("#links").animate({width:"toggle" ,paddingInline:"toggle"},100)
  $("#openButton").css({ cssText: `margin-left:18%` });
});
$("#closeButton").on("click", function (e) {
  $(".sideBar").animate({ width: "toggle", paddingInline: "toggle" }, 500);
  //  $("#links").animate({width:"toggle" ,paddingInline:"toggle"},500)
  $("#openButton").css({ cssText: `margin-left:0%` });
});

/* side nav navigation */

$("#links li a").on("click", function (e) {
  let myId = $(this).attr("href");
  let myOffcet = $(myId).offset().top;
  console.log(myId);
  console.log(myOffcet);
  $("html , body").animate({ scrollTop: myOffcet }, 2000);
});

/*singers section*/

$("#sliderDown .h3").on("click", function (e) {
  //console.log($(this));
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/* counter till 10 december 2025 */

$(function () {
  countDownToTime("10 december 2025 10:00:00");
});

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  /* getTime() return time in milli seconds divide by 1000 to get it in seconds */
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  let timeDifference = futureDate - now; /*differencs in seconds*/

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

/* textarea remining char */

let maxLength = 100;

$("#text-area").on("keyup", function (e) {
  let usedLength = $(this).val().length;
  let remaining = maxLength - usedLength;
  console.log(remaining)
  if(remaining<=0){
    $("#reminingChars").text("Text remaining Finshed");

  }else{
    $("#reminingChars").text(remaining);

  }
});
