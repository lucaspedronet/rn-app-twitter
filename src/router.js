/* eslint-disable linebreak-style */
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import TimeLine from '~/pages/TimeLine';
import NewTwitter from '~/pages/NewTwitter';
import Login from '~/pages/Login';

const Route = createAppContainer(
  createSwitchNavigator(
    {
      TimeLine,
      NewTwitter,
      Login,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

export default Route;
