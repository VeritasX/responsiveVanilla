var navElement=document.getElementById('documentNav'),
  menuButton=document.getElementById('menuToggleClose'),
  unorderedList=document.getElementById('navUl'),
  unorderedList2=document.getElementById('navUl2'),
  linkTag=document.getElementsByTagName('a');


  menuButton.addEventListener('click', function (){
      if (unorderedList){
        unorderedList.style.display='block';
        unorderedList.id='navUl2';
      }
      if(unorderedList2){
        unorderedList2.style.display='none';
        unorderedList2.id='navUl';
      }
  });
