import React, { Component } from 'react';

class GetWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let location = event.target.value;

    this.setState(function() {
      return {
        location: location 
      }
    }); 
  }
  render() {
    return (
      <div className={this.props.classes}>
        <form method="get" action="/forecast">
          <input
            id="location"
            placeholder="São José dos Campos, SP"
            type="text"
            autoComplete="off"
            name="location"
            value={this.state.location}
            className="form-control"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.location}>
              Buscar Clima
          </button>
        </form>
      </div>
    );
  }
}

export default GetWeather;
