import React from 'react'
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';

import DetailsNews from './DetailsNews'

import { fetchArticles } from '../helpers/fetchArticlesHelper'

export default class NewsTitles extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            error: false
        }
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = async () =>{
        const siteName = this.props.navigation.getParam('newsTitles');

        try {
          const dataSource = await fetchArticles(siteName);
          this.setState({
              dataSource,
              isLoading: false,
          })

      }  catch (error) {
            this.setState({
                error: true,
                isLoading: false
            })
      }
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.load}>
                    <ActivityIndicator/>
                </View>
            )
        }

        if (this.state.error) {
            return (
                <View style={styles.noResults}>
                    <Text>We are not having results to show, try to back later.</Text>
                </View>
           )
        }

        return (
            <View style={styles.container}>
                    <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={() =>
                        <View style={styles.seperator}/>}
                    initialNumToRender={20}
                    maxToRenderPerBatch={2}
                    renderItem={({item}) => (
                        <Text onPress={() => this.props.navigation.navigate('DetailsNews', {
                            news: item.text,
                            link: item.link
                        })}> {item.title} </Text>
                    )}
                    keyExtractor={item => item.title}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4e4e4'
    },
    load: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    seperator: {
        backgroundColor: '#2a9cd9',
        marginTop: 20,
        marginBottom: 20,
        height: 5,
    },
    noResults: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
    }
});