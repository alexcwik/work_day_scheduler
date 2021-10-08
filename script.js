var textEl;
var eventEl;
var m = moment();

//sets the date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

function colorChange(){
    var currentTime = moment().hours();
    console.log('CurrentTime' + currentTime);
}

//enables save button/icon to move stored values in the browser to network storage.
$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    
        localStorage.setItem(time, text);


    colorChange ();
    renderText ();
    
});

//deletes values from the browser
  $(".deleteBtn").click(function() {
    eventText = $(this).siblings(".input").val("");
    eventText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    colorChange ();
    renderText ();

})
    // will save entered text in text box to network storage accoring to which time it is set to.
    function renderText () {   
        var saveEventText8 = JSON.parse(localStorage.getItem("8:00 am"));
        $("#8").val("");
        $("#8").val(saveEventText8);
    
        var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
        $("#9").val("");
        $("#9").val(saveEventText9);
        
        var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
        $("#10").val("");
        $("#10").val(saveEventText10);
        
        var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
        $("#11").val("");
        $("#11").val(saveEventText11);
        
        var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
        $("#12").val("");
        $("#12").val(saveEventText12);
        
        var saveEventText1 = JSON.parse(localStorage.getItem("1:00 pm"));
        $("#13").val("");
        $("#13").val(saveEventText1);
    
        var saveEventText2 = JSON.parse(localStorage.getItem("2:00 pm"));
        $("#14").val("");
        $("#14").val(saveEventText2);
    
        var saveEventText3 = JSON.parse(localStorage.getItem("3:00 pm"));
        $("#15").val("");
        $("#15").val(saveEventText3);
    
        var saveEventText4 = JSON.parse(localStorage.getItem("4:00 pm"));
        $("#16").val("");
        $("#16").val(saveEventText4);
    
        var saveEventText5 = JSON.parse(localStorage.getItem("5:00 pm"));
        $("#17").val("");
        $("#17").val(saveEventText5);
    
    };
  