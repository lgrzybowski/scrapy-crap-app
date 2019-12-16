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

export default class NewsPage extends React.Component {
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
                <FlatList
                          data={this.state.dataSource}
                          initialNumToRender={5}
                          removeClippedSubviews={ false }
                          ItemSeparatorComponent={() =>
                              <View style={styles.seperator}/>}
                          renderItem={this.renderItem}
                          extraData={this.state}
                          keyExtractor={item => item.name}
                />

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
    gameFeed: {
        marginTop: 30,
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 40,
    },
    seperator: {
        marginBottom: 10,
        backgroundColor: '#2a9cd9',
        height: 5,
    },
    singleResult: {
        fontSize: 25,
        marginLeft: 10,
    }
});
