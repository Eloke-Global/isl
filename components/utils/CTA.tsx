type CTAProps = {
    text: string;
    variant?: 'primary' | 'secondary';
  };
  
  const CTA = ({ text, variant = 'primary' }: CTAProps) => {
    const baseStyles = "px-6 py-3.5 rounded transition-colors";
    const variantStyles = variant === 'primary' 
      ? "bg-gray-900 text-white hover:bg-gray-800" 
      : "bg-[#E8E8E8] text-black hover:bg-gray-200";
  
    return (
      <button className={`${baseStyles} ${variantStyles}`}>
        {text}
      </button>
    );
  };
  
  export default CTA;