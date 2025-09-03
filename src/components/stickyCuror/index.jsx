"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";

export default function StickyCursor({ stickyElement }) {
  const cursor = useRef(null);

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();

    // center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      // distance between the mouse pointer and the center
      const distance = { x: clientX - center.x, y: clientY - center.y };

      // stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));

      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);

      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
    }

    // update cursor position
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
  };

  useEffect(() => {
    if (!stickyElement?.current) return;

    stickyElement.current.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered, stickyElement]);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        ref={cursor}
        style={{
          scaleX: scale.x,
          scaleY: scale.y,
          x: smoothMouse.x,
          y: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
      />
    </div>
  );
}
