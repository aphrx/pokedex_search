import React, { Component } from "react";
import { render } from "react-dom";
import Searchbar from "./Searchbar";
import PokemonCard from "./PokemonCard";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Searchbar/>
                <PokemonCard />
            </div>
            
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
