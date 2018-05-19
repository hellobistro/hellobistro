import React from "react";
import { emojify } from "react-emojione";
import ApiService from "../../services/ApiService";

import '../../styles/Favorites.css';

export default class FavoritesIndividualItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDroolMessage: false,
      showBounce: false,
    };
  }

  handleClick() {
    const { userId, itemId } = this.props;

    this.setState({
      showBounce: true
    });
    let context = this;
    setTimeout(() => {
      this.setState({
        showBounce: false
      });
    }, 500).bind(this);
    this.props.handleIncrement(userId, itemId);
  }

  handleMouseOver() {
    this.setState({
      showDroolMessage: true
    });
  }

  handleMouseLeave() {
    this.setState({
      showDroolMessage: false
    });
  }

  renderDrool() {
    const drool = (
      <span className="drool" onClick={this.handleClick.bind(this)}>{emojify("🤤")}</span>
    );
    const droolBounce = (
      <span className="drool-bounce" onClick={this.handleClick.bind(this)}>{emojify("🤤")}</span>
    );

    return this.state.showBounce ? droolBounce : drool;
  }

  renderItem(name) {
    return (
      <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {name} {renderDrool()}
      </div>
    );
  }

  render() {
    const { name, likes, restaurant } = this.props;
    return (
      <div
        className="FavoritesIndividualItem"
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <p>
          <strong>{name}</strong> from {restaurant}
        </p>
        <p>
          <strong>{this.props.likes}</strong> {this.renderDrool()} { this.state.showDroolMessage ? 'Click' : ''}
        </p>
      </div>
    );
  }
}
