import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Config, DAppProvider, Mainnet } from '@usedapp/core';
import { ModalProvider } from 'react-modal-hook';
import { StoreProvider } from './app/providers/StoreProvider';

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: 'https://mainnet.infura.io/v3/d13fe9f62a2742abb6b8bd9279e7ef00',
        56: 'https://bsc-dataseed1.binance.org/',
    },
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <StoreProvider>
            <DAppProvider config={config}>
                <ModalProvider>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ModalProvider>
            </DAppProvider>
        </StoreProvider>
    </React.StrictMode>
);
