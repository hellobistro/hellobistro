import React from 'react';
import MenuItem from './MenuItem';
import ApiService from '../../services/ApiService';

class MenuSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
    let {name, description, MenuItems} = this.props.data;
    let itemCount = 0;
    for(let i = 0; i < MenuItems.length; i++){
      if(MenuItems[i].status === 'published' || MenuItems[i].status === 'draft'){
        itemCount++;
      }
    }
    this.setState({ name, description, itemCount, hasChanged: false });
  }

  updateCount = (num) => {
    this.setState({itemCount: this.state.itemCount + num});
  }

  addItem = () => {
    let {RestaurantId, id} = this.props.data;
    let itemTemplate = {
      MenuSectionId: id,
      RestaurantId,
      glutenFree: null,
      id: null,
      image: null,
      name: null,
      prepTime: null,
      price: null,
      spicy: null,
      vegan: null,
      vegetarian: null,
    }
    this.props.data.MenuItems.push(itemTemplate);
    this.updateCount(1);
    this.forceUpdate();
  }

  inputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, hasChanged: true })
  }

  updateMenuSection = () => {
    let {RestaurantId, id} = this.props.data;
    ApiService.updateMenuSection(RestaurantId, id, this.state)
      .then((res) => {
        console.log('successfully updated the menuSection ', res)
        this.setState({hasChanged: false})
      })
  }

  render() {
    const { data, deleteSection, indx } = this.props;
    const items = this.state.itemCount > 1 ? data.MenuItems.map((item, i) =>  (<MenuItem key={i} data={item} updateCount={this.updateCount} />)) : <div className="empty-section"><h4>This menu section is empty.</h4><button className="menu-section-button delete" onClick={() => {deleteSection(indx)}}> Delete Section </button></div>;
    return (
      <div className="form-section">
        <div className="section-header">
          <div>
            <i className="material-icons manager-header-icon">label_important</i>
            <input
              className="form-input section-name"
              name="name"
              type="text"
              placeholder="Add your menu section name here."
              defaultValue={data.name}
              maxLength="255"
              onChange={this.inputChange}
            />
          </div>
          {
            this.state.hasChanged
            ? <button className="menu-section-button save" onClick={this.updateMenuSection}> Save Changes </button>
            : null
          }
          <textarea
            className="form-input section-description"
            name="description"
            type="text"
            defaultValue={data.description}
            placeholder="Add a section description here (not required)."
            maxLength="255"
            rows="1"
            onChange={this.inputChange}
          />
        </div>
        <div className="section-content">
          {items}
        </div>
          <button className="item-button" onClick={this.addItem}><i className="material-icons manager-icons">add_box</i>Add {data.name} item</button>
      </div>
    );
  }
};

export default MenuSection;
