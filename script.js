$(document).ready(function () {

    $(window).on("load", function () {
        date = moment().format("MMMM Do YYYY, h:mm a");
        $("#currentDay").append(date);
        time = moment().format("H");
    });


    // set date and time on work planner
    // $(window).on("load", function () {
    //     date = moment().format("MMMM Do YYYY");
    //     console.log(date);
    //     $("#currentDate").append(date);
    //     time = moment().format("H");
    // });
    // date needs to update with day
    // time needs to update
    // display date in <p> on html page

    // set up hour blocks
    // set up rows for hour blocks

    // set hours in rows
    // set up save buttons
    // add floppy disc icon to save button
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