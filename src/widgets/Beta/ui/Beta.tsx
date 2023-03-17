import React from 'react';
import s from './Beta.module.scss';
import { BetaForm } from 'features/BetaForm';
import { ParticipantsList } from 'features/ParticipantsList';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

const Beta = () => {
    const isUser = useAppSelector(state => state.profile.name !== null && state.profile.email !== null);

    return (
        <div className={s.Beta}>
            <BetaForm />
            { isUser && <ParticipantsList /> }
        </div>
    );
};

export default Beta;
