import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

export default class TimeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time : this.props.row.time || "",
      isTimeInput: this.props.row.time ? true : false }
  }

  setInput = (name, value) => {
    // if(value.length === 1) {
    //   const obj={};
    //   obj[name]=value + ':'
    //   this.setState(obj)
    //   return
    // }
    let reg = '^([0-9]?[:]?[0-5]?[0-9]?)$';
    if(value.match(reg)){
      const obj={};
      obj[name]=value
      this.setState(obj)
    }
  }

  enterTime = () => {
    this.setState({isTimeInput : true})
  }

  render() {
    const setValue = this.props.setValue
    const inputClass = classnames({
      'fluid': true,
      'time-input': true,
      'hidden': this.state.isTimeInput,
    });

    return (
      <div>
        { !this.state.isTimeInput && <input className={inputClass} defaultValue="--:--" onClick = { e => this.enterTime()} onFocus = { e => this.enterTime()}/> }
        { this.state.isTimeInput && < input name="time" className="fluid time-input" autoFocus={this.state.time ? false : true} value={this.state.time} onChange = { e => this.setInput('time', e.target.value) } onBlur= { setValue }/> }
      </div>
    )
  }
}
TimeInput.propTypes = {
  name: propTypes.string.isRequired,
  setValue: propTypes.func.isRequired,
  row: propTypes.object.isRequired,
  value: propTypes.string
}
