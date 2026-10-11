
/* Ganti dengan nomor WhatsApp asli Bidan Hilda.
   Format: 62xxxxxxxxxx, tanpa tanda + atau spasi. */
const NOMOR_WA = "6281285145785";

const PESAN_WA = encodeURIComponent(
  "Halo Bidan Hilda, saya ingin bertanya tentang layanan home care."
);

const LINK_WA = `https://wa.me/${NOMOR_WA}?text=${PESAN_WA}`;

// Aktifkan seluruh tombol WhatsApp
document.querySelectorAll("[data-wa]").forEach((tombol) => {
  tombol.href = LINK_WA;
  tombol.target = "_blank";
  tombol.rel = "noopener noreferrer";
});

// Tahun copyright otomatis
const tahun = document.getElementById("year");

if (tahun) {
  tahun.textContent = new Date().getFullYear();
}

// Navigasi hamburger untuk HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const terbuka = navLinks.classList.toggle("open");

    menuToggle.textContent = terbuka ? "×" : "☰";
    menuToggle.setAttribute("aria-expanded", String(terbuka));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* Dropdown layanan pada tampilan HP */
document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
        if (window.innerWidth <= 760) {
            event.preventDefault();

            const dropdown = toggle.closest(".dropdown");
            const isOpen = dropdown.classList.toggle("open");

            toggle.setAttribute("aria-expanded", String(isOpen));
        }
    });
});

/* Tutup dropdown setelah memilih layanan */
document.querySelectorAll(".dropdown-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        const dropdown = link.closest(".dropdown");

        if (dropdown && window.innerWidth <= 760) {
            dropdown.classList.remove("open");

            const toggle = dropdown.querySelector(".dropdown-toggle");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
});

