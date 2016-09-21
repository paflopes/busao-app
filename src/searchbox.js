import {View, TextInput, StyleSheet} from 'react-native';
import React, {Component, PropTypes} from 'react';

import Style from './stylesheet';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder
    };

    this.textFocused.bind(this);
  }

  textFocused() {
    this.setState({placeholder: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchbox}
          maxLength = {40}
          underlineColorAndroid={Style.GRAY}
          onFocus={() => this.textFocused()}
        >
          {this.state.placeholder}
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center'
  },
  searchbox: {
    width: Style.CARD_WIDTH
  }
});


SearchBox.propTypes = {
  placeholder: PropTypes.string
};

SearchBox.defaultProps = {placeholder: 'nome da rua, terminal...'};
