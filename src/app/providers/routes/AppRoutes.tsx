import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config';

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => {
                    return <Route
                        key={path}
                        path={path}
                        element={(<div>{element}</div>)}
                    />;
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;

