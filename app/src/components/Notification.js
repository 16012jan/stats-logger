import React, {Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Notificaton extends Component {
  render(){
    return (
        <div className={this.props.className}>{this.props.message}</div>
      )
  }
}
Notificaton.propTypes = {
  message: propTypes.string,
  className: propTypes.string

}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    className: state.notification.className
  };
};

Notificaton = connect(mapStateToProps)(Notificaton);


export default Notificaton
