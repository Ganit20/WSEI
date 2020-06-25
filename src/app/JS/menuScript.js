var openNav = (function() {
return { 
 openNav:function() {
  document.getElementById("hideMenuButton").style.display = "block";
  document.getElementById("showMenuButton").style.display = "none";
  document.getElementById("mMenuElement").style.display = "block";

  },
  closeNav:function() {
    document.getElementById("hideMenuButton").style.display = "none";
    document.getElementById("showMenuButton").style.display = "block";
  document.getElementById("mMenuElement").style.display = "none";

  },
  setStandardNav:function() {
    document.getElementById("hideMenuButton").style.display = "none";
    document.getElementById("showMenuButton").style.display = "none";
    document.getElementById("mMenuElement").style.display = "block";
  
    }}
})(openNav||{})




 