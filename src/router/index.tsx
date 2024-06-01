import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Paths } from './paths';
import Home from '../view/Home';

export default function Routes() {
  const routes: RouteObject[] = [
    {
      path: Paths.HOME,
      element: <Home />,
    },
  ];

  const pages = useRoutes(routes);
  return <div>{pages}</div>;
}
