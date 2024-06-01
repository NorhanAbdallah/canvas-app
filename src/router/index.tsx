import React from 'react';

import { RouteObject, useRoutes } from 'react-router';
import { Paths } from './paths';
import Landing from '../view/Landing';

export default function Routes() {

    const routes: RouteObject[] = [
        {
            path: Paths.HOME,
            element: <Landing />,
        },
    ];

    const pages = useRoutes(routes);
    return <div>{pages}</div>;
}