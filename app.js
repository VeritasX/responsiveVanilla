var navElement=document.getElementById('documentNav');
var unorderedList=document.getElementById('navUl');
var linkTag=document.getElementsByTagName('a');
var listElement=document.getElementsByTagName('li')
var menuToggle =document.getElementById('menuToggleClose');

  function menuClick(){
        if ( unorderedList.style.display != 'none' ) {
            unorderedList.style.display = 'none';
            }else {
              unorderedList.style.display = 'block';
            }
  }

  function closeMenuAfterClick(){
      if (unorderedList.style.display != 'none'){
          unorderedList.style.display ='none';
      }
  }

    menuToggle.addEventListener('click', menuClick );

    linkTag.addEventListener('click', closeMenuAfterClick);
