import React from 'react';
import s from './BetaForm.module.scss';
import Form from './components/Form/Form';
import FilledData from './components/FilledData/FilledData';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';

const BetaForm = () => {
    const state = useAppSelector(state => state.profile);

    return (
        <div className={s.BetaForm}>
            <div className={s.description}>
                <h2>Beta Test Registration</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>
            </div>
            {
                (!state.name || !state.email) ?
                    <Form />
                    :
                    <FilledData />
            }
        </div>
    );
};

export default BetaForm;
