import { StackNavigator } from 'react-navigation';
import Countries from './Countries';
import Init from './Init';

const Navigator = StackNavigator({
  Init: {
    screen: Init,
  },
  Countries: {
    screen: Countries,
    navigationOptions: () => ({
      title: 'Countries',
    }),
  },
}, {
  headerMode: 'screen'
});

export default Navigator;