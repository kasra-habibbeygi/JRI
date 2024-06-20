import { useState } from 'react';

// Assets
import { AddBrowserTestContainer } from './css';

// Components
import { Editor, Result, RetriesAlert } from './components';
import { Button, Input, MultiValueInput, Select, Stepper } from 'commons/components';

// Utils
import { Tools } from 'commons/utils';

// MUI
import Slider from '@mui/material/Slider';

// Types

interface ICities {
    name: string;
    id: number;
}

const AddBrowserTest = () => {
    const [step, setStep] = useState(0);
    const [inputValues, setInputValues] = useState({
        name: '',
        url: '',
        tags: [],
        cities: null,
        scheduling: 1
    });

    const valuetext = (value: number) => {
        return `${value} min`;
    };

    return (
        <AddBrowserTestContainer>
            <div className='container'>
                <Stepper
                    setState={setStep}
                    state={step}
                    steps={[
                        {
                            title: 'General Setting',
                            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veniam nostrum eos cupiditate',
                            content: (
                                <>
                                    <div className='general-setting'>
                                        <Input
                                            name='name'
                                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                                            value={inputValues.name}
                                            placeholder='Test Name'
                                        />
                                        <Input
                                            name='url'
                                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                                            value={inputValues.url}
                                            placeholder='Site URL'
                                        />
                                        <MultiValueInput
                                            name='tags'
                                            setState={setInputValues}
                                            value={inputValues.tags}
                                            placeholder='write your tags'
                                        />
                                    </div>
                                    <Button className='cta' onClick={() => setStep(1)}>
                                        Next
                                    </Button>
                                </>
                            )
                        },
                        {
                            title: 'Write your Code',
                            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veniam nostrum eos cupiditate',
                            content: <Editor setStep={setStep} />
                        },
                        {
                            title: 'Choose your locations & Scheduling',
                            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veniam nostrum eos cupiditate',
                            content: (
                                <>
                                    <div className='loc-time-setting'>
                                        <div className='location'>
                                            <h3>choose your Locations</h3>
                                            <small>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum itaque incidunt
                                                voluptatibus reiciendis.
                                            </small>
                                            <Select<ICities>
                                                options={[
                                                    { name: 'Tehran', id: 1 },
                                                    { name: 'Mashhad', id: 2 }
                                                ]}
                                                className='input-container'
                                                onChange={e => Tools.selectValueHandler('cities', e, setInputValues)}
                                                value={inputValues.cities}
                                                placeholder='Cities'
                                                returnOption='id'
                                                name='cities'
                                                multiSelect
                                                renderOption={option => option.name}
                                            />
                                        </div>
                                        <div className='Scheduling'>
                                            <h3>choose your Scheduling</h3>
                                            <small>
                                                The check schedule determines how often we will fire your checks. To avoid race conditions,
                                                we make sure.
                                            </small>
                                            <Slider
                                                getAriaValueText={valuetext}
                                                value={inputValues.scheduling}
                                                marks={[
                                                    { value: 1, label: '1m' },
                                                    { value: 2, label: '2m' },
                                                    { value: 3, label: '5m' },
                                                    { value: 4, label: '10m' },
                                                    { value: 5, label: '15m' },
                                                    { value: 6, label: '30m' },
                                                    { value: 7, label: '1h' },
                                                    { value: 8, label: '1d' },
                                                    { value: 9, label: '1w' }
                                                ]}
                                                onChange={(_, newValue) =>
                                                    setInputValues(prevState => ({ ...prevState, scheduling: newValue as number }))
                                                }
                                                min={1}
                                                max={9}
                                            />
                                        </div>
                                    </div>
                                    <Button className='cta' onClick={() => setStep(3)}>
                                        Next
                                    </Button>
                                </>
                            )
                        },
                        {
                            title: 'Retries & Alert',
                            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias veniam nostrum eos cupiditate',
                            content: <RetriesAlert setStep={setStep} />
                        },
                        {
                            title: 'Result',
                            subTitle: '',
                            content: <Result setStep={setStep} />
                        }
                    ]}
                />
            </div>
        </AddBrowserTestContainer>
    );
};

export default AddBrowserTest;
