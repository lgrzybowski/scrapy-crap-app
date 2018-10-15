import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default class DetailsNews extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const news = this.props.navigation.getParam('news')


        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.gameFeed}>{news}</Text>
                    </View>
                </ScrollView>
                <Button title='Button' onPress={()=>{console.log('ok')}} />
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
