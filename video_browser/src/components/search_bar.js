import React, {Component} from "react";

// the class componnet can keep record of them self
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ""};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearTermChange(term);
  }
}

export default SearchBar;
