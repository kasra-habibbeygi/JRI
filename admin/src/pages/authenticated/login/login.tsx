import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button, Input } from 'commons/components';
import { WelcomeBoard } from '../shared/components';

// Assets
import { LoginContainer } from './login.style';
import { AuthenticateContainer } from '../shared/css';
import { GoogleIcon } from '../shared/images';

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
                    <WelcomeBoard />
                    <div className='form-content'>
                        <h1>Login</h1>
                        <p>
                            Don't have an account? <Link to='/en/register'>Register</Link>
                        </p>
                        <Button className='auth-with-google' buttonType='ghost'>
                            <GoogleIcon />
                            login with google
                        </Button>

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
                        <Link className='forgot-pass' to='/en/forgot-password'>
                            forget your password?
                        </Link>
                        <Button onClick={onSubmitHandler}>Login Now</Button>
                    </div>
                </div>
            </LoginContainer>
        </AuthenticateContainer>
    );
};

export default Login;
