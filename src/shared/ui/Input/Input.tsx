import classNames from 'classnames';
import React, { FC } from 'react';
import s from './Input.module.scss';

interface InputProps {
    disabled: boolean,
    placeholder: string,
    className: string
}

const Input: FC<Partial<InputProps>> = (props) => {
    const {
        className,
        disabled,
        placeholder
    } = props;

    return (
        <input
            className={classNames(s.Input, className)}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
};

export default Input;
