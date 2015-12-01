'use strict';

//Create a carousel that can cycle through a group of divs in an HTML docucument..once it has cycled all the way through restart the process





//Get the slideShow div
    var slideShow=document.getElementById('inside');
    var inner=slideShow.children;
        function inlineBlock(x){
          setTimeout(function(){
            inner[x].style.display='inline-block'
          }, 4000);

        }

        function displayNone(x){
          setTimeout(function(){
            inner[x].style.display='none'
          }, 4000);
        }

          



//cycle through the elements in the slideShow div

      //show each element for 10 secoonds

      //move to the next element in the div and make the previous element hide.
      //restart the loop
