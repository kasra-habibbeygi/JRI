import { ComponentType } from 'react';

// Components
import Login from 'pages/login';
import BetaTestReport from 'pages/beta-test-report';

// Types
interface IRoutesItems {
    route: string;
    component: ComponentType;
}

export default (): IRoutesItems[] => {
    return [
        {
            route: 'login',
            component: Login
        },
        {
            route: '/beta-test-report',
            component: BetaTestReport
        }
    ];
};
