// Displays the current day
$("#currentDay").html(moment().format('dddd, MMM Do YYYY'));

$(document).ready(function () {
    // saves the input of the user and stores locally
    $(".saveBtn").on("click", function () {
        let userInput = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
    
        localStorage.setItem(time, userInput);
    })
   
    function timeTracker() {
        // Stores the current hours 
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            let timeSection = parseInt($(this).attr("id").split("hour")[1]);
            
            // changes the background color based on time 
            // Use "future" "present" "past" 
            if (timeSection < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (timeSection === currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // Checking in local storage for any saved information
    $("#hour-8am .description").val(localStorage.getItem("hour-8am"));
    $("#hour-9am .description").val(localStorage.getItem("hour-9am"));
    $("#hour-10am .description").val(localStorage.getItem("hour-10am"));
    $("#hour-11am .description").val(localStorage.getItem("hour-11am"));
    $("#hour-12pm .description").val(localStorage.getItem("hour-12am"));
    $("#hour-1pm .description").val(localStorage.getItem("hour-1pm"));
    $("#hour-2pm .description").val(localStorage.getItem("hour-2pm"));
    $("#hour-3pm .description").val(localStorage.getItem("hour-3pm"));
    $("#hour-4pm .description").val(localStorage.getItem("hour-4pm"));
    $("#hour-5pm .description").val(localStorage.getItem("hour-5pm"));

    timeTracker();
});
