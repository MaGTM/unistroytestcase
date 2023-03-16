import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Config, DAppProvider, Goerli, Mainnet } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import { ModalProvider } from 'react-modal-hook';
import { StoreProvider } from './app/providers/StoreProvider';

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet'),
        [Goerli.chainId]: getDefaultProvider('goerli'),
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
