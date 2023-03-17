import classNames from 'classnames';
import React, { FC } from 'react';
import s from './Input.module.scss';

interface InputProps {
    disabled: boolean,
    placeholder: string,
    className: string,
    id: string
}

const Input: FC<Partial<InputProps>> = (props) => {
    const {
        className,
        disabled,
        placeholder,
        id
    } = props;

    return (
        <input
            className={classNames(s.Input, className)}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            required
        />
    );
};

export default Input;
