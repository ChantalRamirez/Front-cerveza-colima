import React from 'react';
import './styles/ProductsList.css';
import twitterIcon from '../images/twitter-3.svg'

class ProductsListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.product.avatarUrl}
          alt={`${this.props.product.firstName} ${this.props.product.lastName}`}
        />
        <div className="BadgesListItem__details">
          <h5>
            {this.props.product.firstName} {this.props.product.lastName}
          </h5>
          <p className="item-twitter">
          <img
          src={twitterIcon}
          alt="twitter"
          className="item-twitter__icon" 
          />
              @{this.props.product.twitter}
          </p>
          {this.props.product.jobTitle}
        </div>
      </div>
    );
  }
}

class ProductsList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.products.map(product => {
            return (
              <li key={product.id}>
                <ProductsListItem product={product} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
