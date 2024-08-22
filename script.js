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

document.addEventListener("DOMContentLoaded", () => {
  const directionRlt = document.getElementById("directionRlt");
  const directionLtr = document.getElementById("directionLtr");
  const body = document.body;
  const elementsToToggle = [
    document.getElementById("maxsidebar"),
    document.getElementById("dashboard-section"),
    document.getElementById("maxSidebarlogout"),
    document.getElementById("payroll-plus-btn"),
    ...document.querySelectorAll(".tooltip"),
  ];

  function applyRtl() {
    body.classList.add("rtl");
    elementsToToggle.forEach((el) => el?.classList.add("rlt"));
    localStorage.setItem("direction", "rtl");
  }

  function applyLtr() {
    body.classList.remove("rtl");
    elementsToToggle.forEach((el) => el?.classList.remove("rlt"));
    localStorage.setItem("direction", "ltr");
  }

  directionRlt?.addEventListener("click", applyRtl);
  directionLtr?.addEventListener("click", applyLtr);

  // Apply saved direction preference on page load
  const savedDirection = localStorage.getItem("direction");
  if (savedDirection === "rtl") {
    applyRtl();
  } else {
    applyLtr();
  }
});

// ============  Login =============

function forgotPass() {
  event.preventDefault();
  document.getElementById("login-con").style.display = "none";
  document.getElementById("forgotPass-con").style.display = "block";
}

function backLogPass() {
  event.preventDefault();
  document.getElementById("login-con").style.display = "block";
  document.getElementById("forgotPass-con").style.display = "none";
}

// ============  Profile =============

function editPersonalDetailsBtn() {
  document.getElementById("editPersonalDetailsBtn").style.display = "none";
  document.getElementById("savePersonalDetailsBtn").style.display = "block";

  var inputs = document.querySelectorAll("#personal-details input");
  inputs.forEach(function (input) {
    input.removeAttribute("readonly");
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
    input.setAttribute("readonly", "true");
    input.style.border = "0px";
    input.style.padding = "0px";
    input.style.width = "90%";
  });
}

function editAddressBtn() {
  document.getElementById("editAddressBtn").style.display = "none";
  document.getElementById("saveAddressBtn").style.display = "block";
  var inputs = document.querySelectorAll("#pro-addres input");
  inputs.forEach(function (input) {
    input.removeAttribute("readonly");
    input.style.border = "1px solid gray";
    input.style.padding = "5px 10px";
    input.style.width = "90%";
    input.style.borderRadius = "2px";
  });
}

function saveAddressBtn() {
  document.getElementById("editAddressBtn").style.display = "block";
  document.getElementById("saveAddressBtn").style.display = "none";
  var inputs = document.querySelectorAll("#pro-addres input");
  inputs.forEach(function (input) {
    input.setAttribute("readonly", "true");
    input.style.border = "0px";
    input.style.padding = "0px";
    input.style.width = "90%";
  });
}

// ============  Dark Mode =============

function setDarkMode(isDark) {
  const themeIcon = document.getElementById("themeIcon");

  if (isDark) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    themeIcon.setAttribute("icon", "iconamoon:mode-light-light"); // Change to light mode icon
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    themeIcon.setAttribute(
      "icon",
      "material-symbols:dark-mode-outline-rounded"
    ); 
    // Change to dark mode icon
  }
}

if (localStorage.getItem("darkMode") === "enabled") {
  setDarkMode(true);
} else {
  setDarkMode(false);
}

document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    const isDarkModeEnabled = document.body.classList.contains("dark-mode");
    setDarkMode(!isDarkModeEnabled);
  });

// ============  Hamburger =============

document.getElementById("hamburgerMenu").addEventListener("click", function () {
  document.getElementById("headerMenu").classList.toggle("active");
});
