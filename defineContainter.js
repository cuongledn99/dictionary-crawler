import React, { Component } from 'react';
import {
    ActivityIndicator,
    Linking,
    View,
    Image,
    StyleSheet,
    Platform,
    Dimensions,
    Text,
    TouchableWithoutFeedback,

} from 'react-native';
import DefineItem from './defineItem';
import ImageLayout from 'react-native-image-layout';

const deviceWidth = Dimensions.get('window').width / 2;

export default class DefineContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    ArrayImagesGenerator = (arr_Images) => {
        let result = [];
        arr_Images.map((item) => {
            let imgURL = item.link;
            let subItem = {
                uri: imgURL
            };
            result.push(subItem);
        });
        return result;
    }
    componentWillMount() {

        let res = this.ArrayImagesGenerator(this.props.imgIN);
        this.setState({
            listImage: res
        });
        console.log('props in render function');
        console.log(this.props);

        
    }

    render() {
        
        console.log('state in render');
        console.log(this.state);
        return (
            <View>
                <DefineItem {...this.props} />
                <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{ width: deviceWidth, height: deviceWidth, backgroundColor: 'red' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: this.props.imgIN[0].link }}
                        />
                    </View>
                    <View style={{ width: deviceWidth, height: deviceWidth, backgroundColor: 'skyblue' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: this.props.imgIN[1].link }}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{ width: deviceWidth, height: deviceWidth, backgroundColor: 'black' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: this.props.imgIN[2].link }}
                        />
                    </View>
                    <View style={{ width: deviceWidth, height: deviceWidth, backgroundColor: 'yellow' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: this.props.imgIN[3].link }}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{ width: deviceWidth, height: deviceWidth, backgroundColor: 'red' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: this.props.imgIN[4].link }}
                        />
                    </View>
                    <View style={{ width: deviceWidth, height: deviceWidth, backgroundColor: 'skyblue' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: this.props.imgIN[5].link }}
                        />
                    </View>
                </View>
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#368FFA"
    }
});