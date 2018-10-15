import React from 'react';
import {ActivityIndicator, StyleSheet, Text, ScrollView, View, FlatList, TouchableOpacity, RefreshControl} from 'react-native';

import NewsTitles from './NewsTitles';

export default class NewsPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false,
        };
        this.readData = this.readData.bind(this)
    }

    componentDidMount() {
        this.readData();
    }

    readData() {
        return fetch('http://localhost:3000')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.container} refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.readData}
                />
            }>
                <Text style={styles.gameFeed}>Gaming news feed</Text>
                <FlatList style={styles.flatList}
                          data={this.state.dataSource}
                          ItemSeparatorComponent={() =>
                              <View style={styles.seperator}/>}
                          renderItem={({item}) => (
                              <TouchableOpacity style={styles.opacity}
                                  onPress={() => this.props.navigation.navigate('NewsTitles', { feedNews:item })}
                              >
                                  <Text style={styles.singleResult}> {item.site} </Text>
                              </TouchableOpacity>
                          )}
                          keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        );
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
    gameFeed:{
        marginTop:30,
        marginBottom:50,
        fontSize: 30,
        textAlign: 'center'
    },
    flatList: {
        paddingTop: 0,
    },
    opacity:{
        flexDirection: 'row',
    },
    seperator: {
        backgroundColor: '#2a9cd9',
        height: 5,
    },
    singleResult:{
      fontSize: 30,
      marginLeft: 10,
    }
});
