"use client";

import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ target: ref });
  const x = useParallax(scrollXProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img src={`/assets/image${id}.jpg`} alt="Image" />
      </div>
      <motion.h2 initial={{ visibility: "hidden" }} animate={{ visibility: "visible" }} style={{ x }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function ParallaxHorizontal() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example" ref={containerRef} className="scroll-container">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
      .scroll-container {
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        height: 70vh;
        width: 100vw;
      }

      .img-container {
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex: 0 0 100vw; 
      }

      .img-container > div {
        width: 300px;
        height: 400px;
        margin: 20px;
        background: #f5f5f5;
        overflow: hidden;
      }

      .img-container img {
        width: 300px;
        height: 400px;
      }

      @media (max-width: 500px) {
        .img-container > div {
          width: 150px;
          height: 200px;
        }

        .img-container img {
          width: 150px;
          height: 200px;
        }
      }

      .img-container h2 {
        color: #8df0cc;
        margin: 0;
        font-family: "Azeret Mono", monospace;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;
        position: absolute;
        top: calc(50% - 25px);
        left: calc(50% + 120px);
      }

      .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 5px;
        background: #8df0cc;
        bottom: 5px;
        transform: scaleX(0);
      }
    `}</style>
  );
}
