import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { ProfilePage } from 'pages/ProfilePage';
import { PrivateRoute } from '../../ui';

enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <PrivateRoute component={ProfilePage} />,
    }
};
