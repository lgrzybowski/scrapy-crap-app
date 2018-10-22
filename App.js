import React from 'react';
import NewsTitles from './components/NewsTitles'
import NewsPage from './components/NewsPage'
import DetailsNews from './components/DetailsNews'

import {
    createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator(
    {
      NewsPage: {screen: NewsPage},
      NewsTitles: {screen: NewsTitles},
      DetailsNews: {screen: DetailsNews}

    },
    {
      initialRouteName: 'NewsPage',
      swipeEnabled: true
    }
);

export default App;