import { useState } from 'react';

// Components
import { Button, Input } from 'commons/components';
import { WelcomeBoard } from '../shared/components';

// Assets
import { ForgotPasswordContainer } from './forgetPassword.style';
import { AuthenticateContainer } from '../shared/css';

// Tools
import { Tools } from 'commons/utils';

const ForgotPassword = () => {
    const [inputValues, setInputValues] = useState({
        email: ''
    });

    const onSubmitHandler = async () => {};

    return (
        <AuthenticateContainer>
            <ForgotPasswordContainer>
                <div className='main-content'>
                    <WelcomeBoard />
                    <div className='form-content'>
                        <h1>Forget Password</h1>
                        <small>fill the form and then check your email</small>
                        <Input
                            name='email'
                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                            value={inputValues.email}
                            placeholder='Email'
                        />

                        <Button onClick={onSubmitHandler}>Send</Button>
                    </div>
                </div>
            </ForgotPasswordContainer>
        </AuthenticateContainer>
    );
};

export default ForgotPassword;
