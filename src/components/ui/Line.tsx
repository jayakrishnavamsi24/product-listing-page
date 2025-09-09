import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const lineClasses = cva(
  'block',
  {
    variants: {
      orientation: {
        horizontal: 'w-full',
        vertical: 'h-full',
      },
      variant: {
        solid: 'bg-current',
        dashed: 'border-dashed border-current',
        dotted: 'border-dotted border-current',
      },
      thickness: {
        thin: '',
        medium: '',
        thick: '',
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        thickness: 'thin',
        className: 'h-px',
      },
      {
        orientation: 'horizontal',
        thickness: 'medium',
        className: 'h-0.5',
      },
      {
        orientation: 'horizontal',
        thickness: 'thick',
        className: 'h-1',
      },
      {
        orientation: 'vertical',
        thickness: 'thin',
        className: 'w-px',
      },
      {
        orientation: 'vertical',
        thickness: 'medium',
        className: 'w-0.5',
      },
      {
        orientation: 'vertical',
        thickness: 'thick',
        className: 'w-1',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'solid',
      thickness: 'thin',
    },
  }
);

interface LineProps extends 
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof lineClasses> {
  // Custom props
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  
  // Standard React props
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  thickness?: 'thin' | 'medium' | 'thick';
}

const Line = ({
  width,
  height,
  color = '#ffffff',
  className,
  orientation,
  variant,
  thickness,
  ...props
}: LineProps) => {
  // Determine orientation based on width and height if provided
  let autoOrientation = orientation;
  if (!orientation && width && height) {
    const widthNum = parseInt(width);
    const heightNum = parseInt(height);
    autoOrientation = widthNum > heightNum ? 'horizontal' : 'vertical';
  }

  // Build custom styles
  const customStyles: React.CSSProperties = {
    backgroundColor: variant === 'solid' ? color : 'transparent',
    borderColor: variant !== 'solid' ? color : undefined,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

  // Build custom classes for exact dimensions
  const customClasses = [
    width ? `w-[${width}px]` : '',
    height ? `h-[${height}px]` : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={twMerge(
        lineClasses({ 
          orientation: autoOrientation, 
          variant, 
          thickness 
        }),
        customClasses,
        className
      )}
      style={customStyles}
      role="separator"
      aria-orientation={autoOrientation}
      {...props}
    />
  );
};

export default Line;