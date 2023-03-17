import React from 'react';
import s from './FilledData.module.scss';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Button } from 'shared/ui';
import { useAppDispatch } from '../../../../../shared/lib/hooks/useAppDispatch';
import { startParticipating } from '../../../../../widgets/Beta/model/slices/profileSlice';

const FilledData = () => {
    const userState = useAppSelector(state => state.profile);
    const dispatch = useAppDispatch();

    function clickHandler() {
        dispatch(startParticipating());
    }

    return (
        <div className={s.FilledData}>
            <div className={s.item}>
                <span>NAME</span>
                <p>{userState.name}</p>
            </div>
            <div className={s.item}>
                <span>EMAIL</span>
                <p>{userState.email}</p>
            </div>
            <Button
                disabled={userState.isParticipating}
                onClick={clickHandler}
            >
                List me to the table
            </Button>
        </div>
    );
};

export default FilledData;
