import React, {Component} from 'react';
// import Content from './components/content/Content.jsx';
import HomeLayout from './components/home_layout/HomeLayout.jsx';
import ProfileLayout from './components/profile_layout/ProfileLayout.jsx';
import SearchResultLayout from './components/search_result_layout/SearchResultLayout.jsx';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: []
    };
  }

  componentWillMount() {
    axios.get("http://localhost:3000/")
    .then(res => {
      const tutors = res.data;
      return this.setState({tutors});
    }).then(() => {
      console.log(this.state.tutors)
    });
  }

  render() {
    if (this.state.tutors.length > 0) {
      return (<div>
                <HomeLayout tutors={this.state.tutors}/>
              </div>
      );
    }
    return null;
  }
}
export default App;
