import { ComponentType } from 'react';

// Components
import Login from 'pages/authenticated/login';
import Register from 'pages/authenticated/register';
import ForgotPassword from 'pages/authenticated/forget-password';
import RecoveryPassword from 'pages/authenticated/recovery-password';
import GetStarted from 'pages/get-started';
import Profile from 'pages/profile';
import AddTest from 'pages/add-test';
import { BrowserTestList, TestSession, RunResult } from 'pages/synthetic-room/browser-test';
import AddBrowserTest from 'pages/synthetic-room/browser-test/add';
import { AllTestSynthetic } from 'pages/synthetic-room/all-test';
import Test from 'pages/test/test';

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
            route: 'forgot-password',
            component: ForgotPassword
        },
        {
            route: 'recovery-password',
            component: RecoveryPassword
        },
        {
            route: 'register',
            component: Register
        },
        {
            route: 'profile',
            component: Profile
        },
        {
            route: 'get-started',
            component: GetStarted
        },
        {
            route: 'add-test',
            component: AddTest
        },
        {
            route: 'synthetic/browser-test/add',
            component: AddBrowserTest
        },
        {
            route: 'synthetic/browser-test',
            component: BrowserTestList
        },
        {
            route: 'synthetic/browser-test/:id',
            component: RunResult
        },
        {
            route: 'synthetic/browser-test/:id/test-session/:id',
            component: TestSession
        },
        {
            route: 'synthetic/all-test',
            component: AllTestSynthetic
        },
        {
            route: 'test',
            component: Test
        }
    ];
};
