import SideBarMenu from './components/SideBarMenu';
import { SideBarMenuItem, SideBarMenuCard } from './types/types';
import {
  FcCalendar,
  FcAutomatic,
  FcBearish,
  FcCurrencyExchange,
} from 'react-icons/fc';
import profileImage from '../src/images/JhormanOrozco.jpg';

function App() {
  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Config',
      icon: FcAutomatic,
      url: '/',
    },
    {
      id: '2',
      label: 'Statistics',
      icon: FcBearish,
      url: '/',
    },
    {
      id: '3',
      label: 'Balance',
      icon: FcCurrencyExchange,
      url: '/',
    },
    {
      id: '4',
      label: 'Calendar',
      icon: FcCalendar,
      url: '/',
    },
  ];

  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Jhorman Orozco',
    photoUrl: profileImage,
    title: 'Web UI Developer',
    url: '/',
  };

  return (
    <div>
      <SideBarMenu items={items} card={card} />
    </div>
  );
}

export default App;
