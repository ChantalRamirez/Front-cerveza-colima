import React from 'react';
import './styles/ProductNew.css';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';
import Layout from '../components/Layout';

class ProductNew extends React.Component {
  state = { form: {
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    twitter:'',
  }};

  handleChange = e =>{
    this.setState ({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Layout>
        <React.Fragment>
         <div className="BadgeNew__hero">
          <div className="Badges__container">
            <h3>New product</h3>
          </div>
        </div>
          <div className="container">
            <div className="row">
             <div className="col-6">
               <Product
                  firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  twitter={this.state.form.twitter}
                  jobTitle={this.state.form.jobTitle}
                  email={this.state.form.email}
                  avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                />
             </div>
             <div className="col-6">
               <ProductForm 
                onChange= {this.handleChange}
                formValues={this.state.form} 
                />
             </div>
            </div>
          </div>
        </React.Fragment>
      </Layout>
    ); 
  }
}

export default ProductNew;
