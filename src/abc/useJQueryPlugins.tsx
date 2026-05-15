import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useJQueryPlugins() {
  const location = useLocation();

  useEffect(() => {
    const $ = (window as any).$;
    if (!$) return;

    const timer = setTimeout(() => {
      initAll($);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}

function initAll($: any) {
  // ── Sticky Header ──────────────────────────────────────────────────
  $(window)
    .off("scroll.sticky")
    .on("scroll.sticky", function () {
      if ($(window).scrollTop() < 245) {
        $("#header-sticky").removeClass("sticky-menu");
      } else {
        $("#header-sticky").addClass("sticky-menu");
      }
    });

  // ── Mobile MeanMenu ────────────────────────────────────────────────
  if ($.fn.meanmenu) {
    const $mob = $(".mobile-menu");
    try {
      $mob.data("meanmenu") && $mob.meanmenu("destroy");
    } catch (_) {}
    $mob.meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
    });
  }

  // ── Helper: init slick tránh double-init ───────────────────────────
  const slick = (selector: string, opts: object) => {
    const $el = $(selector);
    if (!$el.length || !$.fn.slick) return;
    if ($el.hasClass("slick-initialized")) $el.slick("unslick");
    $el.slick(opts);
  };

  // ── Hero Slider ────────────────────────────────────────────────────
  slick(".slider-active", {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  });

  // ── Brand Logo Slider ──────────────────────────────────────────────
  slick(".brand-active", {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  });

  // ── Testimonial Slider ─────────────────────────────────────────────
  slick(".testimonial-active", {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  });

  // ── Product Slider ─────────────────────────────────────────────────
  slick(".home-blog-active", {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });

  // ── WOW Animations ─────────────────────────────────────────────────
  if ((window as any).WOW) {
    new (window as any).WOW({ live: false }).init();
  }

  // ── ScrollUp Button ────────────────────────────────────────────────
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fas fa-angle-up"></i>',
    });
  }

  // ── Counter Up ─────────────────────────────────────────────────────
  if ($.fn.counterUp) {
    $(".count").counterUp({ delay: 10, time: 1000 });
  }

  // ── Magnific Popup (gallery lightbox) ──────────────────────────────
  if ($.fn.magnificPopup) {
    $(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }
}
