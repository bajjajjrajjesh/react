import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

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
        const { robolist, searchinput } = this.state
        const refinedresult = robolist.filter(
            robolist =>{
                return robolist.name.toLowerCase().includes(searchinput.toLowerCase())
            }
        )
        if (!robolist.length) {
            return <div className="tc">
                     <h1>Loading...</h1>
                   </div>
        } else  {
            return(
                <div className="tc bg-light-green">
                    <h1>
                        <img alt='Crescentek' src= "https://www.crescentek.com/_next/image/?url=%2Fimages%2Flogo-crescentek-white1.png&w=640&q=75" />
                    </h1>
                    <SearchBox searchChange = {this.OnSearchUpdate}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robolist={refinedresult}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }           
    }
 }

export default App;
