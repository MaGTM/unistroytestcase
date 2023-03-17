import React from 'react';
import s from './ProfilePage.module.scss';
import { Header } from 'widgets/Header';
import { useEthers } from '@usedapp/core';
import Planet from 'shared/assets/images/full planet image.png';
import { useParams } from 'react-router-dom';
import { useGetProfileQuery } from '../api/profileApi';

const ProfilePage = () => {
    const { account } = useEthers();
    const { id } = useParams();
    if(typeof id === 'undefined') {
        return <div></div>;
    }
    const { data, isLoading } = useGetProfileQuery(id);

    return (
        <div className={s.ProfilePage}>
            <Header />
            {
                (isLoading || typeof data === 'undefined') ?
                    <div></div>
                    :
                    <div className={s.info}>
                        <h1>Personal data</h1>
                        <div className={s.container}>
                            <div className={s.item}>
                                <span>Name</span>
                                <p>{data.username}</p>
                            </div>
                            <div className={s.item}>
                                <span>Email</span>
                                <p>{data.email}</p>
                            </div>
                            <div className={s.item}>
                                <span>Wallet</span>
                                <p>{account}</p>
                            </div>
                        </div>
                        <img src={Planet} alt="planet img"/>
                    </div>
            }
        </div>
    );
};

export default ProfilePage;
