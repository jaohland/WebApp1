/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 13
   Case Problem 2

   Author:   Jake Ohland
   Date:     11/28/2016

   Filename: translate.js


   Function List:


   setup()
      Insert the current week's french phrases into document and set up
      event handlers for the phrases.

   showEnglish()
      Changes all of the English phrases to French

   showFrench()
      Changes all of the French phrases to English

*/
window.onload = setup;
function setup()
{
    var questions = document.querySelectorAll("ol > li");
    for(var i=0;i<questions.length;i++)
    {
        questions[i].id = i + "phrase";
        var id = questions[i].id;
        document.getElementById(id).setAttribute("onmousedown", "showEnglish('" + id + "')");
        document.getElementById(id).setAttribute("onmouseup", "showFrench('" + id + "')");
        questions[i].style.cursor = "pointer";
        
    }
}
function showEnglish(id)
{
    var phraseNumber = parseInt(id);
    document.getElementById(id).innerHTML = english[phraseNumber];
    document.getElementById(id).style.fontStyle = "italic";
    document.getElementById(id).style.color = "rgb(191,22,31)";
}
function showFrench(id)
{
    var phraseNumber = parseInt(id);
    document.getElementById(id).innerHTML = french[phraseNumber];
    document.getElementById(id).style.fontStyle = "";
    document.getElementById(id).style.color = "";
}
