import { useEffect, useState } from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = (e: MouseEvent) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            });
        };



        document.addEventListener('mousemove', moveHandler);

        return () => {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, []);



    return mousePosition;
};
