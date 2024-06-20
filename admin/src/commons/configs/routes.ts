import { ComponentType } from 'react';

// Components
import Login from 'pages/login';

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
        }
    ];
};
