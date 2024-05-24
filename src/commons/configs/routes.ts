// Components
import coolVersion from 'pages/cool-version';
import home from 'pages/home';
import mint from 'pages/mint';

// Types
interface IRoutesItems {
    route: string;
    component: () => JSX.Element;
}

export default (): IRoutesItems[] => {
    return [
        {
            route: '',
            component: home
        },
        {
            route: 'mint',
            component: mint
        },
        {
            route: 'cool-version',
            component: coolVersion
        }
    ];
};
