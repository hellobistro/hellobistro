import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: false,
      editPrice: false,
      editStatus: false,
      editPhoto: false,
    };
  }

  toggleEdit(ref) {
    console.log('toggling edit view');
    this.setState({
      [ref]: !this.state[ref],
    });
  }

  handleChange(e) {
    console.log('changes logged to state', e.target.value)
  }


  handleSave(e, ref) {
    console.log('Post/Patch to database');
    // save to database
    this.toggleEdit(ref);
  }

  render() {
    const selectStatus = {
      published: <select><option selected value="published">Published</option><option value="unavailable">Item Unavailable</option><option value="draft">Draft</option><option value="delete">Delete permanently</option></select>,
      draft: <select><option value="published">Published</option><option value="unavailable">Item Unavailable</option><option selected value="draft">Draft</option><option value="delete">Delete permanently</option></select>,
      unavailable: <select><option value="published">Published</option><option selected value="unavailable">Item Unavailable</option><option value="draft">Draft</option><option value="delete">Delete permanently</option></select>,
    };

    const img = this.props.data.image ? <img className="item-image" src={this.props.data.image} alt="food" /> : <div className="no-image">No image available</div>;

    const render = {
      name: this.state.editName ? <div><input type="text" placeholder={this.props.data.name} onChange={(e) => { this.handleChange(e); }} onBlur={(e) => { this.handleSave(e, 'editName'); }} /><button onClick={() => this.toggleEdit('editName')}><span aria-labelledby="cancel" role="img">❌</span></button></div> : <h3 onClick={() => this.toggleEdit('editName')} >{this.props.data.name}</h3>,
      price: this.state.editPrice ? <div><input type="text" placeholder={this.props.data.price} onChange={(e) => { this.handleChange(e); }} onBlur={(e) => { this.handleSave(e, 'editPrice'); }} /><button onClick={() => this.toggleEdit('editPrice')}><span aria-labelledby="cancel" role="img">❌</span></button></div> : <p onClick={() => this.toggleEdit('editPrice')} >${this.props.data.price}</p>,
      status: selectStatus[this.props.data.status],
    };

    return (
      <div className="menu-item">
        {render.name}
        {render.price}
        {render.status}
        {img}
      </div>
    );
  }
}

export default MenuItem;
