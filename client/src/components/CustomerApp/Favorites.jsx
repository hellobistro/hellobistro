// Import dependencies
import React from 'react';
import { emojify } from 'react-emojione';
import ApiService from '../../services/ApiService';

// Import CSS
import '../../styles/Favorites.css';

// Import Components
import FavoritesIndividualItem from './FavoritesIndividualItem';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rated: [],
      unrated: [],
      userId: null,
    };
  }

  componentDidMount() {
    ApiService.getUserLikes(5).then((data) => {
      this.setState({
        rated: data.rated,
        unrated: data.unrated,
        userId: data.userId,
      });
    });
  }

  handleIncrement(userId, itemId) {
    ApiService.incrementRating(userId, itemId).then((data) => {
      this.setState({
        rated: data.rated,
        unrated: data.unrated,
        userId: data.userId,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  renderDrool() {
    const drool = <span className="drool" onClick={this.handleClick} ><span>{emojify('🤤')}</span></span>;

    return drool;
  }

  renderLikedItems() {
    return (
      <div className="rated-items">
        { this.state.rated.map((item) => (
            <FavoritesIndividualItem handleIncrement={this.handleIncrement.bind(this)} userId={this.state.userId} {...item} />
          ))}
      </div>
    );
  }

  renderUnratedItems() {
    return (
      <div className="unrated-items">
        { this.state.unrated.map((item) => (
            <div>
              <p>{item.name}</p>
              <p>{item.restaurant}</p>
              <p>{item.likes} likes</p>
            </div>
          ))}
      </div>
    );
  }

  render() {
    return (
      <div className="Favorites">
        <h2 id="header">Your favorite items:</h2>
        <p id="sub-header">Click the {emojify('🤤')} next to any item to like it even more!</p>
        { this.state.rated ? this.renderLikedItems() : <div>No Liked Items</div> }

        <h2 id="header">Other items:</h2>
        { this.state.renderUnratedItems }

      </div>
    );
  }
}
