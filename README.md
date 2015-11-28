# ResponsiveVanilla
 A simple JavaScript/CSS driven Responsive Navigation

 Disclaimer: This is my first of many projects, I have been learning javascript for a several months now, this is my attempt at implementing what I have learned.

# Functionality
  Simple responsive drop down

  If the user clicks a link it will close the responsive navigation.

# Future Additions and changes

In the future I plan to add various other responsive elements to this project, all of them will be written in pure JavaScript, CSS, and HTML!!!

When the viewport changes to 900px a CSS !Important rule overrides any javascript programming that would effect the display property on desktop. In the future I would like to find a way to do this with Javascript or a more elegant css implementation.

Right now the menu drops down on a double click, in the future I would like to find a way to change this to a single click as it seems it also effects the experience on mobile.



# Dependent Classes and Id selectors

class: .link : allows the drop down menu to close when the user clicks a link

ID: #navUl : this is the element that the app.js uses heavily to allow the element to "drop down".

ID: #menuToggleClose : this is the Id for the menu button when the viewport is running at or below 899px
