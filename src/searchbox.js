import {View, TextInput, StyleSheet} from 'react-native';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchLinhas} from './actions';

import Style from './stylesheet';

class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder
    };

    this.textFocused = this.textFocused.bind(this);
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
          onChangeText={text => this.props.searchLinhas(text)}
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
  placeholder: PropTypes.string,
  searchLinhas: PropTypes.func
};

SearchBox.defaultProps = {placeholder: 'nome da rua, terminal...'};

export default connect(
  null,
  (dispatch) =>
    bindActionCreators({searchLinhas}, dispatch)
)(SearchBox);
