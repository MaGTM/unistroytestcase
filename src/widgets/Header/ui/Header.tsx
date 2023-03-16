import React from 'react';
import s from './Header.module.scss';
import { WalletConnect } from 'features/WalletConnect';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../shared/config';

const Header = () => {
    return (
        <header className={s.Header}>
            <Link to={RoutePaths.main} className={s.logo}>
                LOGO
            </Link>
            <WalletConnect />
        </header>
    );
};

export default Header;
