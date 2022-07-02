import React, { Component } from "react";
import CardList from "./CardList";
import { robolist } from "./RoboList";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robolist: robolist,
            searchinput: ''
        }
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
        return(
            <div className="tc bg-light-green">
                <h1>
                    <img alt='Crescentek' src= "https://www.crescentek.com/_next/image/?url=%2Fimages%2Flogo-crescentek-white1.png&w=640&q=75" />
                </h1>
                <SearchBox searchChange = {this.OnSearchUpdate}/>
                <CardList robolist={refinedresult}/>
            </div>
        )
    }
 }

export default App;
