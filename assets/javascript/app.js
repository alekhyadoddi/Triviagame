

//  ** SOLUTION **
$(document).ready(function () {
var corrects=0;
var wrongs=0;
var timer="00:00";
var currentanswer;
var correctanswer;
var isquestion;
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 20;

// TODO: Put links to our images in this image array.
var imagespath="assets/images/";
var images = ["Kanye.png", "Beyonce.png", "EdShareen.png","TaylorSwift.png","Rihanna.png","KimK.png","KatyPerry.png"];
var imagesblur = ["Kanyeblur.png", "Beyonceblur.png", "EdShareenblur.png","TaylorSwiftBlur.png","RihannaBlur.png","KimKblur.png","KatyPerryBlur.png"];
// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.

var i=-1;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
// $("#start").click(startTrivia);



// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage(isquestion) {
  console.log(i+"inside display image i value")
  console.log("inside display img");
  console.log(isquestion);
  if(isquestion===true)
  {
    console.log("inside blur");
  $("#quiz-image").attr("src", imagespath+imagesblur[i]);
  }
  else{
    console.log("inside else");
    $("#quiz-image").attr("src", imagespath+images[i]); 
  }
}

function displayOptions(){
  console.log(i+"inside display options i value")
  // $(id).css("background-color","unset");
  var answer1=images[i].split(".")[0]; 
  var answer2=images[i+1].split(".")[0]; 
  var answer3=images[i+2].split(".")[0]; 
  $("#answer1").text(answer1);
  $("#answer2").text(answer2);
  $("#answer3").text(answer3);
  console.log(answer1);
console.log(answer2);
console.log(answer3);

$("#answer1").attr("name", answer1);
$("#answer2").attr("name", answer2);
$("#answer3").attr("name", answer3);
correctanswer=answer1;
console.log("correctans"+correctanswer);
}


function nextquestion() {
  clearInterval(intervalId);
  i++;
  console.log("insidenextImage");
  console.log(imagespath+imagesblur[i]);
  displayImage(true);
  $(".answers").css("background-color","unset");
  displayOptions();
  time=10;
  intervalId = setInterval(function(){count()}, 1000);
  showImage =  setTimeout(function() {nextquestion()
  }, 10000);


  // //  TODO: Increment the count by 1.
  // count++;
  // console.log("loading");
  //  // TODO: Show the loading gif in the "image-holder" div.
  // $("#image-holder").html("<img src='assets/images/KimK.png ' width='200px'/>");

  // // TODO: Use a setTimeout to run displayImage after 1 second.
  // setTimeout(displayImage, 1000);

  // // TODO: If the count is the same as the length of the image array, reset the count to 0.
  // if (count === images.length) {
  //   count = 0;
  // }
}

function displayanswer(){
  displayImage(false);
  $("#answer1").css("background-color","green");

}

function updatescore(correct,wrong,timer)
{
  $(".correct-answers").text(correct);
  $(".wrong-answers").text(wrong);
  $("#timer").text("20");
}


function stopTrivia() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.



function startGame()
{
i=-1;
isquestion=true;
  $(".correct-answers").text("0");
  $(".wrong-answers").text("0");
  $("#timer").text("20");
  // showImage = setInterval(nextquestion, 20000);
  nextquestion();


  // TODO: Use showImage to hold the setInterval to run nextImage.
 
}







startGame();





$(".answers").on("click", function(event){
  event.preventDefault();
 
 currentanswer= $(this).attr("name");
currentanswerid=$(this).attr("id");
console.log("thisid"+currentanswerid);
  console.log(this);
  console.log(currentanswer);
checkanswer(currentanswer,currentanswerid);




}) ;

function checkanswer(answer,ansid)
{
  if(answer===correctanswer)
  {
    corrects++;
    displayanswer();
  updatescore(corrects,wrongs,timer);

  setTimeout(function() {
   nextquestion();
}, 2000);

  //showImage = setInterval(nextImage, 3000);

  }
  else {
    wrongs++;
    displayanswer();
    var id="#"+ansid;
    $(id).css("background-color","red");

    updatescore(corrects,wrongs,timer);
    setTimeout(function() {
      nextquestion();
  }, 2000);
    // setTimeout(nextquestion(), 5000);
   // showImage = setInterval(nextImage, 3000);
  }

}





function count() {
  console.log("inside count");

  // DONE: increment time by 1, remember we cant use "this" here.
  time--;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  


  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#timer").text(time);
}


});

