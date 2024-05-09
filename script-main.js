const accordian = document.getElementsByClassName("accordian-open");
let i;

for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}