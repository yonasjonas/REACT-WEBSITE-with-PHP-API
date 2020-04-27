
import React from 'react';
import './index.css';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
//import TextTruncate from 'react-text-truncate'; // recommend
import MyPopUp from "./MyPopUp";
import Pagination from "react-js-pagination";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            records: [],
            activePage: 1,
            itemsCountPerPage: 12,
            search: ''
        };
        this.handlePageChange = this.handlePageChange.bind(this);        
    }


    componentWillMount() {
        fetch("http://webface.ie/api/product/read.php")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    records: result.records,

                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }   

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }
    
    render() {        

        const { error, isLoaded, records, activePage, itemsCountPerPage } = this.state;
        const indexOfLastTodo = activePage * itemsCountPerPage;
        const indexOfFirstTodo = indexOfLastTodo - itemsCountPerPage;
        const currentRecords = records.slice(indexOfFirstTodo, indexOfLastTodo);

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Container>
                    <List currentRecords={currentRecords} items={this.state.records} delete={this.removeItem} filted={this.state.filtered} />



                    <Pagination
                        className="float-center"
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        totalItemsCount={50}
                        pageRangeDisplayed={5}
                    />
                    {console.log(this.state.records.length)}

                </Container>
            );
        }        
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
        };
        this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.currentRecords  // asigning current 12 record                
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.currentRecords
        });
    }
    
    handleChange(e) {  // this handles typing into the searchbar
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];
        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList            
            currentList = this.props.items;
            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                console.log(item.name);
                const lc = item.name.toString().toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);               
                
            });
        } else {
            // If the search bar is empty, set newList to original list
            newList = this.props.currentRecords;  // this takes into account currentRecords so after search results are deleted it will go into showing only 12             
            
        }

        
        
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });

        
        setTimeout(() => {
            if (this.state.filtered.length <= 2) {
                document.querySelector("ul.pagination").classList.add("d-none");
            }
            else if (this.state.filtered.length > 3) {
                document.querySelector("ul.pagination").classList.remove("d-none");
            }
            else {
                document.querySelector("ul.pagination").classList.remove("d-none");
            }
            console.log(this.state.filtered.length)
            
        }, 200);
        
    }    

    render() {

        return (
            <div>
                <form className="search-form" id="addItemForm">
                    <input
                        className="input"
                        id="addInput"
                        type="text"
                        onChange={this.handleChange}
                    />                    
                </form>
                <Row>
                    {this.state.filtered.map((item) => (
                        <Col key={item + item.name + Math.floor(Math.random() * 101)} id={this.state.activePage} items={item.name} xl={3} lg={4}>

                            <Card>
                                <Card.Img variant="top" src={"http://webface.ie/shop/images/" + item.image + ".jpg"} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description.slice(0, 20)}
                                    </Card.Text>
                                    <MyPopUp description={item.description} />
                                    <h3 className="mt-3"><span>Market price:</span> €{item.price}</h3>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
export default Product;