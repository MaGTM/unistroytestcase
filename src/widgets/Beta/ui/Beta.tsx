import React from 'react';
import s from './Beta.module.scss';
import { BetaForm } from 'features/BetaForm';

const Beta = () => {
    return (
        <div className={s.Beta}>
            <BetaForm />
        </div>
    );
};

export default Beta;
