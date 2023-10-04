/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json');

/* auto-scroll for circle-click */
document.getElementById("me-circle").addEventListener("click", function() {
    var footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
});

/* load footer */
fetch('../components/footer.html')
  .then(response => response.text())
  .then(content => {
    document.getElementById('footer').innerHTML = content;
  });

