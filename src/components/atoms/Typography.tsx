interface TypographyProps {
  type?: 'title' | 'subtitle' | 'paragraph' | 'placeholder';
  variant?: 'primary' | 'secondary';
  textColor?: string;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ type, variant = 'primary', textColor, children, className = '' }: TypographyProps) => {
  const getDefaultColor = () => {
    if (type === 'placeholder') return '#c4c4c4';
    return variant === 'primary' ? '#000' : '#0ab463';
  };
  
  const color = textColor || getDefaultColor();
  
  const getFontSizeClass = () => {
    if (type === 'title') return 'text-lg';
    if (type === 'subtitle') return 'text-md';
    if (type === 'paragraph' || type === 'placeholder') return 'text-sm';
    return 'text-base';
  };
  
  const getFontWeightClass = () => {
    if (type === 'paragraph') return 'font-semibold';
    return 'font-bold';
  };
  
  const fontFamily = variant === 'secondary' ? 'Poppins, sans-serif' : 'Montserrat, sans-serif';
  const fontSizeClass = getFontSizeClass();
  const fontWeightClass = getFontWeightClass();
  
  return (
    <span 
      className={`${fontSizeClass} ${fontWeightClass} leading-normal tracking-normal ${className}`}
      style={{
        color,
        fontFamily,
        fontStretch: 'normal',
        fontStyle: 'normal',
      }}
    >
      {children}
    </span>
  );
};
