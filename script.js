var currentDate = $("#currentDay");
var currentTime = $("#currentTime");
var nowHour = moment().format("H");

// date
setInterval(() => {
    var now = moment();
    var date = now.format("dddd, MMMM DD, YYYY");
    
    currentDate.text(date);
}, 100);

// time
setInterval(() => {
    var now = moment();
    var date = now.format("hh:mm:ss a");
    
    currentTime.text(date);
}, 100);

// storing the content
$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const id = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});

$('input[type="text"]').each(function () { 
    const getting = $(this).attr('id'); 
    const letsGrab = localStorage.getItem(getting); 
    document.getElementById(getting).value = letsGrab; 
});
//color codes
color(9, "#nineAm"); 
color(10, "#tenAm"); 
color(11, "#eleven"); 
color(12, "#noon"); 
color(13, "#onePm");
color(14, "#twoPm"); 
color(15, "#threePm"); 
color(16, "#fourPm"); 
color(17, "#fivePm"); 
color(18, "#sixPm");
color(19, "#sevenPm");
color(20, "#eightPm");

function color(time, theId) { 
    if (nowHour > time) { 
        $(theId).addClass("past"); 
    }
    if (nowHour < time) { 
        $(theId).addClass("future"); 
    }
    if (nowHour == time) { 
        $(theId).addClass("present");
    }

    console.log('time: ' , time , 'theID: ' , theId);
}