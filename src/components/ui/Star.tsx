import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const starClasses = cva(
  'inline-block transition-all duration-200',
  {
    variants: {
      variant: {
        filled: 'text-yellow-400',
        outlined: 'text-gray-300',
        half: 'text-yellow-400',
      },
      size: {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6',
        xlarge: 'w-8 h-8',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
    },
  }
);

interface StarProps extends 
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof starClasses> {
  // Standard React props
  variant?: 'filled' | 'outlined' | 'half';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  rating?: number;
  maxRating?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const Star = ({
  variant,
  size,
  className,
  fillColor = '#ffffff',
  strokeColor = '#000000',
  rating = 1,
  maxRating = 1,
  interactive = false,
  onRatingChange,
  ...props
}: StarProps) => {
  const handleClick = (starIndex: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  const renderStar = (index: number) => {
    const isFilled = index < rating;
    const isHalf = variant === 'half' && index === Math.floor(rating) && rating % 1 !== 0;
    
    return (
      <div
        key={index}
        className={twMerge(
          starClasses({ variant: isFilled ? 'filled' : 'outlined', size }),
          interactive ? 'cursor-pointer hover:scale-110' : '',
          className
        )}
        onClick={() => handleClick(index)}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          fill={isFilled ? fillColor : 'none'}
          stroke={strokeColor}
          strokeWidth="2"
          className="w-full h-full"
        >
          {isHalf ? (
            <defs>
              <linearGradient id={`half-${index}`}>
                <stop offset="50%" stopColor={fillColor} />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          ) : null}
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={isHalf ? `url(#half-${index})` : undefined}
          />
        </svg>
      </div>
    );
  };

  if (maxRating === 1) {
    return renderStar(0);
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
    </div>
  );
};

export default Star;