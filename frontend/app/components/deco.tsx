import { useState, useEffect } from 'react'
import type { FC } from 'react'

export const Deco: FC = () => {
  return (
    <div className="absolute top-0 w-full h-full overflow-hidden z-0">
      {[...Array(4).keys()].map((i) => (
        <div
          className="absolute right-0 w-2/3 md:w-auto"
          key={i}
          style={{ top: `${i * 1400 + 600}px`, height: '800px' }}
        >
          <img
            className="w-full h-full object-contain"
            src="images/deco-1.png"
          />
        </div>
      ))}

      {[...Array(4).keys()].map((i) => (
        <div
          key={i}
          className="absolute left-0 w-2/3 md:w-auto"
          style={{ top: `${i * 1400 + 1400}px`, height: '600px' }}
        >
          <img
            className="w-full h-full object-contain"
            src="images/deco-2.png"
          />
        </div>
      ))}
    </div>
  )
}
