
import React from 'react';
import Popup from "reactjs-popup";

/* class Pop from 'react';
/* class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
} */

class MyPopUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                <button className="btn btn-warning w-100" onClick={this.openModal}>
                    Read All
            </button>
                <Popup
                    
                    open={this.state.open}
                    closeOnDocumentClick
                    modal
                    onClose={this.closeModal}

                >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                </a>
                text
                {this.props.description}


                    </div>
                </Popup>
            </div>
        );
    }
};


export default MyPopUp
