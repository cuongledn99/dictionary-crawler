import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
export default class DefineItem extends Component {
    handlePress = () => {
        //         // Load the sound file 'whoosh.mp3' from the app bundle
        // // See notes below about preloading sounds within initialization code below.
        // var whoosh = new Sound(this.props.data.mp3, Sound.MAIN_BUNDLE, (error) => {
        //     if (error) {
        //         alert('failed to load the sound', error);
        //         return;
        //     }
        //     // loaded successfully
        //     alert('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        // });

        //         // Play the sound with an onEnd callback
        //         whoosh.play((success) => {
        //             if (success) {
        //                 alert('successfully finished playing');
        //             } else {
        //                 alert('playback failed due to audio decoding errors');
        //                 // reset the player to its uninitialized state (android only)
        //                 // this is the only option to recover after an error occured and use the player again
        //                 whoosh.reset();
        //             }
        //         });
    }
    CustomMapping = (arr) => {

        return arr.map((data) => {
            return (
                <Text>{data}</Text>
            )
        })

    }
    render() {
        let { pronoun, mp3, data, img } = this.props;
        return (
            <React.Fragment>
                {data.map(item => (
                    <React.Fragment key={6969}>
                        <View style={{
                            padding: 10,
                        }}>
                            <Text style={styles.headword}>{item.headword}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.pronoun}>  /{pronoun}/  </Text>
                                <TouchableHighlight onPress={this.handlePress}>
                                    <Image
                                        source={require('./images/speaker.png')}
                                    />
                                </TouchableHighlight>
                            </View>
                            <Text style={styles.def_head}>{item.def_head}</Text>
                            <Text style={styles.def_body}>
                                {item.def_body.map(subitem => (
                                    <React.Fragment key={1212}><Text>{'\n\n'}{'  - '}{subitem}</Text></React.Fragment>
                                ))}
                            </Text>
                            {/* <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: img }}
                /> */}
                        </View>
                    </React.Fragment>
                ))}


            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    headword: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#141823',
        fontWeight: 'bold',
        backgroundColor: 'blue'
    },
    type: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#141823',
        fontStyle: 'italic',
    },
    pronoun: {
        fontFamily: 'Arial',
        fontSize: 20
    },
    mp3: {

    },
    def_head: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#141823',
        fontWeight: 'bold',
    },
    def_body: {
        textAlign: 'left',
        fontFamily: 'Arial',
        fontSize: 20
    }
});