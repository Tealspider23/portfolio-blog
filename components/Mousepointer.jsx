"use client";

import { useEffect, useState } from "react";

const MousePointer = () => {
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicking ? "clicking" : ""}`}
      style={{
        position: "fixed",
        width: isClicking ? "15px" : "20px", // Shrink on click
        height: isClicking ? "15px" : "20px", // Shrink on click
        borderRadius: "50%",
        border: "2px solid #ffffff", // Bold ring with border color
        backgroundColor: "transparent", // Transparent background
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.2s, height 0.2s",
      }}
    ></div>
  );
};

export default MousePointer;
