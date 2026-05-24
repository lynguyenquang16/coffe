import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useJQueryPlugins() {
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      const w = window as any;
      if (w.$ && w.$.fn && w.$.fn.isotope) {
        try {
          const $grid = w.$(".grid, .home-blog-active");
          if ($grid.length) {
            $grid.isotope({ itemSelector: ".col-lg-4, .col-md-12", percentPosition: true });
            $grid.isotope("layout");
          }
        } catch (e) { console.log(e); }
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [location]);
}
