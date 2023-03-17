import React, { useEffect, useState } from 'react';
import s from './ParticipantsList.module.scss';
import classNames from 'classnames';
import { useGetParticipantsQuery } from '../../../widgets/Beta/api/betaApi';
import { useInView } from 'react-intersection-observer';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { useEthers } from '@usedapp/core';
import { ReactComponent as Cross } from 'shared/assets/icons/cross.svg';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { removeData } from '../../../widgets/Beta/model/slices/profileSlice';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../../shared/config';

const ParticipantsList = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetParticipantsQuery(page);

    const userState = useAppSelector(state => state.profile);
    const { account } = useEthers();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && page !== data?.meta.totalPages) setPage(page + 1);
    }, [inView]);

    const removeParticipantHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(removeData());
    };

    const clickHandler = (id: number) => {
        navigate(`${RoutePaths.profile}/${id}`);
    };

    return (
        <div className={s.ParticipantsList}>
            <h2>Participation listing (enable only for participants)</h2>
            <div className={s.list}>
                <div className={classNames(s.title, s.gridItem)}>
                    <span>name</span>
                    <span>email</span>
                    <span>wallet</span>
                </div>
                {
                    !isLoading &&
                    <div className={s.container}>
                        <div
                            className={classNames(s.gridItem, s.item, s.currentUser)}
                        >
                            <Cross id={s.cross} onClick={removeParticipantHandler}/>
                            <span>{userState.name}</span>
                            <span>{userState.email}</span>
                            <span>{account}</span>
                        </div>
                        {
                            data?.items.map((item) => {
                                return (
                                    <div
                                        className={classNames(s.gridItem, s.item)}
                                        key={item.id}
                                        onClick={() => clickHandler(item.id)}
                                    >
                                        <span>{item.username}</span>
                                        <span>{item.email}</span>
                                        <span>{item.address}</span>
                                    </div>
                                );
                            })
                        }
                        <div id={s.intersectionBlock} ref={ref}/>
                    </div>
                }
            </div>
        </div>
    );
};

export default ParticipantsList;
