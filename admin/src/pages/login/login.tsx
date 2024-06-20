import { useState } from 'react';

// Components
import { Button, Input } from 'commons/components';

// Assets
import { AuthenticateContainer, LoginContainer } from './login.style';

// Tools
import { Tools } from 'commons/utils';

const Login = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    });

    const onSubmitHandler = async () => {};

    return (
        <AuthenticateContainer>
            <LoginContainer>
                <div className='main-content'>
                    <div className='form-content'>
                        <h1>Login</h1>

                        <Input
                            name='email'
                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                            value={inputValues.email}
                            placeholder='Email'
                        />
                        <Input
                            name='password'
                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                            value={inputValues.password}
                            placeholder='Password'
                            type='password'
                        />
                        <Button onClick={onSubmitHandler}>Login Now</Button>
                    </div>
                </div>
            </LoginContainer>
        </AuthenticateContainer>
    );
};

export default Login;
