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

const directionRlt = document.getElementById("directionRlt");
const directionLtr = document.getElementById("directionLtr");
const body = document.body;
const maxSidebar = document.getElementById("maxsidebar");
const dashboardSection = document.getElementById("dashboard-section");
const maxSidebarlogout = document.getElementById("maxSidebarlogout");
const tooltips = document.querySelectorAll(".tooltip");
const payrollPlusBtn = document.getElementById("payroll-plus-btn");

directionRlt.addEventListener("click", () => {
  body.classList.add("rtl");
  maxSidebar.classList.add("rlt");
  dashboardSection.classList.add("rlt");
  maxSidebarlogout.classList.add("rlt");
  payrollPlusBtn.classList.add("rlt");
  tooltips.forEach((tooltip) => {
    tooltip.classList.add("rlt");
  });
});

directionLtr.addEventListener("click", () => {
  body.classList.remove("rtl");
  maxSidebar.classList.remove("rlt");
  dashboardSection.classList.remove("rlt");
  maxSidebarlogout.classList.remove("rlt");
  payrollPlusBtn.classList.remove("rlt");
  tooltips.forEach((tooltip) => {
    tooltip.classList.remove("rlt");
  });
});

// ============  Profile =============

function editPersonalDetailsBtn() {
  document.getElementById("editPersonalDetailsBtn").style.display = "none";
  document.getElementById("savePersonalDetailsBtn").style.display = "block";

  var inputs = document.querySelectorAll("#personal-details input");
  inputs.forEach(function (input) {
    input.style.border = "1px solid gray";
    input.style.padding = "5px 10px";
    input.style.width = "90%";
    input.style.borderRadius = "2px";
  });
}

function savePersonalDetailsBtn() {
  document.getElementById("editPersonalDetailsBtn").style.display = "block";
  document.getElementById("savePersonalDetailsBtn").style.display = "none";

  var inputs = document.querySelectorAll("#personal-details input");
  inputs.forEach(function (input) {
    input.style.border = "0px";
    input.style.padding = "5px 10px";
    input.style.width = "90%";
  });
}

function editAddressBtn() {
  document.getElementById("editAddressBtn").style.display = "none";
  document.getElementById("saveAddressBtn").style.display = "block";
  var inputs = document.querySelectorAll("#profile-address input");
  inputs.forEach(function (input) {
    input.style.border = "1px solid gray";
    input.style.padding = "5px 10px";
    input.style.width = "90%";
    input.style.borderRadius = "2px";
  });
}

function saveAddressBtn() {
  document.getElementById("editAddressBtn").style.display = "block";
  document.getElementById("saveAddressBtn").style.display = "none";
  var inputs = document.querySelectorAll("#profile-address input");
  inputs.forEach(function (input) {
    input.style.border = "0px";
    input.style.padding = "5px 10px";
    input.style.width = "90%";
  });
}
