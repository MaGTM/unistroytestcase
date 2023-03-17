import React from 'react';
import s from './ProfilePage.module.scss';
import { Header } from 'widgets/Header';
import { useEthers } from '@usedapp/core';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import Planet from 'shared/assets/images/planet.png';

const ProfilePage = () => {
    const { account } = useEthers();
    const user = useAppSelector(state => state.profile);

    return (
        <div className={s.ProfilePage}>
            <Header />
            <div className={s.info}>
                <h1>Personal data</h1>
                <div className={s.container}>
                    <div className={s.item}>
                        <span>Name</span>
                        <p>{user.name}</p>
                    </div>
                    <div className={s.item}>
                        <span>Email</span>
                        <p>{user.email}</p>
                    </div>
                    <div className={s.item}>
                        <span>Wallet</span>
                        <p>{account}</p>
                    </div>
                </div>
                <img src={Planet} alt="planet img"/>
            </div>
        </div>
    );
};

export default ProfilePage;
