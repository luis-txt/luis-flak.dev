/* collapsible */
var colls = document.getElementsByClassName("collapsible");

for (var i = 0; i < colls.length; i++) {
  colls[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight 
      ? null 
      : (content.scrollHeight * 2) + "px"; //*2 for scalability
  });
}

