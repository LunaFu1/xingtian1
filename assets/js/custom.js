(function ($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  if (close && menu) {
    close.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  }

  // Close menu after click on smaller screens
  $(window).on("resize", function () {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function () {
        menu && menu.classList.remove("open");
      });
    }
  });

  // Owl Carousel setup
  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  });

  // Hover effect remove on mouse leave
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

  // Isotope filtering
  $(".isotope-wrapper").each(function () {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function () {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  // Lightbox settings
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);

// Read More/Read Less toggle
document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.getElementById("about-text");
  const toggleBtn = document.getElementById("toggle-btn");

  if (aboutText && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      aboutText.classList.toggle("collapsed");
      toggleBtn.textContent = aboutText.classList.contains("collapsed")
        ? "READ MORE"
        : "READ LESS";
    });
  }
});
