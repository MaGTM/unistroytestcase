import React, { useCallback, useEffect, useState } from 'react';
import s from './Planet.module.scss';
import PlanetImg from 'shared/assets/images/only planet.png';
import Orbits from 'shared/assets/images/orbits.png';

const Planet = () => {
    const [coordinates, setCoordinates] = useState({ x: 285, y: 285 });

    const moveToMouseHandler = useCallback((e: MouseEvent) => {
        const MOUSE_OFFSET_X = 597;
        const MOUSE_OFFSET_Y = 113;
        const xCoord = e.pageX - MOUSE_OFFSET_X;
        const yCoord = e.pageY - MOUSE_OFFSET_Y;

        if((0 < yCoord && yCoord < 570) && (162 < xCoord && xCoord < 570)) {
            setCoordinates((prevState) => ({ ...prevState, x: xCoord, y:  yCoord }));
        }

        if(yCoord < 0 || yCoord > 570 || xCoord < 162 || xCoord > 570) {
            setCoordinates((prevState) => ({ ...prevState, x: 285, y:  285 }));
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', moveToMouseHandler);
    }, []);


    return (
        <div
            className={s.Planet}
        >
            <img
                src={PlanetImg}
                alt=""
                id={s.planet}
                style={{ left: coordinates.x, top: coordinates.y }}
            />
            <img src={Orbits} alt="" id={s.orbits}/>
            <svg viewBox={'0 0 570 570'} className={s.orbitLine}>
                <circle
                    fill={'none'}
                    r={243}
                    cx={285}
                    cy={285}
                />
            </svg>
            <svg viewBox={'0 0 570 570'} className={s.orbitObjects}>
                <circle
                    fill={'var(--orange-color)'}
                    r={3}
                    cx={528}
                    cy={285}
                    id={s.objectOne}
                />
                <circle
                    fill={'var(--orange-color)'}
                    r={3}
                    cx={285}
                    cy={528}
                    id={s.objectTwo}
                />
            </svg>
            <svg viewBox={'0 0 570 570'} className={s.coloredText} fill={'black'}>
                <mask id={'mask'}>
                    <ellipse
                        fill={'white'}
                        rx={160}
                        ry={162}
                        cx={coordinates.x}
                        cy={coordinates.y}
                    />
                </mask>
                <text mask={'url(#mask)'} x={'2.5%'} y={'46.1%'}>
                    own planet
                </text>
                <text mask={'url(#mask)'} x={'-17.16%'} y={'71.5%'}>
                    metaverse
                </text>
            </svg>
        </div>
    );
};

export default Planet;
