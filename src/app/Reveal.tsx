import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  delay: number;
  inView: boolean;
}

export default function Reveal({ children, delay, inView }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("shown");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          shown: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={inView ? controls : "shown"}
        transition={{ duration: 1.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
