const coll = document.getElementsByClassName("collapsible");

Array.from(coll).forEach((element) => {
  element.addEventListener("click", function () {
    const content = this.nextElementSibling;
    element.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});