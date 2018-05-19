import React from 'react';
import {emojify} from 'react-emojione';

export default class OrderHistoryIndividualItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrool: false
    };
  }
  
  handleClick() {
    alert('Drool!', this.props.name);
  }

  handleMouseOver() {
    this.setState({
      showDrool: true
    });
  }


  handleMouseLeave() {
    this.setState({
      showDrool: false
    });
  }

  renderDrool() {
    const drool = <span onClick={this.handleClick.bind(this)} >{emojify('🤤')}</span>;

    return this.state.showDrool ? drool : <div></div>;
  }

  renderItem(name) {
    return (
      <div 
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >{name} {renderDrool()}</div>
    );

  }

  render() {
    const { name, likes } = this.props;
    return(
    <div className="OrderHistoryIndividualItem" onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} >
      <p><strong>{name}</strong></p> {this.renderDrool()}
    </div>

    );
  }
}
