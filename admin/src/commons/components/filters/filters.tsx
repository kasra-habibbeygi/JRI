import { FC, useState } from 'react';

// Assets
import { FilterContainer } from './filters.style';

// Components
import Select from '../select';
import Input from '../input';
import DatePicker from '../date-picker';
import Button from '../button';

// Utils
import { Tools } from 'commons/utils';

// Types
interface ITags {
    name: string;
    id: number;
}

interface IFilters {
    filterItems: ('tags' | 'status' | 'search' | 'url' | 'type' | 'startDate' | 'endData' | 'name' | 'email' | 'userName')[];
    typeItems?: {
        name: string;
        id: number;
    }[];
    statusItem?: {
        name: string;
        id: number;
    }[];
    tagItem?: {
        name: string;
        id: number;
    }[];
}

interface IInputValues {
    tagId: null | number;
    status: null | number;
    type: null | number;
    search: string;
    name: string;
    url: string;
    email: string;
    userName: string;
    startData: null | number;
    endDate: null | number;
}

const Filter: FC<IFilters> = ({ filterItems, typeItems, statusItem, tagItem }) => {
    const [inputValues, setInputValues] = useState<IInputValues>({
        tagId: null,
        status: null,
        type: null,
        url: '',
        search: '',
        name: '',
        email: '',
        userName: '',
        startData: null,
        endDate: null
    });

    const filtersItemHandler = (item: IFilters['filterItems'][number]) => {
        return filterItems?.includes(item);
    };

    return (
        <FilterContainer className='container'>
            <h3>Filters</h3>
            <div className='filter-content'>
                {filtersItemHandler('search') && (
                    <Input
                        name='search'
                        onChange={e => Tools.stringValueHandler(e, setInputValues)}
                        value={inputValues.search}
                        placeholder='Search'
                    />
                )}
                {filtersItemHandler('name') && (
                    <Input
                        name='name'
                        onChange={e => Tools.stringValueHandler(e, setInputValues)}
                        value={inputValues.name}
                        placeholder='Name'
                    />
                )}
                {filtersItemHandler('url') && (
                    <Input
                        name='url'
                        onChange={e => Tools.stringValueHandler(e, setInputValues)}
                        value={inputValues.url}
                        placeholder='URL'
                    />
                )}
                {filtersItemHandler('email') && (
                    <Input
                        name='email'
                        onChange={e => Tools.stringValueHandler(e, setInputValues)}
                        value={inputValues.email}
                        placeholder='Email'
                    />
                )}
                {filtersItemHandler('userName') && (
                    <Input
                        name='userName'
                        onChange={e => Tools.stringValueHandler(e, setInputValues)}
                        value={inputValues.userName}
                        placeholder='User Name'
                    />
                )}

                {filtersItemHandler('tags') && (
                    <Select<ITags>
                        options={tagItem!}
                        className='input-container'
                        onChange={e => Tools.selectValueHandler('tagId', e, setInputValues)}
                        value={inputValues.tagId}
                        placeholder='Tags'
                        returnOption='id'
                        name='tagsList'
                        renderOption={option => option.name}
                    />
                )}
                {filtersItemHandler('status') && (
                    <Select<ITags>
                        options={statusItem!}
                        className='input-container'
                        onChange={e => Tools.selectValueHandler('status', e, setInputValues)}
                        value={inputValues.status}
                        placeholder='Status'
                        returnOption='id'
                        name='status'
                        renderOption={option => option.name}
                    />
                )}

                {filtersItemHandler('type') && (
                    <Select<ITags>
                        options={typeItems!}
                        className='input-container'
                        onChange={e => Tools.selectValueHandler('type', e, setInputValues)}
                        value={inputValues.type}
                        placeholder='Type'
                        returnOption='all'
                        name='type'
                        renderOption={option => option.name}
                    />
                )}
                {filtersItemHandler('startDate') && (
                    <DatePicker
                        placeholder='Start Date'
                        onChange={(e, name) => Tools.dateValueHandler(e, name, setInputValues)}
                        value={inputValues.startData}
                        name='startData'
                        className='input-container'
                    />
                )}
                {filtersItemHandler('endData') && (
                    <DatePicker
                        placeholder='End Date'
                        onChange={(e, name) => Tools.dateValueHandler(e, name, setInputValues)}
                        value={inputValues.endDate}
                        name='endDate'
                        className='input-container'
                    />
                )}
            </div>
            <Button className='apply-button'>Apply</Button>
        </FilterContainer>
    );
};

export default Filter;
