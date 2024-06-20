import { FC, useState } from 'react';

// Assets
import { AllTestContainer } from './css';
import { Button, Header } from 'commons/components';
import { AddTestTypeModal, FireWatchTable, TestList } from './components';
import { Status } from './images';

// Types
interface AllTestProps {}

interface IModalInfo {
    data: null | string;
    type: 'delete' | 'addTestType' | null;
}

const AllTest: FC<AllTestProps> = () => {
    const [modalInfo, setModalInfo] = useState<IModalInfo>({
        data: null,
        type: null
    });

    const onModalHandler = (data: IModalInfo['data'], type: IModalInfo['type']) => {
        setModalInfo({ data, type });
    };

    return (
        <>
            <AllTestContainer>
                <Header
                    title='All Test'
                    action={
                        <Button className='add-test' onClick={() => onModalHandler('test', 'addTestType')}>
                            Add
                        </Button>
                    }
                />
                <div className='status-content '>
                    <div className='status-item green'>
                        <div className='text green'>
                            <p>PASSING</p>
                            <h4>4</h4>
                        </div>
                        <Status className='green' />
                    </div>
                    <div className='status-item yellow'>
                        <div className='text  yellow'>
                            <p>DEGRADED</p>
                            <h4>0</h4>
                        </div>
                        <Status className='yellow ' />
                    </div>
                    <div className='status-item red'>
                        <div className='text red'>
                            <p>FAILING</p>
                            <h4>2</h4>
                        </div>
                        <Status className='red' />
                    </div>
                </div>
                <FireWatchTable />
                <TestList />
            </AllTestContainer>
            <AddTestTypeModal onClose={() => onModalHandler(null, null)} status={modalInfo.type === 'addTestType'} />
        </>
    );
};

export default AllTest;
