import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-secondary to-primary text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:bg-opacity-90",
        secondary: "bg-card border border-white/10 text-white hover:bg-white/5 hover:border-white/20",
        text: "bg-transparent text-gray-300 hover:text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
