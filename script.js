
$(document).ready(function () {

    // sets date at top of page
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    // array for plans saved to local storage by user
    var scheduled = [];

    // saves user's plans when scheduled button is clicked
    $(".saveBtn").on("click", function () {
        var plans = $(this).siblings(".plans").val();
        var time = $(this).parent().attr("id");
        var dateStamp = moment().format("dddd, MMMM Do");

        scheduled.push({ description: plans, time: time, date: dateStamp });

        localStorage.setItem("events", JSON.stringify(scheduled));
    });

    // getting scheduled items from local storage when page is refreshed -- does not work!!! need to fix
    var storedPlans = JSON.parse(localStorage.getItem("scheduled"));

    if (storedPlans !== null) {
        scheduled = storedPlans;
    }

    for (var i = 0; i < scheduled.length; i++) {
        var userPlans = scheduled[i].description;
        $("#" + scheduled[i].time).children(".plan").text(userPlans);
    }

    // this will change the color of the hour blocks depending on the time
    // green for future, red for present, grey for past
    function timeKeeper() {
        var currentTime = moment().hours();

        $(".row").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (currentTime > timeBlock) {
                $(this).addClass("past");
            }
            else if (currentTime === timeBlock) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    timeKeeper();

    // tie hour blocks to date and time
    // hour blocks that are past turn grey
    // grab color styling from css stylesheet
    // current hour block is red
    // grab color styling from css stylesheet
    // future hour blocks are green
    // grab color styling from css stylesheet

    // user can input text in hour blocks
    // each hour block has a save button
    // when saved button is pushed text is saved to local storage
    // when page is refreshed input text in time blocks
});