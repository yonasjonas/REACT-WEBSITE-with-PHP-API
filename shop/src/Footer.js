import React from 'react';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Container fluid="md">
                    <p className="footercopyright text-center pb-3 mt-4">2020 All Rights Reserved</p>
                </Container>
            </div>
        )
    }
}

export default Footer;