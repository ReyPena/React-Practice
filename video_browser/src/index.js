import _ from "lodash";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideosList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY =  "Here goes the key";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("Music 2016")
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideosList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// React.createElement()
ReactDOM.render(<App />, document.querySelector(".container"));
