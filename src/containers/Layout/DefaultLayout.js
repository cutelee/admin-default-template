import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { DefaultHeader } from './index';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarForm,
  AppSidebarNav,
} from '@coreui/react';

import navigation from '../../sidebarNav';
import routes from '../../routes';

class DefaultLayout extends Component {
  render() {
    return (
      <div className='app'>
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className='app-body'>
          <AppSidebar fixed display='lg'>
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
          </AppSidebar>
          <main className='main'>
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx}
                  path={route.path} exact={route.exact} name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />)
                  : (null);
                },
              )}
              <Redirect from='/' to='/dashboard' />
              </Switch>
            </Container>
          </main>
          <AppAside fixed>

          </AppAside>
        </div>
        <AppFooter>

        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
