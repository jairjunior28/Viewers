import './OHIFLogo.css';

import { Icon } from '@ohif/ui';

//import { LogoImg } from '../../assets/imgs/logo-branca';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="http://genustecnologia.com.br"
    >

      <Icon name="ohif-logo" className="header-logo-image" />
      {/* Logo text would fit smaller displays at two lines:
       *
       * Open Health
       * Imaging Foundation
       *
       * Or as `OHIF` on really small displays
       */}
      <Icon name="ohif-text-logo" className="header-logo-text" />
    </a>
  );
}

export default OHIFLogo;
