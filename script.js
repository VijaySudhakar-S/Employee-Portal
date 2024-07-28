let maxsidebar = document.querySelector(".maxsidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  maxsidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (maxsidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// =========  LTR to RTL =============

const directionToggle = document.getElementById("directionToggle");
const body = document.body;
const maxSidebar = document.getElementById("maxsidebar");
const dashboardSection = document.getElementById("dashboard-section");
const maxSidebarlogout = document.getElementById("maxSidebarlogout");
const tooltips = document.querySelectorAll(".tooltip");
const payrollPlusBtn = document.getElementById("payroll-plus-btn");

directionToggle.addEventListener("click", () => {
  body.classList.toggle("rtl");
  maxSidebar.classList.toggle("rlt");
  dashboardSection.classList.toggle("rlt");
  maxSidebarlogout.classList.toggle("rlt");
  payrollPlusBtn.classList.toggle("rlt");
  tooltips.forEach((tooltip) => {
    tooltip.classList.toggle("rlt");
  });
});
