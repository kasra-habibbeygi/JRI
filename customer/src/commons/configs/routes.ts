// Components
import coolVersion from 'pages/cool-version';
import home from 'pages/home';
import mint from 'pages/mint';
// import FullVersion from 'pages/full-version';
import betaTest from 'pages/beta-test';
import stake from 'pages/stake';
import onLoad from 'pages/on-load';
import AirDrop from 'pages/air-drop';

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
        },
        {
            route: 'full-version',
            component: onLoad
        },
        {
            route: 'beta-test',
            component: betaTest
        },
        {
            route: 'jri-token',
            component: stake
        },
        {
            route: 'on-load',
            component: onLoad
        },
        {
            route: 'airdrop',
            component: AirDrop
        }
    ];
};
