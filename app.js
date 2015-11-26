var navElement=document.getElementById('documentNav'),
  menuButton=document.getElementById('menuToggleClose'),
  unorderedList=document.getElementById('navUl'),
  linkTag=document.getElementsByTagName('a');


menuButton.onclick=function (){
  if ( unorderedList.style.display != 'none' ) {
      unorderedList.style.display = 'none';
      }else {
        unorderedList.style.display = 'block';
      }
    };
