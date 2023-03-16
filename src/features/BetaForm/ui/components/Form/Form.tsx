import React from 'react';
import s from './Form.module.scss';
import { Button, Input, Modal } from '../../../../../shared/ui';
import { useModal } from 'react-modal-hook';
import { MetamaskWarning } from '../../../../../shared/modals';
import { useEthers } from '@usedapp/core';

const Form = () => {
    const { account } = useEthers();

    const [showModal, hideModal] = useModal(() => {
        return (
            <Modal>
                <MetamaskWarning hideModal={hideModal}/>
            </Modal>
        );
    });

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        if(!account) showModal();
    }
    return (
        <form onSubmit={submitHandler} className={s.Form}>
            <div className={s.item}>
                <span>name</span>
                <Input
                    placeholder={'We will display your name in participation list '}
                />
            </div>
            <div className={s.item}>
                <span>email</span>
                <Input
                    placeholder={'We will display your email in participation list '}
                />
            </div>
            <Button className={s.submit}>
                get early access
            </Button>
        </form>
    );
};

export default Form;
