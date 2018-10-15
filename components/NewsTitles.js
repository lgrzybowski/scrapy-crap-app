import React from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

import DetailsNews from './DetailsNews'

export default class NewsTitles extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const feeds = this.props.navigation.getParam('feedNews')
        return (
            <View style={styles.container}>
                <FlatList
                    data={feeds.news}
                    ItemSeparatorComponent={() =>
                        <View style={styles.seperator}/>}

                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DetailsNews', {news: item.text})}>
                            <Text style={styles.singleResult}> {item.title} </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    seperator: {
        backgroundColor: '#2a9cd9',
        height: 5,
    },
});