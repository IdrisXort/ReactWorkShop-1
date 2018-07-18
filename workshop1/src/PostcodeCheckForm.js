import React from 'react';

class PoctcodeCheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', isPostcodeValid: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var url=`http://localhost:50740/WarmteWinnerCheck/postcode/${this.state.value}`
    fetch(url)
    .then((resp) => resp.json()) 
    .then((data) => {
      this.setState( {isPostcodeValid: data.canGetWarmteWinner })
    }
    // TODO CATCH
    
  )
    
   // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        {this.state.isPostcodeValid && <div className="mess">HOORAY!!!</div>}
      </form>
    );
  }
}
export default PoctcodeCheckForm;