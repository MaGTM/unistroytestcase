import React, { FC, useEffect } from 'react';
import s from './MetamaskWarning.module.scss';
import { Button } from 'shared/ui';
import { useEthers } from '@usedapp/core';

interface MetamaskWarningProps {
    hideModal: () => void;
}

const MetamaskWarning: FC<MetamaskWarningProps> = ({ hideModal }) => {

    const { account, activateBrowserWallet } = useEthers();

    useEffect(() => {
        activateBrowserWallet();
    }, []);

    useEffect(() => {
        if(account) {
            console.log('закрываем');
            hideModal();
        }
    }, [account]);
    return (
        <div className={s.MetamaskWarning}>
            <h2>Metamask Extension</h2>
            <p>
                To work with our application, you have to install the <span>Metamask browser extension</span>
            </p>
            <Button onClick={hideModal}>skip this step</Button>
        </div>
    );
};

export default MetamaskWarning;
