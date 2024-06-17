import { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';

// Assets
import { VIPStar } from 'assets/icons';
import { BetaTestContainer } from './betaTest.style';

// Components
import { Button } from 'commons/components';

// Types
interface Errors {
    title: boolean;
    description: boolean;
    budget: boolean;
    members: boolean;
    links: boolean;
}

interface InputValues {
    title: string;
    description: string;
    budget: string;
    members: string;
    links: string;
}

const BestTest = () => {
    const [errors, setErrors] = useState<Errors>({
        title: false,
        description: false,
        budget: false,
        members: false,
        links: false
    });

    const [inputValues, setInputValues] = useState<InputValues>({
        title: '',
        description: '',
        budget: '',
        members: '',
        links: ''
    });

    const onInputValueChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        const newErrors: Errors = { ...errors };
        let hasError = false;

        (Object.keys(inputValues) as (keyof InputValues)[]).forEach(item => {
            if (inputValues[item] === '') {
                newErrors[item] = true;
                hasError = true;
            } else {
                newErrors[item] = false;
            }
        });

        setErrors(newErrors);

        if (!hasError) {
            console.log('Form submitted:', inputValues);
        }
    };

    console.log(errors);

    return (
        <BetaTestContainer className='container'>
            <Helmet title='JRI | Beta Test' />
            <header>
                <h1>Welcome to JRI's Beta Test!</h1>
                <p>
                    We are JRI and excited to announce the next phase of our journey. After the successful Alpha Test in May, we launched
                    our marketing efforts on June 1st and now have over 1500 users. It's time to continue and test Phase 1 with our Beta
                    Test.
                </p>

                <h2>
                    Join the Beta Test <VIPStar />
                </h2>
                <p>
                    We're inviting creators to participate in our Beta Test. This phase involves setting up a forum on our website where
                    creators can submit projects and ideas for funding and be among the first to showcase their work on our platform. JRI is
                    a crowdfunding platform focused on Web3 projects.
                </p>
            </header>
            <section className='content-section'>
                <form onSubmit={onSubmitHandler}>
                    <div className='form-group'>
                        <label htmlFor='title'>Project Title</label>
                        <input
                            type='text'
                            value={inputValues.title}
                            onChange={onInputValueChangeHandler}
                            name='title'
                            id='title'
                            className={errors.title ? 'error' : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>Brief Description</label>
                        <textarea
                            name='description'
                            id='description'
                            value={inputValues.description}
                            onChange={onInputValueChangeHandler}
                            className={errors.description ? 'error' : ''}
                        ></textarea>
                        <span className='length-counter'>{inputValues.description.length} / 8000</span>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='budget'>Project Budget ($)</label>
                        <input
                            type='number'
                            value={inputValues.budget}
                            onChange={onInputValueChangeHandler}
                            name='budget'
                            id='budget'
                            className={errors.budget ? 'error' : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='members'>Team Members</label>
                        <input
                            type='text'
                            value={inputValues.members}
                            onChange={onInputValueChangeHandler}
                            name='members'
                            id='members'
                            className={errors.members ? 'error' : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='links'>
                            Links to Previous Work <span>(Optional)</span>
                        </label>
                        <input
                            type='text'
                            value={inputValues.links}
                            onChange={onInputValueChangeHandler}
                            name='links'
                            id='links'
                            className={errors.links ? 'error' : ''}
                        />
                    </div>

                    <Button type='submit'>Submit</Button>
                </form>
                <aside>
                    <p>For More Information You Can Contact us at</p>
                    <small>support@justreadit.build</small>
                </aside>
            </section>
        </BetaTestContainer>
    );
};

export default BestTest;
