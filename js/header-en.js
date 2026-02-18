(() => {
  const headerHTML = `
<header>
  <div class="container header-inner">
    <h1 class="site-title">
      <a href="index.html" class="site-title-link">
        <span class="site-affiliation">Electrical, Systems, and Control Engineering Program,<br> Graduate School of Advanced Science and Engineering<br>Hiroshima University</span>
        <span class="site-labname">Mechatronics Laboratory</span>
      </a>
    </h1>

    <nav>
      <ul>
        <li><a href="index.html">Top</a></li>
        <li><a href="members.html">Members</a></li>
        <li><a href="research.html">Research</a></li>
        <li><a href="publications.html">Publications</a></li>
        <li><a href="access.html">Access</a></li>
        <li><a href="links.html">Links</a></li>
        <li><a href="../index.html">Japanese</a></li>
      </ul>
    </nav>
  </div>
</header>
  `.trim();

  const mount = document.getElementById("site-header");
  if (mount) {
      mount.innerHTML = headerHTML;
      function adjustHeaderOffset() {
          const headerEl = document.querySelector("header");
          if (!headerEl) return;

          // �O�̂��ߎ��t���[���ő���i�ܕԂ�����̍����Y���h�~�j
          requestAnimationFrame(() => {
              const h = headerEl.getBoundingClientRect().height;
              document.documentElement.style.setProperty("--header-h", `${h}px`);
          });
      }

      // ����
      adjustHeaderOffset();

      // �摜/�t�H���g���f����Čv�Z
      window.addEventListener("load", adjustHeaderOffset);

      // ���T�C�Y�E��]�ōČv�Z�i�y���Ԉ����j
      let t;
      window.addEventListener("resize", () => {
          clearTimeout(t);
          t = setTimeout(adjustHeaderOffset, 80);
      });
      window.addEventListener("orientationchange", adjustHeaderOffset);
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }
})();