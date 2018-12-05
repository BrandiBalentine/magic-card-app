import React from 'react';

import CardList from '../../components/CardList';
import Dropdown from '../../components/Dropdown';
import InfiniteScroll from 'react-infinite-scroller';
import SearchBox from '../../components/SearchBox';
import { BASE_URL, SORTABLES } from '../../constants';
import loading from '../../images/loading.gif';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      availableTypes: [],
      cards: [],
      hasMore: true,
      searchQuery: "",
      selectedType: "Creature",
      orderBy: "name"
    }
  }
  
  componentWillMount() {
    this.loadTypes();
    this.loadCards(0);
  }

  search = (searchQuery) => {
    this.setState({ cards: [],
                    searchQuery: searchQuery });
    this.scroller.pageLoaded = 0;
  }

  updateSort = (orderBy) => {
    this.setState({ cards: [],
                    orderBy: orderBy });
    this.scroller.pageLoaded = 0;
  }

  updateType = (type) => {
    this.setState({ cards: [],
                    selectedType: type });
    this.scroller.pageLoaded = 0;
  }

  loadTypes = () => {
    fetch("https://api.magicthegathering.io/v1/types").then(results => {
      return results.json();
    }).then(data => {
      this.setState({ availableTypes: data['types'] });
    });
  }

  loadCards = (page) => {
    let url = `${BASE_URL}&page=${page}&type=${this.state.selectedType}&orderBy=${this.state.orderBy}`;
    if (this.state.searchQuery.length > 0) {
      url += `&name=${this.state.searchQuery}`;
    }
    fetch(url).then(results => {
        return results.json();
      }).then(data => {
        this.setState({ cards: this.state.cards.concat(data['cards']) });
    });
  }

  render() {
    return (
      <div>
        <header>
          <div class="form-wrapper">
            <h1>Magic the Gathering</h1>
            <div role="form" className="form">
              <SearchBox search={this.search}/>
              <div className="dropdowns">
                <Dropdown options={this.state.availableTypes}
                          defaultValue={this.state.selectedType}
                          handleChange={this.updateType}
                          labelText="Type"
                          selectId="type" />
                <Dropdown options={SORTABLES}
                          defaultValue={this.state.orderBy}
                          handleChange={this.updateSort} 
                          labelText="Sort by"
                          selectId="sort-by" />
              </div>
            </div>
          </div>
        </header>
        <main>
          <InfiniteScroll
            ref={scroller => this.scroller = scroller}
            pageStart={this.page}
            loadMore={this.loadCards.bind(this)}
            hasMore={true}
            loader={<div className="loader" key={0}><img src={loading}/></div>}
          >
            <CardList cards={this.state.cards} />
          </InfiniteScroll>
        </main>
      </div>
    );
  }
}
export default App;
