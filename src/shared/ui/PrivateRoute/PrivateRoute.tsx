import React, { FC } from 'react';
import { useAppSelector } from '../../lib/hooks/useAppSelector';
import { RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
    component: React.ElementType;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
    component: Component
}) => {
    const isUser = useAppSelector(state => state.profile.name !== null && state.profile.email !== null);

    return isUser ? <Component /> : <div>'hfghf</div>;
};

export default PrivateRoute;
