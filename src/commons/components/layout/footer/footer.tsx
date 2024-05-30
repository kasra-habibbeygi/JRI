// Assets
import { FooterContainer } from './footer.style';
import { Castle, Discord, FarCaster, Linkedin, Twitter } from 'assets/icons';

const Footer = () => {
    return (
        <FooterContainer>
            <small>Join Our Community</small>
            <div className='social-media'>
                <a href='https://warpcast.com/~/channel/justreadit' target='_blank'>
                    <FarCaster />
                </a>
                <a href='https://www.guild.xyz/justreadit' target='_blank'>
                    <Castle />
                </a>
                <a href='https://discord.gg/pS2az7k9' target='_blank'>
                    <Discord />
                </a>
                <a href='https://x.com/jri_justreadit' target='_blank'>
                    <Twitter />
                </a>
                <a href='https://www.linkedin.com/company/jrijustreadit/' target='_blank'>
                    <Linkedin />
                </a>
            </div>
            <div className='contact'>
                <b>Contact Us</b>
                <p>
                    <a href='mailto:info@justreadit.build'>info@justreadit.build</a> - General inquiries and information.
                </p>
                <p>
                    <a href='mailto:partners@justreadit.build'>partners@justreadit.build</a> - Partnerships and collaborations.
                </p>
                <p>
                    <a href='mailto:feedback@justreadit.build'>feedback@justreadit.build</a> - User feedback and suggestions.
                </p>
                <p>
                    <a href='mailto:careers@justreadit.build'>careers@justreadit.build</a> - Job applications and career opportunities.
                </p>
                <p>
                    <a href='mailto:support@justreadit.build'>support@justreadit.build</a> - Customer support and technical assistance.
                </p>
            </div>
        </FooterContainer>
    );
};

export default Footer;
