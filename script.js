let maxsidebar = document.querySelector(".maxsidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  maxsidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
searchBtn.addEventListener("click", () => {
  // maxsidebar open when you click on the search iocn
  maxsidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change maxsidebar button(optional)
function menuBtnChange() {
  if (maxsidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}
