import { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';

// Assets
import { VIPStar } from 'assets/icons';
import { BetaTestContainer } from './betaTest.style';

// Components
import { Button } from 'commons/components';
import axios from 'axios';
import toast from 'react-hot-toast';

// Types
interface Errors {
    title: boolean;
    briefDescription: boolean;
    budget: boolean;
    teamMember: boolean;
    linkToPreviousWork: boolean;
}

interface InputValues {
    title: string;
    briefDescription: string;
    budget: string;
    teamMember: string;
    linkToPreviousWork: string;
}

const BestTest = () => {
    const [errors, setErrors] = useState<Errors>({
        title: false,
        briefDescription: false,
        budget: false,
        teamMember: false,
        linkToPreviousWork: false
    });

    const [inputValues, setInputValues] = useState<InputValues>({
        title: '',
        briefDescription: '',
        budget: '',
        teamMember: '',
        linkToPreviousWork: ''
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
            axios.post('https://api-jri.com/v2/Project', inputValues).then(() => {
                toast.success('Your project will be reviewed, and we will reach out to you. Join us now and be part of the revolution!');

                setInputValues({
                    title: '',
                    briefDescription: '',
                    budget: '',
                    teamMember: '',
                    linkToPreviousWork: ''
                });
            });
        }
    };

    return (
        <BetaTestContainer className='container'>
            <Helmet title='JRI | Beta Test' />
            <header>
                <h1>Make History: Be the First Builder Funded on JRI!</h1>
                <p>
                    We are JRI and excited to announce the next phase of our journey. After the successful Alpha Test in May, we launched
                    our marketing efforts on June 1st and now have over 4000 active users. It's time to continue and test Phase 1 with our
                    Beta Test.
                </p>

                <h2>
                    Join the Beta Test <VIPStar className='star' />
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
                        <label htmlFor='briefDescription'>Description</label>
                        <textarea
                            name='briefDescription'
                            id='briefDescription'
                            value={inputValues.briefDescription}
                            onChange={onInputValueChangeHandler}
                            className={errors.briefDescription ? 'error' : ''}
                        ></textarea>
                        <span className='length-counter'>{inputValues.briefDescription.length} / 4000</span>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='budget'>Funding Requirements ($)</label>
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
                        <label htmlFor='teamMember'>Team Members</label>
                        <input
                            type='text'
                            value={inputValues.teamMember}
                            onChange={onInputValueChangeHandler}
                            name='teamMember'
                            id='teamMember'
                            className={errors.teamMember ? 'error' : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='linkToPreviousWork'>
                            Links to Previous Work <span>(Optional)</span>
                        </label>
                        <input
                            type='text'
                            value={inputValues.linkToPreviousWork}
                            onChange={onInputValueChangeHandler}
                            name='linkToPreviousWork'
                            id='linkToPreviousWork'
                            className={errors.linkToPreviousWork ? 'error' : ''}
                        />
                    </div>

                    <Button type='submit'>Submit</Button>
                </form>
                <aside>
                    <div>
                        <p>For More Information You Can Contact us at</p>
                        <small>support@justreadit.build</small>
                    </div>
                </aside>
            </section>
        </BetaTestContainer>
    );
};

export default BestTest;
