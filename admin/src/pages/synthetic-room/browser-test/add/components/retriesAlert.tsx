import { useState } from 'react';

// Assets
import { RetriesAlertContainer } from '../css';
import { Email } from '../images';

// Components
import { Button, Checkbox, Input, Select, Switch, Table } from 'commons/components';

// Utils
import { Tools } from 'commons/utils';

//MUI
import { Tooltip } from '@mui/material';
import { CheckCircle, CrossCircle, Exclamation, MoreInfo } from 'assets/icons';

// Contacts
const tableHeaders = ['#', 'Details', 'Alert Type', ' Options'];

interface IOptions {
    name: string;
    id: number;
}

interface FormState {
    retryStrategy: string;
    maxRetries: string;
    retryInterval: string;
    maxDuration: string;
    retrySameLocation: boolean;
    checkFailingLocation: boolean;
    notificationSetting: string;
    checkFailing: string;
    escalationCount: number;
    escalationTime: number;
    remindersCount: number;
    remindersInterval: number;
    failingPercentage: number;
    activeChannel: boolean;
}

const RetriesAlert = ({ setStep }: { setStep: (state: number) => void }) => {
    const [formState, setFormState] = useState<FormState>({
        retryStrategy: 'None',
        maxRetries: '',
        retryInterval: '',
        maxDuration: '',
        retrySameLocation: false,
        notificationSetting: 'Global',
        escalationCount: 1,
        escalationTime: 1,
        remindersCount: 1,
        remindersInterval: 1,
        checkFailingLocation: false,
        checkFailing: 'Times',
        failingPercentage: 1,
        activeChannel: false
    });

    const handleRetryStrategyChange = (strategy: string) => {
        setFormState(prevState => ({
            ...prevState,
            retryStrategy: strategy
        }));
    };

    const handleNotificationSettingChange = (setting: string) => {
        setFormState(prevState => ({
            ...prevState,
            notificationSetting: setting
        }));
    };

    const handleAlertNotificationChange = (alert: string) => {
        setFormState(prevState => ({
            ...prevState,
            checkFailing: alert
        }));
    };

    return (
        <RetriesAlertContainer>
            <div className='retries-content content'>
                <h3>Retries Setting</h3>
                <div className='from'>
                    <span>select the retry strategy to determine how failed checks are retried.</span>
                    <div className='radio-checkbox-group'>
                        <Checkbox
                            checked={formState.retryStrategy === 'None'}
                            name='retryStrategy'
                            onChange={() => handleRetryStrategyChange('None')}
                            label='None'
                        />
                        <Checkbox
                            checked={formState.retryStrategy === 'Fixed'}
                            name='retryStrategy'
                            onChange={() => handleRetryStrategyChange('Fixed')}
                            label='Fixed'
                        />
                        <Checkbox
                            checked={formState.retryStrategy === 'Linear'}
                            name='retryStrategy'
                            onChange={() => handleRetryStrategyChange('Linear')}
                            label='Exponential'
                        />
                        <Checkbox
                            checked={formState.retryStrategy === 'Exponential'}
                            name='retryStrategy'
                            onChange={() => handleRetryStrategyChange('Exponential')}
                            label='Linear'
                        />
                    </div>
                    <div className='form-group'>
                        <div className='row'>
                            <span>Retry a maximum of</span>
                            <Input
                                name='maxRetries'
                                onChange={e => Tools.numberValueHandler(e, setFormState)}
                                value={formState.maxRetries}
                                placeholder='2'
                            />
                            <span>times, with an interval of</span>
                            <Input
                                name='retryInterval'
                                onChange={e => Tools.numberValueHandler(e, setFormState)}
                                value={formState.retryInterval}
                                placeholder='60'
                            />
                            <span> seconds.</span>
                        </div>
                        <small> The retries intervals for your check(s) will be 1 minute, and 2 minutes</small>
                    </div>
                    <div className='form-group'>
                        <div className='row'>
                            <span> Max total retry Duration</span>
                            <Input
                                name='maxDuration'
                                onChange={e => Tools.stringValueHandler(e, setFormState)}
                                value={formState.maxDuration}
                                placeholder='600'
                            />
                            <span>seconds</span>
                            <Tooltip
                                title='This duration determines the maximum
                                        amount of time a check can be in a
                                        retrying state before giving up on
                                        retries. It includes each retry interval
                                        and the subsequent check duration of
                                        the retried check.'
                            >
                                <span className='more-details'>
                                    <MoreInfo />
                                </span>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='row'>
                        <Checkbox
                            checked={formState.retrySameLocation}
                            name='retrySameLocation'
                            onChange={e => {
                                Tools.checkboxValueHandler(e, setFormState);
                            }}
                            label='Always retry form the same location the check failed in.'
                        />
                        <Tooltip
                            title='Check locations running in parallel will
                            always be retried from the same
                            location.'
                        >
                            <span className='more-details'>
                                <MoreInfo />
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='alert-content content'>
                <h3>Alert setting</h3>
                <span>
                    The alert setting determine when and how often QT-ROOMS will alert channels. you can choose to use the global account
                    level setting or override them with check specific settings.
                </span>
                <div className='form '>
                    <div className='form-group'>
                        <Checkbox
                            checked={formState.notificationSetting === 'Global'}
                            name='notificationSetting'
                            onChange={() => handleNotificationSettingChange('Global')}
                            label='Use the global account notification settings'
                        />
                        <Checkbox
                            checked={formState.notificationSetting === 'Specific'}
                            name='notificationSetting'
                            onChange={() => handleNotificationSettingChange('Specific')}
                            label='Use specific notification settings'
                        />
                    </div>
                    {formState.notificationSetting === 'Specific' && (
                        <>
                            <div className='horizontal-form-group'>
                                <p>Escalation</p>
                                <div className='form-group'>
                                    <span>Send an alert notification</span>
                                    <div className='row'>
                                        <Checkbox
                                            checked={formState.checkFailing === 'Times'}
                                            name='Times'
                                            onChange={() => handleAlertNotificationChange('Times')}
                                        />
                                        <span> When a check has failed</span>
                                        <Select<IOptions>
                                            options={[
                                                { name: '1', id: 1 },
                                                { name: '2', id: 2 }
                                            ]}
                                            className='input-container'
                                            onChange={e => Tools.selectValueHandler('escalationCount', e, setFormState)}
                                            value={formState.escalationCount}
                                            returnOption='id'
                                            name='escalationCount'
                                            renderOption={option => option.name}
                                        />
                                        <span> time(s)</span>
                                    </div>
                                    <div className='row'>
                                        <Checkbox
                                            checked={formState.checkFailing === 'More'}
                                            name='More'
                                            onChange={() => handleAlertNotificationChange('More')}
                                        />
                                        <span> When a check is failing for more than</span>
                                        <Select<IOptions>
                                            options={[
                                                { name: '5m', id: 1 },
                                                { name: '10m', id: 2 }
                                            ]}
                                            className='input-container'
                                            onChange={e => Tools.selectValueHandler('escalationTime', e, setFormState)}
                                            value={formState.escalationTime}
                                            returnOption='id'
                                            name='escalationTime'
                                            renderOption={option => option.name}
                                        />{' '}
                                    </div>

                                    <span>AND</span>

                                    <div className='row '>
                                        <Checkbox
                                            checked={formState.checkFailingLocation}
                                            name='checkFailingLocation'
                                            onChange={e => {
                                                Tools.checkboxValueHandler(e, setFormState);
                                            }}
                                        />
                                        <span> When a check is failing in</span>
                                        <Select<IOptions>
                                            options={[
                                                { name: '5', id: 1 },
                                                { name: '10', id: 2 }
                                            ]}
                                            className='input-container'
                                            onChange={e => Tools.selectValueHandler('', e, setFormState)}
                                            value={formState.failingPercentage}
                                            returnOption='id'
                                            name='failingPercentage'
                                            renderOption={option => option.name}
                                        />
                                        <span> % of locations</span>
                                    </div>
                                    <small>Application only for checks scheduled parallel in multiple locations</small>
                                </div>
                            </div>
                            <div className='horizontal-form-group reminder-content'>
                                <p className='reminder-title'>Reminders</p>
                                <div className='row reminder-options'>
                                    <span>Send out a miximum of</span>
                                    <Select<IOptions>
                                        options={[
                                            { name: '0', id: 1 },
                                            { name: '1', id: 2 }
                                        ]}
                                        className='input-container'
                                        onChange={e => Tools.selectValueHandler('remindersCount', e, setFormState)}
                                        value={formState.remindersCount}
                                        returnOption='id'
                                        name='remindersCount'
                                        renderOption={option => option.name}
                                    />
                                    <span> reminders, with a</span>
                                    <Select<IOptions>
                                        options={[
                                            { name: '5', id: 1 },
                                            { name: '10', id: 2 }
                                        ]}
                                        className='input-container'
                                        onChange={e => Tools.selectValueHandler('', e, setFormState)}
                                        value={formState.remindersInterval}
                                        returnOption='id'
                                        name='remindersInterval'
                                        renderOption={option => option.name}
                                    />
                                    <span>interval</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='alert-chanel content'>
                <h3>Alert settings</h3>
                <span>
                    The alert settings determine when and how often Checkly will alert you on your alert channels. You can choose to use the
                    global account level settings or override them with check specific settings
                </span>
                <Table headerItems={tableHeaders} name='AlertChanel'>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className='table-item'>
                                <Email className='email-icon' />
                                <p>nadienajmabadi@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div className='table-item'>
                                <CheckCircle className='green' />
                                <CrossCircle className='red' />
                                <Exclamation className='yellow' />
                                <span>5</span>
                            </div>
                        </td>
                        <td>
                            <div className='switch-item'>
                                <Switch
                                    checked={formState.activeChannel}
                                    name='activeChannel'
                                    onChange={e => Tools.switchValueHandler('activeChannel', e, setFormState)}
                                />
                            </div>
                        </td>
                    </tr>
                </Table>
            </div>

            <Button onClick={() => setStep(4)}>create test</Button>
        </RetriesAlertContainer>
    );
};

export default RetriesAlert;
