import React from 'react';
import { Navigate } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';

const Overview = React.lazy(() => import('@Pages/Overview'));
const Contracts = React.lazy(() => import('@Pages/Contracts'));

const protectedRoutes = [
  { name: 'Home', path: HOME_ROUTE, element: <Navigate to={`${HOME_ROUTE}/overview`} /> },
  { name: 'Overview', path: `${HOME_ROUTE}/overview`, element: <Overview /> },
  { name: 'Contracts', path: `${HOME_ROUTE}/contracts`, element: <Contracts /> }
];

export { protectedRoutes };
