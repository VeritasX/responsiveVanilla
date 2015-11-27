var unorderedList=document.getElementById('navUl');
var menuToggle =document.getElementById('menuToggleClose');

  function menuClick(){
        if ( unorderedList.style.display != 'none' ) {
            unorderedList.style.display = 'none';
            }else {
              unorderedList.style.display = 'block';
            }
  }


      menuToggle.addEventListener('mousedown', menuClick );
