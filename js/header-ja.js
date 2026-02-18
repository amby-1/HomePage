(() => {
  const headerHTML = `
<header>
  <div class="container header-inner">
    <h1 class="site-title">
      <a href="index.html" class="site-title-link">
        <span class="site-affiliation">広島大学大学院先進理工系科学研究科<br>　電気システム制御プログラム</span>
        <span class="site-labname">メカトロニクス研究室</span>
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
        <li><a href="en/index.html">English</a></li>
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

          // 念のため次フレームで測る（折返し直後の高さズレ防止）
          requestAnimationFrame(() => {
              const h = headerEl.getBoundingClientRect().height;
              document.documentElement.style.setProperty("--header-h", `${h}px`);
          });
      }

      // 初回
      adjustHeaderOffset();

      // 画像/フォント反映後も再計算
      window.addEventListener("load", adjustHeaderOffset);

      // リサイズ・回転で再計算（軽く間引く）
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