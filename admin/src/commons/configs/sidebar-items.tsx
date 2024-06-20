import { ReactNode } from 'react';
import { Dashboard } from '../components/layout/sidebar/icons';

// Types
interface ISidebarItems {
    title: string;
    icon: ReactNode;
    link?: string;
    subMenu?: {
        title: string;
        link: string;
        icon: ReactNode;
    }[];
}

export const getSidebarTopItems = (): ISidebarItems[] => [
    {
        title: 'Beta Test Reports',
        icon: <Dashboard />,
        link: '/beta-test-report'
    }
];
