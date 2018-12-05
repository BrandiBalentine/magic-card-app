import React, { Component } from 'react';

class Dropdown extends Component {
  getOptions = () => {
    return this.props.options.map((option, index) => {
      return React.createElement('option', {value: option, key: index}, option);
    });
  }

  handleChange = (e) => {
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.selectId}>{this.props.labelText}</label>
        <select
          id={this.props.selectId}
          className={this.props.selectId}
          onChange={this.handleChange}
          value={this.props.defaultValue}
        >
          {this.getOptions()}
        </select>
    </div>
    );
  }
}

export default Dropdown;