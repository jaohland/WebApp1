/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Tutorial Case

   Author: 
   Date:   

   Function List:
   calendar(calendarDay)
      Creates the calendar table for the month specified in the
      calendarDay parameter. The current date is highlighted in 
      the table.

   writeCalTitle(calendarDay)
      Writes the title row in the calendar table

   writeDayTitle()
      Writes the weekday title rows in the calendar table

   daysInMonth(calendarDay)
      Returns the number of days in the month from calendarDay

   writeCalDays(calendarDay)
      Writes the daily rows in the calendar table, highlighting
      calendarDay
	
*/

function calander(dateString) {
    if (dateString == null) calDate = new Date();
    else calDate = new Date(dateString);

    document.write("<table id='calander_table'>");
    writeCalTitle(calDate);
    writeDayNames();
    writeCalDay(calDate);
    document.write("</table>");
}

function writeCalTitle(calanderDay) {
    var monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var thisMonth = calanderDay.getMonth();
    var thisYear = calanderDay.getFullYear();

    document.write("<tr>");
    document.write("<th id='calander_head' colspan='7'>");
    document.write(monthName[thisMonth] + " " + thisYear);
    document.write("</th></tr>");
}

function writeDayNames() {
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    document.write("<tr>");
    for (var i = 0; i < dayName.length; i++) {
        document.write("<th class='calander_weekdays'>" + dayName[i] + "</th>");
    }
    document.write("</tr>");
}

function daysInMonth(calanderDay) {
    var dayCount = [31, 28, 31, , 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var thisYear = calanderDay.getFullYear();
    var thisMonth = calanderDay.getMonth();
    if (thisYear % 4 == 0) {
        if ((thisYear % 100 != 0) || (thisYear % 400 == 0)) {
            dayCount[1] = 29;
        }
    }
    return dayCount[thisMonth];
}

function writeCalDays(calanderDay) {
    var day = new Date(calanderDay.getFullYear(), calanderDay.getMonth(), 1);
    var weekday = day.getDay();

    document.write("<tr>");
    for (var i = 0; i < weekDay; i++) {
        document.write("<td></td>");
    }
    var totalDays = daysInMonth(calanderDay);
    var highlightDay = calanderDay.getDate();
    for (var i = 1; i <= totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();

        if (weekDay == 0) document.write("<tr>");
        
        if (i == highlightDay) {
            document.write("<td class='clander_dates' id = 'calander_today'>" + i + dayEvent[i] + "</td>");
        }
        else {
            document.write("<td class='clander_dates'>" + i + dayEvent[i] + "</td>");
        }

        if (weekDay == 6) document.write("</tr>");
    }
}