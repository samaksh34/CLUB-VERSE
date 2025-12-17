import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <div
            className={`
        bg-card rounded-2xl border border-white/5 p-6
        ${hover ? 'hover:border-white/10 hover:bg-card-hover transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
