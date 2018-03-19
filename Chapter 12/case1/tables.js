/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Case Problem 1

   Author:   Jake Ohland
   Date:     11-27-2016

   Filename: tables.js

   Function List:

   showTable()
      Shows a table of contributors to the Lighthouse

   showSummary()
      Shows a table summarizing the contributions made to the Lighthouse

*/

function showTable() {
	document.write("<table id='contributors'>");
	document.write("<thead?");
	document.write("<tr>");
	document.write("<th>Date</th><th>Amount</th>");
	document.write("<th>First Name</th><th>Last Name</th>");
	document.write("<th>Address</th>");
	document.write("</tr>");
	document.write("</thead>");
	document.write("<tbody>");
	
	for(var i = 0; i < lastName.length; i++) {
		document.write("<tr>");
		document.write("<td>" + date[i] + "</td>");
		document.write("<td class='amt'>" + amount[i] + "</td>");
		document.write("<td>" + firstName[i] + "</td>");
		document.write("<td>" + lastName[i] + "</td>");
		document.write("<td>" + street[i] + "<br />");
		document.write(city[i] + ", ");
		document.write(state[i] + " ");
		document.write(zip[i] + "</td>");
		document.write("</tr>");
	}
	
	document.write("</tbody>");
	document.write("</table>");
}

function showSummary() {
	var total = 0;
	for(var i = 0; i < lastName.length; i++) {
		total += amount[i];
	}
	document.write("<table id='sumTable'>");
	document.write("<tr>");
	document.write("<th id='sumTitle' colspan='2'>Summary</th>");
	document.write("</tr>");
	document.write("<tr>");
	document.write("<th>Contributors</th>");
	document.write("<td>" + lastName.length + "</td>");
	document.write("</tr>");
	document.write("<tr>");
	document.write("<th>Amount</th>");
	document.write("<td>$" + total +  "</td>");
	document.write("</tr>");
	document.write("</table>");
}