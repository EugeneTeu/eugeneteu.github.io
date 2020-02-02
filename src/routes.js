import React from 'react';

// Import all components
const Main = React.lazy(() => import('./pages/Personal/index'));
const Personal = React.lazy(() => import('./pages/Personal/index'));

const routes = [
    // public Routes
    { path: '/index-personal', component: Personal },
    { path: '/index', component: Main }

];

export default routes;