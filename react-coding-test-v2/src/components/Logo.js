import React from 'react';

import { ReactComponent as MainLogo } from '../images/usb-logo.svg';

const Logo = () => {
    return (
        <>
            <div className="header-logo" aria-hidden="true">
                <MainLogo />
            </div>
        </>
    )
}

export default Logo;