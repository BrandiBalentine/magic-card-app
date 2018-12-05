import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
  }

  submitSearch = () => {
    this.props.search(this.state.searchQuery);
  }

  onChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  }

  inspectKey = (e) => {
    if (e.key === 'Enter') {
      this.submitSearch(this.state.searchQuery);
    }
  }

  render() {
    return (
      <div role="search">
          <label htmlFor="search">Search cards</label>
            <input
              id="search"
              type='search'
              placeholder='search cards'
              value={this.state.searchQuery}
              onChange={this.onChange}
              onKeyPress={this.inspectKey}
            />
          <input className="button" type="button" value="search" onClick={this.submitSearch}/>
      </div>
    );
  }
}

export default SearchBox;