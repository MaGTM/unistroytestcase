import React, { useEffect, useState } from 'react';
import s from './Planet.module.scss';
import PlanetImg from 'shared/assets/images/only planet.png';
import Orbits from 'shared/assets/images/orbits.png';
import { useMousePosition } from 'shared/lib/hooks/useMousePosition';

const Planet = () => {
    const [coordinates, setCoordinates] = useState({ x: 285, y: 285 });
    const [isHover, setIsHover] = useState(false);

    const { x, y } = useMousePosition();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if(isHover) setCoordinates({ x: x - 598, y:  y - 114 });
            if(!isHover) setCoordinates({ x: 285, y:  285 });
        }, 0);

        return () => {
            clearTimeout(timeOut);
        };
    }, [x, y]);


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
            <svg viewBox={'0 0 800 570'} className={s.coloredText} fill={'black'}>
                <mask id={'mask'}>
                    <ellipse
                        fill={'white'}
                        rx={160}
                        ry={162}
                        cx={coordinates.x + 115}
                        cy={coordinates.y}
                    />
                </mask>
                <text mask={'url(#mask)'} x={'-10%'} y={'46.1%'}>
                    your own planet
                </text>
                <text mask={'url(#mask)'} x={'2%'} y={'71.5%'}>
                    metaverse
                </text>
            </svg>
            <div
                className={s.boundary}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            />
        </div>
    );
};

export default Planet;
