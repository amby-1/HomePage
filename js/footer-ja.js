(() => {
  const footerHTML = `
<footer>
  <div class="container">
    <p>&copy; 2025 Hiroshima University Mechatronics Laboratory. All Rights Reserved.</p>
  </div>
</footer>
  `.trim();

  const mount = document.getElementById("site-footer");
  if (mount) {
    mount.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
})();
