import React, { useEffect, useState } from 'react';
import Header from './Header';
import './index.css';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';



/* const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search)
};

const [search, setSearch] = useState(""); 

useEffect(() => {
  updateSearch(); 
}, [search])
*/

class Home extends React.Component {

	render() {
		return (
			<div>
				<Container fluid="md">
					<Header />
				</Container>
				<Footer />
			</div>
		);
	}
}
export default Home;