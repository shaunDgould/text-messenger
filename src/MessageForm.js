import React from "react"
import megaphone from "./megaphone-with-sound-waves.svg";
import "./MessageForm.css";

class MessageForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {message:''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({message:event.target.value})
    }

    handleSubmit(event){
        alert('Attention: ' + this.state.message)
    }

    render(){
      return (
        <div className="MessageForm">
              <img src={megaphone} className="MessageForm-megaphone" alt="logo" />
            <form onSubmit={this.handleSubmit}>
              <div className="MessageForm-label">
              <label>
                    What message do you want to send to your text message subscribers?

                </label>
              </div>
              <input type="text" value={this.state.message} onChange={this.handleChange} />
                <div className="MessageForm-submitButton">
                    <input type="submit" value="Submit" />
                </div>
                </form>
            </div>
        );
    }
}

export default MessageForm;
