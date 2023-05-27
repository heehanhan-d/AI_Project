import React from 'react';
import { motion } from 'framer-motion';

export default function AboutDog() {
    return (
        <motion.div 
              variants={{
                end: {left: '0'}
              }}
              initial="start" 
              animate="end" 
              exit="exit"
              transition={{
                duration: 1,
                ease: "easeIn"
              }}
              style={{left: '-100px', position: 'relative', transform: 'scaleX(-1)'}}
        >🐕</motion.div>
    )
}
