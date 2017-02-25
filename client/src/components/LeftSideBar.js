//React requirements
import React from 'react';

//UI
import { Menu, Sidebar } from 'semantic-ui-react';

//Components
import MenuLink from './MenuLink';

//Actions
import { logoutUser } from '../actions/navigation';

export default props => {
  const handleLogout = (e) => {
    e.preventDefault();

    props.dispatch(logoutUser());
  };

  return (
    <Sidebar 
      as={Menu} 
      animation='uncover' 
      visible={props.nav.leftSidebarVisible} 
      vertical 
      width='thin' 
      inverted 
    >
        <Menu.Item header>Vineyard</Menu.Item>
        {
          props.auth.username ? 
            (
              <Menu.Menu>
                <MenuLink name='home' />
                <MenuLink name='viewData' to='/data/view' />
                <MenuLink name='viewAlerts' to='alerts' />
                <MenuLink name='writeNote' to='form' />
                <MenuLink name='viewNotes' to='/notesView' />
              </Menu.Menu>
            ) : ''
        }
        <Menu.Menu position='right'>
          { 
            props.auth.username ? 
              (<Menu.Item name='logout' onClick={handleLogout} />) : 
              (<MenuLink name='login' />)
          }
          {
            props.auth.username ? '' : 
              (<MenuLink name='signUp' />)
          }
        </Menu.Menu>
      </Sidebar>
  );
}