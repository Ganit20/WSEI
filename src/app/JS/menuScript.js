var openNav = (function() {
return { 
 openNav:function() {
  document.getElementById("hideMenuButton").style.display = "block";
  document.getElementById("showMenuButton").style.display = "none";
  var mainMenuElement = document.getElementById("mMenuElement")
  mainMenuElement.style.display = "block";
  var size = document.getElementById("mMenuElement").getBoundingClientRect();
  mainMenuElement.style.left =0 - size.width;
  
  var pos = 0 - size.width;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos >= 0) {
      clearInterval(id);
    } else {
      pos+= 5;  
      mainMenuElement.style.left = pos + "px"; 
      
    }
  }
  },
  closeNav:function() {
    document.getElementById("showMenuButton").style.display = "block";
  
  var mainMenuElement = document.getElementById("mMenuElement")
  var size = document.getElementById("mMenuElement").getBoundingClientRect();
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos <= 0 - size.width) {
      clearInterval(id);
      document.getElementById("mMenuElement").style.display = "none";
    } else {
      pos-= 5;  
      mainMenuElement.style.left = pos + "px"; 
    }
  }
  
  },
  setStandardNav:function() {
    document.getElementById("showMenuButton").style.display = "none";
    document.getElementById("mMenuElement").style.display = "block";
  
    }}
})(openNav||{})




 