window.addEventListener("DOMContentLoaded", (event) => {
  let buttons = document.querySelectorAll("#accordion button");
  buttons.forEach((button) => {
    let content = button.nextElementSibling;
    let openIcon = document.querySelector(".icon-expand");
    let closeIcon = document.querySelector(".icon-close");
    button.addEventListener("click", (event) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.setAttribute("aria-expanded", false);
        content.style.maxHeight = null;
        content.setAttribute("aria-hidden", true);
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
      } else {
        button.classList.add("active");
        button.setAttribute("aria-expanded", true);
        content.style.maxHeight = content.scrollHeight + "px";
        content.setAttribute("aria-hidden", false);
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
      }
    });
  });

});