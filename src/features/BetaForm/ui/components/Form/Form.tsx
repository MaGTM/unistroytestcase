import React from 'react';
import s from './Form.module.scss';
import { Button, Input, Modal } from '../../../../../shared/ui';
import { useModal } from 'react-modal-hook';
import { MetamaskWarning } from '../../../../../shared/modals';
import { useEthers } from '@usedapp/core';
import { useAppDispatch } from '../../../../../shared/lib/hooks/useAppDispatch';
import { setData } from '../../../../../widgets/Beta/model/slices/profileSlice';

interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement,
    email: HTMLInputElement,
}

interface FormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

const Form = () => {
    const { account } = useEthers();
    const dispatch = useAppDispatch();

    const [showModal, hideModal] = useModal(() => {
        return (
            <Modal>
                <MetamaskWarning hideModal={hideModal}/>
            </Modal>
        );
    });

    function submitHandler(e: React.FormEvent<FormElement>) {
        e.preventDefault();

        if (!account) {
            showModal();
            return;
        }

        dispatch(
            setData({
                name: e.currentTarget.elements.name.value,
                email: e.currentTarget.elements.email.value
            })
        );
    }

    return (
        <form onSubmit={submitHandler} className={s.Form}>
            <div className={s.item}>
                <span>name</span>
                <Input
                    placeholder={'We will display your name in participation list '}
                    id={'name'}
                />
            </div>
            <div className={s.item}>
                <span>email</span>
                <Input
                    placeholder={'We will display your email in participation list '}
                    id={'email'}
                />
            </div>
            <Button className={s.submit}>
                get early access
            </Button>
        </form>
    );
};

export default Form;
