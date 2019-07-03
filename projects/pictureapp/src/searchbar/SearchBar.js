import React, { Component } from 'react';
import './SearchBar.css';
import { Link } from "react-router-dom";
import {withProvider} from "../GlobalProvider.js";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            search: "", 
        }
    }

    setSearchWord = (event) => {
        event.preventDefault();
        this.setState({
          search: event.target.value
        }, () => {
            this.props.setSearchWordProp(this.state.search);
        })
       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("test");
        this.props.setSearchWord(this.state.search)
            .then(() => this.props.history.push("/search"));
    }

    render() { 
        return (
            <div>
                <div className="text"> Search and Download images for Free</div>
                <form onSubmit = {this.handleSubmit}>
                    <div className="search-bar"> 
                        <div className="input-group mb-3">
                            <input type="text" onChange={this.setSearchWord} value={this.state.search}  className="form-control" placeholder="Search free photos" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">
                                    <Link to="/search" className="nav-link">Search</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
  
        );
    }
}
 
export default withProvider(SearchBar);