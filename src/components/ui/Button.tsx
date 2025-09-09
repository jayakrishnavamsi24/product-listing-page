import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right' | 'justify';
  text_text_decoration_line?: string;
  text_color?: string;
  fill_background_color?: string;
  
  // Optional parameters (no defaults)
  text_text_transform?: string;
  border_border?: string;
  border_border_radius?: string;
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Standard React props
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  // Required parameters with defaults
  text = "HIDE FILTER",
  text_font_size = "text-base",
  text_font_family = "Adobe Caslon Pro",
  text_font_weight = "font-normal",
  text_line_height = "leading-normal",
  text_text_align = "right",
  text_text_decoration_line = "underline",
  text_color = "text-text-muted",
  fill_background_color = "bg-background-primary",
  
  // Optional parameters (no defaults)
  text_text_transform,
  border_border,
  border_border_radius,
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidTextTransform = text_text_transform && typeof text_text_transform === 'string' && text_text_transform.trim() !== '';
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border.trim() !== '';
  const hasValidBorderRadius = border_border_radius && typeof border_border_radius === 'string' && border_border_radius.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidTextTransform ? `${text_text_transform}` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  // Build inline styles for required parameters
  const buttonStyles: React.CSSProperties = {
    fontSize: text_font_size === "text-base" ? "16px" : text_font_size,
    fontFamily: text_font_family || 'Adobe Caslon Pro',
    fontWeight: text_font_weight === "font-normal" ? "400" : text_font_weight,
    lineHeight: text_line_height === "leading-normal" ? "20px" : text_line_height,
    textAlign: text_text_align as any || 'right',
    textDecoration: text_text_decoration_line || 'underline',
    color: text_color === "text-text-muted" ? "#878691" : text_color,
    backgroundColor: fill_background_color === "bg-background-primary" ? "#ffffff" : fill_background_color,
    border: hasValidBorder ? border_border : 'none',
    borderRadius: hasValidBorderRadius ? border_border_radius : '0',
  };

  // Safe click handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;