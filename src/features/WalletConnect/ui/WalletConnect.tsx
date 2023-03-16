import React from 'react';
import s from './WalletConnect.module.scss';
import { Button } from 'shared/ui';
import { useEthers } from '@usedapp/core';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../shared/config';

const WalletConnect = () => {
    const { account, activateBrowserWallet } = useEthers();
    return (
        <div className={s.WalletConnect}>
            {
                account ?
                    <Link to={RoutePaths.profile}>{account}</Link>
                    :
                    <Button onClick={activateBrowserWallet}>
                        CONNECT METAMASK
                    </Button>
            }
        </div>
    );
};

export default WalletConnect;
