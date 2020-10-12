import React from 'react';

class ProductForm extends React.Component {
   handleClick = e => {
    console.log('Button was clicked');
   };

   handleSubmit = e => {
     e.preventDefault();
     console.log('Form was submitted');
     console.log(this.state);
   };

  render() {
    return (
      <div>
        <h1>Crea tu propia cerveza</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>  
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Lugar</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="email"
                name="email"
                value={this.props.formValues.email}
              />
          </div>
          <div className="form-group">
            <label>Cliente</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Fecha de creación</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="twitter"
                value={this.props.formValues.twitter}
              />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Crear
          </button>
        </form> 
      </div>
    );
  }
}

export default ProductForm;
