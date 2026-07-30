/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface MeteorStyle {
  top: string;
  left: string;
  delay: string;
  duration: string;
}

interface MeteorsProps {
  count?: number;
}

export default function Meteors({ count = 24 }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    // Generate random values for each meteor to achieve organic looking trails
    const styles: MeteorStyle[] = Array.from({ length: count }).map((_, idx) => {
      // Start all meteors off-screen at the top so they are fully visible for their entire trajectory
      const topVal = `${Math.floor(Math.random() * -100) - 30}px`;
      
      // Since they travel diagonally down-right (215deg with negative translation),
      // we evenly distribute starting points. To make sure there is heavy coverage
      // behind the left-side text and buttons, we bias half of them to start on the left.
      let leftVal: string;
      if (idx % 2 === 0) {
        // Left-side and middle-left starting points (-25% to 45%)
        // This guarantees high density falling directly behind the main heading and CTA buttons
        leftVal = `${Math.floor(Math.random() * 70) - 25}%`;
      } else {
        // Right-side starting points (45% to 115%)
        leftVal = `${Math.floor(Math.random() * 70) + 45}%`;
      }

      // Delays scattered widely to ensure non-synchronized falling
      const delayVal = (Math.random() * 8).toFixed(2);
      // Fast, smooth, premium speeds (3.5s to 7.5s)
      const durationVal = (Math.random() * 4 + 3.5).toFixed(2);

      return {
        top: topVal,
        left: leftVal,
        delay: `${delayVal}s`,
        duration: `${durationVal}s`,
      };
    });

    setMeteorStyles(styles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className="meteor-item"
          style={{
            top: style.top,
            left: style.left,
            '--delay': style.delay,
            '--duration': style.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
