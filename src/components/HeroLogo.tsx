"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroLogo: React.FC = () => {
  return (
    <div className="flex gap-3 w-fit mb-2">
      <div className="text-[#F7931A]">
        {/* Bitcoin Icon Placeholder - Using a simple circle for now as we don't have iconify */}
        <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center font-bold text-[10px]">₿</div>
      </div>
      <div className="text-zinc-500">
        {/* Programming Book Icon Placeholder */}
        <div className="w-6 h-6 border-2 border-current flex items-center justify-center font-bold text-[10px]">📖</div>
      </div>
      <motion.div
        animate={{
          x: [0, 0, 48, 48, 0, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.125, 0.375, 0.5, 0.75, 1]
        }}
        className="text-zinc-500"
      >
        {/* Coffee Icon Placeholder */}
        <div className="w-6 h-6 border-2 border-current flex items-center justify-center font-bold text-[10px]">☕</div>
      </motion.div>
    </div>
  );
};

export default HeroLogo;
