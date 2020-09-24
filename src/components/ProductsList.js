import React from 'react';

import './styles/BadgesList.css';
import twitterIcon from '../images/twitter-3.svg'

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div className="BadgesListItem__details">
          <h5>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </h5>
    
          <p className="item-twitter">
          <img
          src={twitterIcon}
          alt="twitter"
          className="item-twitter__icon" 
          />
              @{this.props.badge.twitter}
          </p>
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
