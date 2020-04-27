import React from 'react';
import axios from 'axios';
import Button from "react-bootstrap/button"

const API_PATH = 'http://www.webface.ie/api/send.php';


function validate(email, fname, message) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        fname: fname.length === 0,
        message: message.length === 0
    };
}

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null,
            touched: {
                email: false,
                fname: false,
                message: false,
            },
            everFocusedEmail: false,
            everFocusedName: false,
            inFocus: "",
            successMessage: 'Thank you for contacting me.',
            errorMessage: 'Sorry we have some problems.',
        };
    };
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    };
    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });   
    };
    handleNameChange = evt => {
        this.setState({ fname: evt.target.value });
    };
    handleMsgChange = evt => {
        this.setState({ message: evt.target.value });
    };


    handleFormSubmit = e => {
        e.preventDefault();
        if (!this.canBeSubmitted()) {
            e.preventDefault();
            return;
        }
        const { email, fname, message } = this.state;
        console.log(`Signed up with email: ${email} name wassss really: ${fname} and message was: ${message}`);

        //checkEmpty();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {
                'content-type': 'application/json',
            },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
        //console.log(this.state.fname)
    };

    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.fname, this.state.message);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    render() {
        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false;
        };
        const errors = validate(this.state.email, this.state.fname, this.state.message);
        const isDisabled = Object.keys(errors).some(x => errors[x]);


        return (
            <div className="App">
                <p>Contact Me</p>
                <div>
                    <form action="#">
                        <label>First Name *</label>
                        { <div><p className={shouldMarkError('fname') ? "msgwrne text-small display-block" : "display-none"}>fill in your name</p></div>}
                        <input type="text"
                            id="fname"
                            name="firstname"
                            className={shouldMarkError('fname') ? "error error_name display-block" : ""}
                            onBlur={this.handleBlur('fname')}
                            onChange={this.handleNameChange}
                            placeholder="Your name.."
                            value={this.state.fname}
                            //onChange={e => this.setState({ fname: e.target.value })}
                            required />
                        <label>Last Name</label>
                        <input type="text"
                            id="lname"
                            name="lastname"
                            placeholder="Your last name.."
                            value={this.state.lname}
                            onChange={e => this.setState({ lname: e.target.value })}
                        />
                        <label>Email *</label>
                        { <div><p className={shouldMarkError('email') ? "msgwrne text-small display-block" : "display-none"}>fill in your email</p></div>}
                        {/* <div><p className="msgwrne display-none text-small">fill in email</p></div> */}
                        <input type="email"
                            id="email"
                            name="email"
                            className={shouldMarkError('email') ? "error error_email" : ""}
                            onBlur={this.handleBlur('email')}
                            placeholder="Your email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            required />
                        <label>Message *</label>
                        { <div><p className={shouldMarkError('message') ? "msgwrne text-small display-block" : "display-none"}>Write your message</p></div>}
                        <textarea id="subject"
                            name="subject"
                            className={shouldMarkError('message') ? "error error_sub" : ""}
                            onBlur={this.handleBlur('message')}
                            placeholder="Write something.."
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}>
                            onChange={this.handleMsgChange}
                        </textarea>
                        <Button className="w-100" disabled={isDisabled} type="submit" title={isDisabled ? "Submit" : "button is disabled while fields are empty"}
                            onClick={e => this.handleFormSubmit(e)}
                            value="Submit">{isDisabled ? "please fill in the fields with * to enable the button" : "Submit"}
                             
                        </Button>
                        <div>
                            {this.state.mailSent && <div className="success text-white">{this.state.successMessage}</div>}
                            {this.state.error && <div className="error text-white">{this.state.errorMessage}</div>}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;