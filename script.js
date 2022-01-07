document.querySelector("#menu-open").addEventListener("click", (e) => {
  changeMenuVisible();
});

document.querySelector(".close").addEventListener("click", (e) => {
  changeMenuVisible();
});

function changeMenuVisible() {
  if (document.querySelector(".menu").classList.contains("active")) {
    document.querySelector(".menu").classList.remove("active");
    document.body.classList.remove(".open__menu");
    document.body.style.overflowY = "auto";
    document.getElementsByTagName("html")[0].style.overflowY = "auto";
  } else {
    document.querySelector(".menu").classList.add("active");
    document.body.style.overflowY = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
