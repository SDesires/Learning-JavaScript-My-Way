Day 1: Diving in headfirst

This Folder contains an HTML file, a CSS file and a JS file.

Since anyone reading this should understand the HTML and the CSS pages, (*If you don't, feel free to ask questions!*) I am going to concentrate on the JS part.

here is the code that I used:

    function myFunction() {
      document.getElementById('demo').innerHTML = Date();
      }
      
Now, CSS makes our HTML all pretty-like and with transitions and animations, you can make it do all sorts of creative stuff. 
JS though, apparently can *change* the HTML content. Gotta admit that sounds pretty cool.

So the 

    function myFunction() 

part is kinda a 2 part thing. If you look on the HTML page, you will see that I have this written:

    <button class="bttn" onclick="myFunction()">
    
That's me telling the HTML that when the button is clicked, that whatever myFunction() is told to display, will display.
the first "funtion" is me telling telling JS that this is something that I want it to do. 
the myFunction is the name of the function I want it to do. 
in the () is where or what I want the function to change and whatnot (*technical term is parameters*)
After that we have the fun fancy brackets starting like they do in CSS. (*no clue what they are really called*)
Then we get to the code that we want the function to do.
The *document* refers to the HTML page.
*getElementByID* is telling the code exactly what we are wanting to change by it's name. (*in the HTML page the p id was demo*)
On the w3schools page it says that you can use either single or double qoutes, but I've seen in other places where that is disputed.
*innerHTML* is you guessed it, where the element is.
and finally *Date()* is what the JS is supposed to give when it's all said and done.
Slap a semicolon and a closing fancy bracket and we are good to go.
--------------------------------------------------------------------------------------------------------------------------------------------------------

That of course is the breakdown. To put it more simply:

JS = instructions to the browser on how to make things act or show on our page. 

Yay! I learned some JS finally! Woohoo! 🎊

    ~SDesires🌹





Feel free to clone this project and change the CSS and stuff and show me what you have done! 
Also remember that I am still learning and will *NOT* get everything right the first time around!

