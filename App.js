import React from 'react';
import NewsTitles from './components/NewsTitles'
import NewsPage from './components/NewsPage'
import DetailsNews from './components/DetailsNews'

import {
    createStackNavigator,
} from 'react-navigation-stack';

import {
    createAppContainer,
} from 'react-navigation';


const RootStack = createStackNavigator(
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

const App = createAppContainer(RootStack);

export default App;