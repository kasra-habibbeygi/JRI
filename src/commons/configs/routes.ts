// Components
import coolVersion from 'pages/cool-version';
import home from 'pages/home';
import mint from 'pages/mint';
import FullVersion from 'pages/full-version';
import betaTest from 'pages/beta-test';
import testTest from 'pages/test-test';
import stake from 'pages/stake';

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
            component: FullVersion
        },
        {
            route: 'beta-test',
            component: betaTest
        },
        {
            route: 'Test-Test',
            component: testTest
        },
        {
            route: 'jri-token',
            component: stake
        }
    ];
};
