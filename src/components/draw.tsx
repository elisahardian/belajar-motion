// "use client";

// import { motion, Variants } from "motion/react";

// const draw: Variants = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i: number) => {
//     const delay = i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 8, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };

// export default function HouseDrawing() {
//   return (
//     <motion.svg width="600" height="600" viewBox="0 0 600 600" initial="hidden" animate="visible" style={image}>
//       <motion.polygon points="150,200 300,80 450,200" stroke="#007411ff" variants={draw} custom={1} style={shape} />

//       <motion.rect x="170" y="200" width="260" height="250" stroke="#007411ff" variants={draw} custom={2} style={shape} />

//       <motion.rect x="270" y="320" width="60" height="130" stroke="#06ce9cff" variants={draw} custom={3} style={shape} />

//       <motion.rect x="200" y="240" width="50" height="50" stroke="#06ce9cff" variants={draw} custom={3.5} style={shape} />

//       <motion.rect x="350" y="240" width="50" height="50" stroke="#06ce9cff" variants={draw} custom={4} style={shape} />
//     </motion.svg>
//   );
// }

// /**
//  * ==============   Styles   ================
//  */

// const image: React.CSSProperties = {
//   maxWidth: "60vw",
// };

// const shape: React.CSSProperties = {
//   strokeWidth: 8,
//   strokeLinecap: "round",
//   fill: "transparent",
// };
