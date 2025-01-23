interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
  }
  
  export default function Button({ children, className, variant, ...rest }: ButtonProps) {
    const variantClasses = {
      primary: 'bg-[#F9A826] hover:bg-gray-900 text-white text-white',
      secondary: 'bg-[#5AC3B6] hover:bg-[#5AC3B6]/80 text-white',
      destructive: 'bg-[#FF3B30] hover:bg-[#FF3B30]/80 text-white',
      outline: 'border border-gray-500 text-gray-500 hover:bg-gray-200',
    };
  
    return (
      <button
        className={`
        inline-flex items-center justify-center whitespace-nowrap text-sm 
        h-10
        w-auto
        px-3
        rounded-md
        ${variant ? variantClasses[variant] : variantClasses.primary}
        ${className}
        `}
        {...rest}
      >
        {children}
      </button>
    );
  }
  