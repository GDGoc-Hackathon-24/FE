type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
  };
  
  const Button = ({ label, variant = "primary", onClick }: ButtonProps) => {
    const baseStyles = "w-full text-sm font-medium py-2 rounded-lg focus:outline-none";
    const styles =
      variant === "primary"
        ? `${baseStyles} bg-green-500 text-white shadow hover:bg-green-600 focus:ring-2 focus:ring-green-500`
        : `${baseStyles} text-green-500 border border-green-500 hover:bg-green-50 focus:ring-2 focus:ring-green-500`;
  
    return (
      <button type = "button" className={styles} onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;
  