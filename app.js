var unorderedList=document.getElementById('navUl');
var childOfUl=document.querySelectorAll('.link')
var menuToggle =document.getElementById('menuToggleClose');


  function menuClick(){
        if ( unorderedList.style.display != 'none' ) {
            unorderedList.style.display = 'none';
            }else {
              unorderedList.style.display = 'block';
            }
  }


      menuToggle.addEventListener('mousedown', menuClick );

    [].forEach.call(childOfUl, function(childOfUl){
      childOfUl.addEventListener('click', function (){
        unorderedList.style.display='none';
      })
    })
