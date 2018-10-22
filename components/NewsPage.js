import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import { sites } from '../sites';

import NewsTitles from './NewsTitles';

export default class NewsPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: sites,
        };
    }

    renderItem = ({item}) => (
        <Text onPress={() => this.props.navigation.navigate('NewsTitles', {newsTitles: item})}
              style={styles.singleResult}> {item.name} </Text>
    );

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.gameFeed}>Gaming news feed</Text>
                <FlatList
                          data={this.state.dataSource}
                          initialNumToRender={5}
                          removeClippedSubviews={ false }
                          ItemSeparatorComponent={() =>
                              <View style={styles.seperator}/>}
                          renderItem={this.renderItem}
                          extraData={this.state}
                          keyExtractor={item => item.name} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    noResults: {
        fontSize: 20,
    },
    gameFeed: {
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center'
    },
    seperator: {
        backgroundColor: '#2a9cd9',
        height: 5,
    },
    singleResult: {
        fontSize: 20,
        marginLeft: 5,
    }
});
