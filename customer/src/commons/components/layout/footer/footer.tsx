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
                <a href='https://discord.gg/snQBQDRBjP' target='_blank'>
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
                    <a href='mailto:info@justreadit.xyz'>info@justreadit.xyz</a> - Customer support and technical assistance.
                </p>
            </div>
        </FooterContainer>
    );
};

export default Footer;
