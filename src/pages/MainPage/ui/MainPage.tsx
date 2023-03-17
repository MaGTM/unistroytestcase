import React from 'react';
import s from './MainPage.module.scss';
import { Header } from 'widgets/Header';
import { Beta } from 'widgets/Beta';
import Planet from './components/Planet/Planet';

const MainPage = () => {


    return (
        <div className={s.MainPage}>
            <Header/>
            <section className={s.landing}>
                <div className={s.text}>
                    <h1>
                        Explore Your own planet<br/>
                        In <span>our New</span> metaverse
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className={s.stats}>
                    <h3>Roadmap stats</h3>
                    <div className={s.container}>
                        <div className={s.item}>
                            <h4>12, 345</h4>
                            <p>Lorem Ipsum Dolor</p>
                        </div>
                        <div className={s.item}>
                            <h4>12, 345</h4>
                            <p>Lorem Ipsum Dolor</p>
                        </div>
                        <div className={s.item}>
                            <h4>12, 345</h4>
                            <p>Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                </div>
                <Planet />
            </section>
            <Beta />
        </div>
    );
};

export default MainPage;
