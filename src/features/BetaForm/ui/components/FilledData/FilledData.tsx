import React from 'react';
import s from './FilledData.module.scss';
import { useAppSelector } from '../../../../../shared/lib/hooks/useAppSelector';
import { Button } from 'shared/ui';

const FilledData = () => {
    const state = useAppSelector(state => state.profile);

    return (
        <div className={s.FilledData}>
            <div className={s.item}>
                <span>NAME</span>
                <p>{state.name}</p>
            </div>
            <div className={s.item}>
                <span>EMAIL</span>
                <p>{state.email}</p>
            </div>
            <Button disabled>
                List me to the table
            </Button>
        </div>
    );
};

export default FilledData;
