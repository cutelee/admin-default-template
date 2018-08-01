import React, { Component } from 'react';
import { AppSidebarToggler, AppNavbarBrand, AppAsideToggler } from '@coreui/react';

// logo: 큰 사이즈에서 브랜드로고, sygnet: 작은 사이즈에서 브랜드로고
import logo from '../../assets/img/brand/logo.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';

class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Barun Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Barun Logo' }}
        />
      </React.Fragment>
    );
  }
}

export default DefaultHeader;
