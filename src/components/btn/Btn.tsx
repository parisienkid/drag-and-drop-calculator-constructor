import React, { FC } from 'react';
import './btn.sass';

interface BtnProps {
    children: React.ReactNode
    className?: string
}

const Btn: FC<BtnProps> = ({children, className}) => {

    return (
        <button className={`btn ${className}`}>
            {children}
        </button>
    );
};

export default Btn;