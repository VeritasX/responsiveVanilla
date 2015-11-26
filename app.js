var navElement=document.getElementById('documentNav'),
  menuButton=document.getElementById('menuToggleClose'),
  unorderedList=document.getElementById('navUl'),
  linkTag=document.getElementsByTagName('a');

  function navClick (){
    if ( unorderedList.style.display != 'none' ) {
        unorderedList.style.display = 'none';
        }else {
          unorderedList.style.display = 'block';
        }
      };
      function ready(navClick) {
        if (document.readyState != 'loading'){
          navClick();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
      }

menuButton.onclick=navClick();
