// Assets
import { FooterContainer } from './footer.style';
import { Discord, Telegram, Twitter } from 'assets/icons';

const Footer = () => {
    return (
        <FooterContainer>
            <small>Join Our Community</small>
            <div className='social-media'>
                <Discord />
                <Telegram />
                <Twitter />
                <Twitter />
            </div>
        </FooterContainer>
    );
};

export default Footer;
