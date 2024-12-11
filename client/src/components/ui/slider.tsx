// src/components/ui/slider.tsx

'use client'

import React, { useState } from 'react'

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({ value, onValueChange, min = 20, max = 1000, step = 10 }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(min, Math.min(max, Number(event.target.value)));
    onValueChange(newValue);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-green-400 rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>₹{min}</span>
        <span>₹{max}</span>
      </div>
    </div>
  )
}

export { Slider }
