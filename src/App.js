import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors';
import Favicon from 'react-favicon';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {
  const backgroundImage = 'images/mic.jpg';
  const sidebarHeader = {
    fullName: 'SUNO SUNAO',
    shortName: 'SUNO'
  };
  const menuItems = [
    {name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'About', to: '/about', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Add a blog', to: '/Addablog', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Add a event', to: '/Addaevent', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Blog', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    {name: 'Timeline', to: '/Timeline', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Profile', to: '/profile', icon: '/icons/profile', subMenuItems: [] },
    {name: 'Contact Us', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] },
    {name: 'Sign Out', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] }
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.swampy}
      />
      <MainView />
    </s.App>
  );
}

export default App;
