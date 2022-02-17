import React from 'react'

import {Link} from 'react-router-dom'

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
		
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	
  handleChange(event) {
		this.setState({value: event.target.value});
		console.log(this.state)
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
				<Link to="/ariba">Ariba</Link>
      </form>
    );
  }
}

export default Formulario