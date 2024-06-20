import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button, DeleteModal, Input } from 'commons/components';

// Assets
import { ResultContainer } from '../css';
import { CheckCircle, Pencil } from 'assets/icons';

// Types
interface IModalInfo {
    data: null | string;
    type: 'delete' | null;
}

const Result = ({ setStep }: { setStep: (state: number) => void }) => {
    const [modalInfo, setModalInfo] = useState<IModalInfo>({
        data: null,
        type: null
    });

    const onModalHandler = (data: IModalInfo['data'], type: IModalInfo['type']) => {
        setModalInfo({ data, type });
    };
    return (
        <>
            <ResultContainer>
                <div className='header'>
                    <CheckCircle />
                    <h4>Test created successfully!</h4>
                </div>
                <div className='result-content'>
                    <div className='category-header'>
                        <div className='line'>
                            <h4>Genral settings</h4>
                        </div>
                        <Button
                            buttonType='ghost'
                            onClick={() => {
                                setStep(0);
                            }}
                        >
                            <Pencil />
                        </Button>
                    </div>
                    <div className='content'>
                        <Input name='testName' value='Test1' disabled label='Test Name' onChange={() => {}} />
                        <Input name='testURL' value='https://Test.com' disabled label='Test URL' onChange={() => {}} />
                        <div className='tags'>
                            <p>Tags</p>
                            <span>tag1</span>
                            <span>tag2</span>
                            <span>tag3</span>
                            <span>tag4</span>
                        </div>
                    </div>

                    <div className='category-header'>
                        <div className='line'>
                            <h4>Your Code</h4>
                        </div>
                        <Button
                            buttonType='ghost'
                            onClick={() => {
                                setStep(1);
                            }}
                        >
                            <Pencil />
                        </Button>
                    </div>

                    <div className='category-header'>
                        <div className='line'>
                            <h4>Location and Scheduling</h4>
                        </div>
                        <Button
                            buttonType='ghost'
                            onClick={() => {
                                setStep(2);
                            }}
                        >
                            <Pencil />
                        </Button>
                    </div>
                    <div className='content'>
                        <Input name='YourSchedule' value='10m' disabled label='Your Schedule' onChange={() => {}} />
                        <div className='tags'>
                            <p>Cities</p>
                            <span>Mashhad</span>
                            <span>Tehran</span>
                            <span>Shiraz</span>
                        </div>
                    </div>
                    <div className='category-header'>
                        <div className='line'>
                            <h4>Retries and Alerts</h4>
                        </div>
                        <Button
                            buttonType='ghost'
                            onClick={() => {
                                setStep(3);
                            }}
                        >
                            <Pencil />
                        </Button>
                    </div>
                    <h4>Retries</h4>
                    <div className='content'>
                        <div className='row'>
                            <label>Retries Strategy</label>
                            <Input name='RetriesStrategy' value='None' disabled onChange={() => {}} />
                        </div>
                        <div className='row'>
                            <label>Maximum</label>
                            <div className='form-group'>
                                <Input name='Maximum' value='2' disabled onChange={() => {}} />
                                <span>Times.</span>
                            </div>
                        </div>
                        <div className='row'>
                            <label>Retries Strategy</label>
                            <div className='form-group'>
                                <Input name='Interval' value='60' disabled onChange={() => {}} />
                                <span>Seconds.</span>
                            </div>
                        </div>
                        <div className='row'>
                            <label>Retries Strategy</label>
                            <div className='form-group'>
                                <Input name='TotalDuration' value='60' disabled onChange={() => {}} />
                                <span>Seconds.</span>
                            </div>
                        </div>
                    </div>
                    <h4>Alerts</h4>
                    <div className='content'>
                        <div className='row'>
                            <Input name='Alert' value='Specific' disabled label='Alert' onChange={() => {}} />
                        </div>
                        <div className='row'>
                            <label>Escalation</label>
                            <div className='form-group'>
                                <span>when a check has failed</span>
                                <Input name='Escalation' value='1' disabled onChange={() => {}} />
                                <span>Times.</span>
                            </div>
                        </div>
                        <div className='row full-width'>
                            <label>Reminders</label>
                            <div className='form-group'>
                                <span>send out a maximum of</span>
                                <Input name='Reminders' value='0' disabled onChange={() => {}} />
                                <span>Reminders.with a </span>
                                <Input name='Reminders' value='5' disabled onChange={() => {}} />
                                <span>interval.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <Button variant='danger' onClick={() => onModalHandler('test', 'delete')}>
                        Delete Tests
                    </Button>
                    <Link className='run-result-button' to='/en/synthetic/browser-test/test'>
                        Run Test
                    </Link>
                </div>
            </ResultContainer>
            <DeleteModal
                onSubmit={(() => {}) as () => Promise<void>}
                setStatus={() => onModalHandler(null, null)}
                status={modalInfo.type === 'delete'}
                title='Are you sure you want to delete this?'
            />
        </>
    );
};

export default Result;
