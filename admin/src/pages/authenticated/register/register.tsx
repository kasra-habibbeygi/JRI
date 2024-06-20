import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button, Input } from 'commons/components';
import { WelcomeBoard } from '../shared/components';

// Assets
import { RegisterContainer } from './register.style';
import { AuthenticateContainer } from '../shared/css';
import { GoogleIcon } from '../shared/images';

// Tools
import { Tools } from 'commons/utils';

const Register = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
        fullName: '',
        role: 'tester'
    });

    const handleRoleChange = (role: string) => {
        setInputValues(prevState => ({
            ...prevState,
            role: role
        }));
    };

    const onSubmitHandler = async () => {};

    return (
        <AuthenticateContainer>
            <RegisterContainer>
                <div className='main-content'>
                    <WelcomeBoard />
                    <div className='form-content'>
                        <h1>Register</h1>
                        <p>
                            Do have an account? <Link to='/en/login'>Login</Link>
                        </p>
                        <Button className='auth-with-google' buttonType='ghost'>
                            <GoogleIcon />
                            Register with google
                        </Button>
                        <div className='form-group'>
                            <Button
                                buttonType='ghost'
                                onClick={() => handleRoleChange('manager')}
                                className={inputValues.role === 'manager' ? 'active' : 'inactive'}
                            >
                                Manager
                            </Button>
                            <Button
                                buttonType='ghost'
                                onClick={() => handleRoleChange('tester')}
                                className={inputValues.role === 'tester' ? 'active' : 'inactive'}
                            >
                                Tester
                            </Button>
                        </div>
                        <Input
                            name='fullName'
                            onChange={e => Tools.stringValueHandler(e, setInputValues)}
                            value={inputValues.fullName}
                            placeholder='Full Name'
                        />
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
                        <Button onClick={onSubmitHandler}>Register Now</Button>
                    </div>
                </div>
            </RegisterContainer>
        </AuthenticateContainer>
    );
};

export default Register;
