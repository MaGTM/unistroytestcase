import React from 'react';
import s from './WalletConnect.module.scss';
import { Button } from 'shared/ui';
import { useEthers } from '@usedapp/core';

const WalletConnect = () => {
    const { account, activateBrowserWallet } = useEthers();
    return (
        <div className={s.WalletConnect}>
            {
                account ?
                    <p>{account}</p>
                    :
                    <Button onClick={activateBrowserWallet}>
                        CONNECT METAMASK
                    </Button>
            }
        </div>
    );
};

export default WalletConnect;
