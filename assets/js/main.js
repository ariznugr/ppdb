(() => {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  const copyBtn = document.querySelector("[data-copy-wa]");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const wa = copyBtn.getAttribute("data-copy-wa") || "";
      try {
        await navigator.clipboard.writeText(wa);
        copyBtn.textContent = "Nomor WA disalin ✓";
        setTimeout(() => (copyBtn.textContent = "Salin nomor WA"), 1800);
      } catch (_) {
        alert("Gagal menyalin. Silakan salin manual: " + wa);
      }
    });
  }
})();
