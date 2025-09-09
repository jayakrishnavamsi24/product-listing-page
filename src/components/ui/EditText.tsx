import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'border border-gray-300 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-900',
        filled: 'bg-gray-50 text-gray-900',
        outlined: 'bg-transparent border-2',
      },
      size: {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface EditTextProps extends 
  React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right' | 'justify';
  text_color?: string;
  fill_background_color?: string;
  
  // Optional parameters (no defaults)
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
}

const EditText = ({
  // Required parameters with defaults
  placeholder = "Enter your e-mail...",
  text_font_size = "text-lg",
  text_font_family = "Simplon Norm",
  text_font_weight = "font-normal",
  text_line_height = "leading-relaxed",
  text_text_align = "left",
  text_color = "text-text-light",
  fill_background_color = "bg-background-primary",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  ...props
}: EditTextProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  // Build inline styles for required parameters
  const inputStyles: React.CSSProperties = {
    fontSize: text_font_size === "text-lg" ? "18px" : text_font_size,
    fontFamily: text_font_family || 'Simplon Norm',
    fontWeight: text_font_weight === "font-normal" ? "400" : text_font_weight,
    lineHeight: text_line_height === "leading-relaxed" ? "22px" : text_line_height,
    textAlign: text_text_align as any || 'left',
    color: text_color === "text-text-light" ? "#bec7cd" : text_color,
    backgroundColor: fill_background_color === "bg-background-primary" ? "#ffffff" : fill_background_color,
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;