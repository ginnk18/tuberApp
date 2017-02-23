import React, {Component} from 'react';
// import Content from './components/content/Content.jsx';
import HomeLayout from './components/home_layout/HomeLayout.jsx';
import ProfileLayout from './components/profile_layout/ProfileLayout.jsx';
import SearchResultLayout from './components/search_result_layout/SearchResultLayout.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.pages = {
      "home": <HomeLayout tutors={this.props.appState.tutors}/>,
      "profile": <ProfileLayout />,
      "register_tutor": 'Scott to fill in',
      "search_result": <SearchResultLayout />
    };
  }

  render() {
    if (this.props.appState.tutors.length > 0) {
      return (<div>
                {this.pages[this.props.appState.page]}
              </div>
      );
    }
    return null;
  }
}
export default App;
