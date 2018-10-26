import React, { Component } from 'react';
import SocialCard from './SocialCard';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {people: [{name: "Julien Aflalo",
                            phone_number: "+33 6 37 48 45 27",
                            email: "aflalojulien@gmail.com",
                            img: "Picme.jpg"},
                          ],
                  error: null,
                  isLoaded: false
                  };
  }
  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then(res => {
      console.log(res);
      if (res.ok) this.setState({isLoaded: true});
      return res.json();
    })
    .then((result) => {
      console.log("then");
      console.log(result.results[0]);
      let peopleApi = this.state.people;
      peopleApi[0].name = result.results[0].name.first + " " + result.results[0].name.last;
      peopleApi[0].phone_number = result.results[0].cell;
      peopleApi[0].email = result.results[0].email;
      peopleApi[0].img = result.results[0].picture.medium;
      this.setState({people: peopleApi});
    })
    .catch(err => {
      console.error(err);
    })
  }
  displayList(props){
    const people = this.state.people;
    const listItems = people.map((person, index) => {
      return(<SocialCard
        name={person.name}
        phone_number={person.phone_number}
        email={person.email}
        img={person.img}
        key={index}
      />)      
    });
    //console.log(listItems)
    return listItems;
  }
  render() {
    const {error, isLoaded} = this.state;
    if (error) return <div>Error : {error.message}</div>;
    else if (!isLoaded) return <div>Loading...</div>;
    else{
      return (
        <div className="App">
          {/* {this.queryApi()} */}
          {this.displayList()}
        </div>
      );
    }
  }
}

export default App;
