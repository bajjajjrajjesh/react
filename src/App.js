import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robolist: [],
            searchinput: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(user => {this.setState({robolist: user})});
    }

    OnSearchUpdate = (event) => {
        this.setState({searchinput: event.target.value})
    }

    render() {
        const refinedresult = this.state.robolist.filter(
            robolist =>{
                return robolist.name.toLowerCase().includes(this.state.searchinput.toLowerCase())
            }
        )
        if (this.state.robolist.length === 0) {
            return <div className="tc">
                     <h1>Loading...</h1>
                   </div>
        } else  {
            return(
                <div className="tc">
                    <h1>
                        <img alt='Crescentek' src= "https://www.crescentek.com/_next/image/?url=%2Fimages%2Flogo-crescentek-white1.png&w=640&q=75" />
                    </h1>
                    <SearchBox searchChange = {this.OnSearchUpdate}/>
                    <Scroll>
                         <CardList robolist={refinedresult}/>
                    </Scroll>
                </div>
            );
        }           
    }
 }

export default App;
