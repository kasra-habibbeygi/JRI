import { ReactNode } from 'react';
import {
    Browser,
    Chart,
    ChartView,
    Clock,
    CodeLibrary,
    Dashboard,
    Phone,
    Reports,
    Settings,
    Support
} from '../components/layout/sidebar/icons';

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
        title: 'Dashboard',
        icon: <Dashboard />,
        link: '/dashboard'
    },
    {
        title: 'Code Library',
        icon: <CodeLibrary />,
        link: '/code-library'
    },
    {
        title: 'Synthetic Room',
        icon: <ChartView />,
        link: '/synthetic-room',
        subMenu: [
            {
                title: 'All Tests',
                icon: <Chart />,
                link: '/en/synthetic/all-test'
            },
            {
                title: 'Browser Test',
                icon: <Browser />,
                link: '/en/synthetic/browser-test'
            },
            {
                title: 'Mobile Test',
                icon: <Phone />,
                link: '/en/synthetic/mobile-test'
            },
            {
                title: 'Reports',
                icon: <Reports />,
                link: '/en/synthetic/reports'
            }
        ]
    },
    {
        title: 'Setting',
        icon: <Settings />,
        link: '/setting'
    }
];

export const getSidebarBottomItems = (): ISidebarItems[] => [
    {
        title: 'Today Schedule',
        icon: <Clock />,
        link: '/code-library'
    },
    {
        title: 'Support',
        icon: <Support />,
        link: '/support'
    }
];
