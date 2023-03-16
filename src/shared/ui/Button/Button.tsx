import React, { FC } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
    children: React.ReactNode,
    disabled: boolean,
    onClick: (e?: React.MouseEvent) => void,
    className: string
}

const Button: FC<Partial<ButtonProps>> = (props) => {
    const {
        className,
        children,
        disabled,
        onClick
    } = props;

    return (
        <button
            className={classNames(s.Button, className)}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
