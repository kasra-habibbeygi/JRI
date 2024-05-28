// Assets
import { FooterContainer } from './footer.style';
import { Castle, Discord, FarCaster, Linkedin, Twitter } from 'assets/icons';

const Footer = () => {
    return (
        <FooterContainer>
            <small>Join Our Community</small>
            <div className='social-media'>
                <a href=''>
                    <FarCaster />
                </a>
                <a href=''>
                    <Castle />
                </a>
                <a href=''>
                    <Discord />
                </a>
                <a href=''>
                    <Twitter />
                </a>
                <a href=''>
                    <Linkedin />
                </a>
            </div>
            <div className='contact'>
                <b>Contact Us</b>
                <p>
                    <a href=''>info@justreadit.build</a> - General inquiries and information.
                </p>
                <p>
                    <a href=''>partners@justreadit.build</a> - Partnerships and collaborations.
                </p>
                <p>
                    <a href=''>feedback@justreadit.build</a> - User feedback and suggestions.
                </p>
                <p>
                    <a href=''>careers@justreadit.build</a> - Job applications and career opportunities.
                </p>
                <p>
                    <a href=''>support@justreadit.build</a> - Customer support and technical assistance.
                </p>
            </div>
        </FooterContainer>
    );
};

export default Footer;
