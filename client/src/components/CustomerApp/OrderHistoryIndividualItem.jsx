// import React from 'react';
// import {emojify} from 'react-emojione';

// export default class OrderHistoryIndividualItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showDrool: false
//     };
//   }
  
//   handleClick() {
//     alert('Drool!', this.props.name);
//   }

//   handleMouseOver() {
//     this.setState({
//       showDrool: true
//     });
//   }


//   handleMouseLeave() {
//     this.setState({
//       showDrool: false
//     });
//   }

//   renderDrool() {
//     const drool = <span onClick={this.handleClick.bind(this)} >{emojify('🤤')}</span>;

//     return this.state.showDrool ? drool : <div></div>;
//   }

//   renderItem(name) {
//     return (
//       <div 
//         onMouseOver={handleMouseOver}
//         onMouseLeave={handleMouseLeave}
//       >{name} {renderDrool()}</div>
//     );

//   }

//   render() {
//     const { name, likes } = this.props;
//     return(
//     <div className="OrderHistoryIndividualItem" onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} >
//       <p><strong>{name}</strong></p> {this.renderDrool()}
//     </div>

//     );
//   }
// }


import React from 'react';
import { emojify } from 'react-emojione';

import '../../styles/Favorites.css';

export default class OrderHistoryIndividualItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBounce: false,
    };
  }

  handleClick() {
    const { userId, itemId } = this.props;

    this.setState({
      showBounce: true,
    });
    const context = this;
    setTimeout(() => {
      context.setState({
        showBounce: false,
      });
    }, 500);
    this.props.handleIncrement(userId, itemId);
  }

  renderDrool() {
    const drool = (
      <span className="drool" onClick={this.handleClick.bind(this)}>{emojify('🤤')}</span>
    );
    const droolBounce = (
      <span className="drool-bounce" onClick={this.handleClick.bind(this)}>{emojify('🤤')}</span>
    );

    return this.state.showBounce ? droolBounce : drool;
  }

  renderItem(name) {
    return (
      <div>
        {name} {this.renderDrool()}
      </div>
    );
  }

  render() {
    const { name, likes, restaurant, rating } = this.props;
    console.log('sfssdfsdf', this.props);
    return (
      <div className="FavoritesIndividualItem">
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>{rating}</strong> hungry people {this.renderDrool()} this dish
        </p>
        <p>
          
        </p>
        <img src="{image}"/>
      </div>
    );
  }
}
