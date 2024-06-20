'use client';
import { useState } from 'react';

// Assets
import { ProfileContainer } from './profile.style';

// Components
import { Button, DeleteModal, Header, Input, Select, Table } from 'commons/components';

// Utils
import { Tools } from 'commons/utils';

// Types
interface IOption {
    name: string;
    id: number;
}

interface IProfile {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    numberOfEmployees: string;
    role: number | null;
    password: string;
    confirmPassword: string;
}

interface IModalInfo {
    data: null;
    type: 'delete' | null;
}

// Constants
const tableHeaderItem = ['Device', 'Date', 'IP Address', 'Location'];

const Profile = () => {
    const [modalInfo, setModalInfo] = useState<IModalInfo>({
        data: null,
        type: null
    });

    const [profile, setProfile] = useState<IProfile>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        numberOfEmployees: '',
        role: null,
        password: '',
        confirmPassword: ''
    });

    const onModalHandler = (data: IModalInfo['data'], type: IModalInfo['type']) => {
        setModalInfo({ data, type });
    };

    const onDeleteHandler = () => {};

    return (
        <>
            <ProfileContainer>
                <Header title='Profile' />
                <div className='container main-container'>
                    <h3>Information</h3>
                    <div className='content'>
                        <Input
                            name='firstName'
                            onChange={e => Tools.stringValueHandler(e, setProfile)}
                            value={profile.firstName}
                            placeholder='First Name'
                        />
                        <Input
                            name='lastName'
                            onChange={e => Tools.stringValueHandler(e, setProfile)}
                            value={profile.lastName}
                            placeholder='Last Name'
                        />
                        <Input
                            name='email'
                            onChange={e => Tools.stringValueHandler(e, setProfile)}
                            value={profile.email}
                            placeholder='Email'
                        />
                        <Input
                            name='phoneNumber'
                            onChange={e => Tools.stringValueHandler(e, setProfile)}
                            value={profile.phoneNumber}
                            placeholder='Phone Number'
                        />
                        <Input
                            name='companyName'
                            onChange={e => Tools.stringValueHandler(e, setProfile)}
                            value={profile.companyName}
                            placeholder='Company Name'
                        />
                        <Input
                            name='numberOfEmployees'
                            onChange={e => Tools.stringValueHandler(e, setProfile)}
                            value={profile.numberOfEmployees}
                            placeholder='Number Of Employees'
                        />
                        <Select<IOption>
                            options={[
                                { name: 'manager', id: 1 },
                                { name: 'tester', id: 2 }
                            ]}
                            className='input_container'
                            onChange={e => Tools.selectValueHandler('tagId', e, setProfile)}
                            value={profile.role}
                            placeholder='Role'
                            returnOption='id'
                            name='role'
                            renderOption={option => option.name}
                        />
                    </div>
                    <Button>Apply</Button>
                </div>
                <div className='container main-container'>
                    <h3>Change Password</h3>
                    <div className='content'>
                        <Input name='' onChange={() => {}} value='' placeholder='Password' />
                        <Input name='' onChange={() => {}} value='' placeholder='Confirm Password' />
                    </div>
                    <Button>Apply</Button>
                </div>
                <div className='container main-container'>
                    <h3>Active sessions</h3>
                    <Table headerItems={tableHeaderItem} name='Sessions'>
                        <tr>
                            <td>Mobile</td>
                            <td>
                                <div>2021-06-16</div>
                                <small>10:46:09</small>
                            </td>
                            <td>104.28.12.57</td>
                            <td>Bryar Pitts 5543 Aliquet St. Fort Dodge GA 20783</td>
                        </tr>
                    </Table>
                    <Button> Logout All Sessions</Button>
                </div>
                <Button variant='danger' className='delete-account' onClick={() => onModalHandler(null, 'delete')}>
                    Delete my account
                </Button>
            </ProfileContainer>
            <DeleteModal
                onSubmit={onDeleteHandler as () => Promise<void>}
                setStatus={() => onModalHandler(null, null)}
                status={modalInfo.type === 'delete'}
                title='Are you sure you want to delete the account?'
            />
        </>
    );
};

export default Profile;
