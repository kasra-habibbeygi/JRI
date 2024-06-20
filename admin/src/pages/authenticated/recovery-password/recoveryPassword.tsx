import { useState } from 'react';

// Components
import { Button, Input } from 'commons/components';
import { WelcomeBoard } from '../shared/components';

// Assets
import { RecoveryPasswordContainer } from './recoveryPassword.style';
import { AuthenticateContainer } from '../shared/css';

// Tools
import { Tools } from 'commons/utils';

const RecoveryPassword = () => {
    const [inputValues, setInputValues] = useState({
        rePassword: '',
        password: ''
    });

    const onSubmitHandler = async () => {};

    return (
        <AuthenticateContainer>
            <RecoveryPasswordContainer>
                <div className='main-content'>
                    <WelcomeBoard />
                    <div className='form-content'>
                        <h1>Change Password</h1>
                        <small>write your new password.</small>
                        <Input
                            name='password'
                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                            value={inputValues.password}
                            type='password'
                            placeholder='password'
                        />
                        <Input
                            name='rePassword'
                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                            value={inputValues.rePassword}
                            placeholder='Repeat password'
                            type='password'
                        />

                        <Button onClick={onSubmitHandler}>Send</Button>
                    </div>
                </div>
            </RecoveryPasswordContainer>
        </AuthenticateContainer>
    );
};

export default RecoveryPassword;
