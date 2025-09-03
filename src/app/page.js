"use client";
import SmoothScroll from "@/components/smoothScroll/index";
import Earth from "@/components/earth/index";
import About from "@/components/about";
import Header from "@/components/header/index";
import StickyCursor from "@/components/stickyCuror/index";
import Footer from "@/components/footer/index";
import Lenis from "lenis";
import { useEffect } from "react";

import { useRef } from "react";

export default function Home() {
  const stickyElement = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <StickyCursor stickyElement={stickyElement} />
      <SmoothScroll>
        <Header ref={stickyElement} />
        <About />
        <Earth />
        <Footer />
      </SmoothScroll>
    </>
  );
}
