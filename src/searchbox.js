import React, {Component, PropTypes} from 'react';
import {TextInput} from 'react-native';

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
      <TextInput onFocus={() => this.textFocused()}>{this.state.placeholder}</TextInput>
    );
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string
};

SearchBox.defaultProps = {placeholder: 'nome da rua, terminal...'};
