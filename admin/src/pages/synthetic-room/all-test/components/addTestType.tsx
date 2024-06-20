import { FC } from 'react';
import { Link } from 'react-router-dom';

// Assets
import { AddTestTypeContainer } from '../css';
import { Cross } from 'assets/icons';
import { Api, Browser, Phone } from '../images';

// Components
import { Modal } from 'commons/components';

interface IAddTestTypeModalProps {
    onClose: () => void;
    status: boolean;
}

const AddTestTypeModal: FC<IAddTestTypeModalProps> = ({ onClose, status }) => {
    return (
        <Modal maxWidth='xs' onClose={onClose} open={status}>
            <AddTestTypeContainer>
                <header className='modal-header'>
                    <h3>Test Types</h3>
                    <Cross onClick={onClose} />
                </header>
                <div className='test-types'>
                    <Link to='/en/synthetic/browser-test/add'>
                        <Browser />
                        <p>Browser Test</p>
                        <small>Test your crucial browser click flows. </small>
                    </Link>
                    <Link to='/en/synthetic/browser-test/add'>
                        <Phone />
                        <p>Mobile Test</p>
                        <small> Test speed and validity of API endpoints. </small>
                    </Link>
                    <Link to='/en/synthetic/browser-test/add'>
                        <Api />
                        <p>API Test</p>
                        <small>Lorem ipsum dolor sit, amet consectetur.</small>
                    </Link>
                </div>
            </AddTestTypeContainer>
        </Modal>
    );
};

export default AddTestTypeModal;
