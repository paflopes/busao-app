import React, {Component, PropTypes} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

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
        <TextInput style={styles.searchbox} onFocus={() => this.textFocused()}>{this.state.placeholder}</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
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
