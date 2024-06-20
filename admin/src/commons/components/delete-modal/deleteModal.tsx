import { FC, useState } from 'react';

// Assets
import { DeleteModalContainer } from './deleteModal.style';
import { Bin } from 'assets/icons';

// Components
import Button from '../button';
import Modal from '../modal';

// Types
interface IDeleteModal {
    status: boolean;
    title: string;
    onSubmit: () => Promise<null | void>;
    setStatus: (status: boolean) => void;
}

const DeleteModal: FC<IDeleteModal> = ({ title, status, setStatus, onSubmit }) => {
    const [loader, setLoader] = useState(false);

    const onSubmitHandler = () => {
        setLoader(true);
        onSubmit()
            .then(() => {
                setStatus(false);
            })
            .finally(() => {
                setLoader(false);
            });
    };

    return (
        <Modal maxWidth='xs' onClose={() => setStatus(false)} open={status}>
            <DeleteModalContainer>
                <Bin />
                <h3>{title}</h3>
                <div className='button-field'>
                    <Button onClick={() => setStatus(false)} variant='danger' radius='rounded'>
                        Not Now
                    </Button>
                    <Button onClick={onSubmitHandler} radius='rounded' loading={loader}>
                        sure
                    </Button>
                </div>
            </DeleteModalContainer>
        </Modal>
    );
};

export default DeleteModal;
