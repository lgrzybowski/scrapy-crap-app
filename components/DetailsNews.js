import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Linking} from 'react-native';

export default class DetailsNews extends React.PureComponent {
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
                        <Text style={styles.gameFeed}>{news}</Text>
                    </View>
                </ScrollView>
                <Button title='Open news in browser' onPress={() => {
                    Linking.canOpenURL(link).then(support =>{
                        if (support) {
                            Linking.openURL(link);
                        }
                    })
                }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
