// Assets
import { LittleArrow } from 'assets/icons';
import { FullVersionContainer, MainList } from './fullVersion.style';

const FullVersion = () => {
    return (
        <FullVersionContainer className='container'>
            <aside>
                <ol className='main-list'>
                    <li className='category'>Introduction</li>
                    <li>
                        <div className='field'>
                            About Just Read It <LittleArrow />
                        </div>
                        <MainList index={1}>
                            <li className='field'>Introduction 1</li>
                            <li className='field'>Introduction 2</li>
                            <li className='field'>Introduction 3</li>
                            <li className='field'>Introduction 4</li>
                            <li>
                                <div className='field'>
                                    About Just Read It <LittleArrow />
                                </div>
                                <MainList index={2}>
                                    <li className='field'>Introduction 1</li>
                                    <li className='field'>Introduction 2</li>
                                    <li className='field'>Introduction 3</li>
                                    <li className='field'>Introduction 4</li>
                                </MainList>
                            </li>
                        </MainList>
                    </li>
                    <li className='field'>About Just Read It</li>
                    <li className='field'>About Just Read It</li>
                    <li className='field'>About Just Read It</li>
                    <li className='category'>Phase 1</li>
                    <li className='field'>Distribution of Contracts</li>
                    <li className='category'>Introduction</li>
                    <li className='field'>About Just Read It</li>
                </ol>
            </aside>
            <article>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
                <p>aasd</p>
            </article>
        </FullVersionContainer>
    );
};

export default FullVersion;
