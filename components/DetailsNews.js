import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Linking} from 'react-native';

export default class DetailsNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const news = this.props.navigation.getParam('news');
        const link = this.props.navigation.getParam('link');

        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.newsText}>{news}</Text>
                    </View>
                </ScrollView>
                <View style={styles.viewButton}>
                    <Button style={styles.button} title='Open news in browser' onPress={() => {
                        Linking.canOpenURL(link).then(support =>{
                            if (support) {
                                Linking.openURL(link);
                            }
                        })
                    }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4e4e4',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    newsText:{
        fontSize: 20,
    },
    viewButton: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        backgroundColor: '#d3d3d3'

    },
    button: {
        color: '#FFFFFF'
    }
});
