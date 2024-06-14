// Assets
import { Castle, Discord } from 'assets/icons';
import { StickerContainer } from './sticker.style';

const Sticker = () => {
    return (
        <StickerContainer>
            <p>Check Eligibility & Join</p>
            <div>
                <a href='https://www.guild.xyz/justreadit' target='_blank'>
                    <Castle />
                    Join Guild
                </a>
                <a href='https://discord.gg/9ZkGdjVpnk' target='_blank'>
                    <Discord />
                    Join Discord
                </a>
            </div>
        </StickerContainer>
    );
};

export default Sticker;
