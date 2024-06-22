// Assets
import { Castle, Discord } from 'assets/icons';
import { StickerContainer } from './sticker.style';

const Sticker = () => {
    return (
        <StickerContainer>
            <div className='container'>
                <div className='sticky-field'>
                    <p>Check Eligibility & Join</p>
                    <div>
                        <a href='https://www.guild.xyz/justreadit' target='_blank'>
                            <Castle />
                            Join Guild
                        </a>
                        <a href='https://discord.gg/snQBQDRBjP' target='_blank'>
                            <Discord />
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </StickerContainer>
    );
};

export default Sticker;
