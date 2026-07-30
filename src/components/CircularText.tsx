import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface CircularTextProps {
  text?: string;
  spinDuration?: number;
  onHover?: 'play' | 'speedUp' | 'pause' | 'slowDown';
  className?: string;
  fontSize?: number;
  letterSpacing?: number;
}

export default function CircularText({
  text = 'GROWWFY • PLANS • GROWWFY • PLANS • ',
  spinDuration = 15,
  onHover = 'speedUp',
  className = '',
  fontSize = 14,
  letterSpacing = 3,
}: CircularTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine dynamic duration based on hover state
  let currentDuration = spinDuration;
  if (isHovered) {
    if (onHover === 'pause') {
      currentDuration = 0; // Handled by CSS play state or paused animation
    } else if (onHover === 'speedUp') {
      currentDuration = spinDuration / 3;
    } else if (onHover === 'slowDown') {
      currentDuration = spinDuration * 2;
    }
  }

  // We can render a perfect circular text using SVG textPath
  // Center is 100, 100. Radius is 65.
  // This allows the text to fit perfectly inside a 200x200 container.
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center"
        animate={onHover === 'pause' && isHovered ? { rotate: 0 } : { rotate: 360 }}
        style={{
          // Use standard transition for smooth speed changes
          animationPlayState: onHover === 'pause' && isHovered ? 'paused' : 'running',
        }}
        transition={
          onHover === 'pause' && isHovered
            ? { duration: 0 }
            : {
                repeat: Infinity,
                duration: currentDuration,
                ease: "linear",
              }
        }
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Perfect circular path centered at (100, 100) with radius 65 */}
            <path
              id="circular-text-path"
              d="M 100, 100 m -65, 0 a 65,65 0 1, 1 130, 0 a 65,65 0 1, 1 -130, 0"
              fill="none"
            />
          </defs>
          <text 
            className="fill-zinc-900 dark:fill-zinc-100 font-sans font-black tracking-widest uppercase transition-colors duration-300"
            style={{ 
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              fontWeight: 900,
            }}
          >
            <textPath 
              href="#circular-text-path" 
              startOffset="0%"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center star inside the circular text - Only star is rendered, size is increased */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={isHovered ? { scale: [1, 1.2, 1], rotate: 360 } : {}}
          transition={
            isHovered 
              ? { 
                  scale: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                } 
              : { duration: 0.5 }
          }
          className="text-emerald-500 dark:text-emerald-400 drop-shadow-sm"
        >
          <Star className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
        </motion.div>
      </div>
    </div>
  );
}
