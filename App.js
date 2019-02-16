

import React, { Component } from 'react';
import { Keyboard, TouchableOpacity, StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView } from 'react-native';
import DefineContainer from './defineContainter';
import { SearchImage, SearchWord } from './api';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true,
      imgAvailable: false
    };
  }

  handleSubmit = () => {
    Keyboard.dismiss()
    SearchWord(this.state.text)
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      });
    //request for image
    SearchImage(this.state.text)
      .then((responseJson) => {
        this.setState({
          listImage: responseJson.items,
          imgAvailable: true
        });
        console.log('returned json');
        console.log(responseJson.items);
      });

  }

  
  render() {


    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require('./images/logo.jpg')}
              style={{ width: 200, height: Dimensions.get('window').height * 0.25 * 0.45 }}
            />
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.textbox}>
              <TextInput
                placeholder="Search English"
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({ text })}
                onSubmitEditing={this.handleSubmit}
              />
            </View>
            <View style={styles.searchIcon}>
              <TouchableOpacity onPress={this.handleSubmit}>
                <Image
                  source={require('./images/searchIcon.jpg')}
                  style={{ width: '100%', height: '100%' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.body}>
            {!this.state.isLoading && this.state.imgAvailable ? <DefineContainer data={this.state.dataSource.data} pronoun={this.state.dataSource.pronoun} mp3={this.state.dataSource.mp3} imgIN={this.state.listImage} /> : <View></View>}
          </View >
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#68acbb',
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'center',

  },
  body: {
    //flex: 3
  },
  logo: {
    flex: 1,
    alignItems: 'center'
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 30
  },
  textbox:
  {
    flex: 6,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1
  },
  searchIcon: {
    flex: 1,

  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    position: 'absolute',
    backgroundColor: 'transparent'
  }
});


