import React from 'react';
import s from './BetaForm.module.scss';
import { useEthers } from '@usedapp/core';
import Form from './components/Form/Form';
import FilledData from './components/FilledData/FilledData';

const BetaForm = () => {
    const { account } = useEthers();

    return (
        <div className={s.BetaForm}>
            <h2>Beta Test Registration</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            {
                account ?
                    <FilledData />
                    :
                    <Form />
            }
        </div>
    );
};

export default BetaForm;
