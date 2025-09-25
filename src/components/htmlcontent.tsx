"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function HTMLContent() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 98, { duration: 4.5 });
    return () => controls.stop();
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <motion.span initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 5, type: "spring" }} viewport={{ once: true, amount: 0.5 }} style={text}>
        {rounded}
      </motion.span>
      <span className="pt-8">Lorem ipsum</span>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const text = {
  fontSize: 60,
  color: "#2BB95D",
};
