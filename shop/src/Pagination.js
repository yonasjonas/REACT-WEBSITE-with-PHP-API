import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");

class PaginationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
        };
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber, });
    }
    render() {
        return (
            <div className="float-center">
                <Pagination 
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}

export default PaginationView