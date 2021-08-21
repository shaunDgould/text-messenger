import React from "react"

class WelcomeForm extends React.Component{

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
            <div className="WelcomeForm">
                <header className="WelcomeForm-header">
                    <form onSubmit={this.handleSubmit}>
                        <div className="WelcomeForm-label">
                            <label>
                                What message do you want to send to your text message subscribers?

                            </label>
                        </div>
                        <input type="text" value={this.state.message} onChange={this.handleChange} />
                        <div className="WelcomeForm-submitButton">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </header>
            </div>
        );
    }
}

export default WelcomeForm;
