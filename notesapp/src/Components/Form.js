import React, {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            title:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            title : e.target.value
        })
        console.log(this.state.title);
    };

    handleSubmit(e){
        if(this.state.title === ""){
            e.preventDefault();
            alert("Enter a Title For Your Note");
        }
        else{
            this.props.addNote(this.state.title);
        }
    }


    render() {
        return (
            <div className="submit">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form