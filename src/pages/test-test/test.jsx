const Test = () => {
    return (
        <div>
            <nk-diamond collection-id='clxfxhnzc0001apvm73dsbrdt'>
                <nk-is-not-connected>
                    <nk-connect-wallet-button>Connect Wallet</nk-connect-wallet-button>
                </nk-is-not-connected>

                <nk-is-connected>
                    <nk-drop-mint-button success-title='Success!' success-message='You did it!'>
                        Mint NFT
                    </nk-drop-mint-button>
                </nk-is-connected>
            </nk-diamond>
        </div>
    );
};

export default Test;
