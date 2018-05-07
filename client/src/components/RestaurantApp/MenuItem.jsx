import React from 'react';
import '../../styles/MenuManager.css';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  shouldComponentUpdate(nextProps) {
    return (this.props !== nextProps);
  }

  render() {
    const others = ['vegan', 'vegetarian', 'glutenFree', 'spicy'];
    const { sectionIndex, itemIndex, inputChange, data } = this.props;
    const img = data.image ? <img className="item-image" src={data.image} alt="food" /> : <div className="no-image">No image available</div>;
    const render = {
      name: <div className="item-input-div name"><input
        className="item-input"
        name="name"
        type="text"
        defaultValue={data.name}
        placeholder="Item name."
        onChange={(e) => { inputChange(sectionIndex, itemIndex, e); }}
      />
      </div>,
      price: <div className="item-input-div price"><i className="material-icons manager-icons">attach_money</i><input
        className="item-input"
        name="price"
        type="text"
        placeholder="$"
        defaultValue={data.price}
        onChange={(e) => { inputChange(sectionIndex, itemIndex, e);}}
      />
      </div>,
      prepTime: <div className="item-input-div prep"><i className="material-icons manager-icons">timer</i><input
          className="item-input"
          name="prepTime"
          type="text"
          placeholder="Estimated item prep time (in minutes)."
          defaultValue={data.prepTime}
          onChange={(e) => { inputChange(sectionIndex, itemIndex, e); }}
        />
      </div>,
      nutriFacts: others.map((attr, i) => (<div key={i} className="nutri-facts">
                  <p className="option-name">{attr}:</p>
                  <select calssName="option-select" name={attr} value={data[attr] === null ? "null" : data[attr]} onChange={(e)=>{
                      inputChange(sectionIndex, itemIndex, e)}} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    <option value="null">N/A</option>
                  </select>
                       </div>)),
      status: <div className="item-input-div status"><select
name="status"
value={data.status}
        onChange={(e) => { inputChange(sectionIndex, itemIndex, e); }}
      >
        <option value="published">Published</option>
        <option value="unavailable">Item Unavailable</option>
        <option value="draft">Draft</option>
        <option value="delete">Delete permanently</option>
      </select></div>,
    };

    return (
      <div className="form-group menu-manager-item">
        {render.status}
        {render.name}
        {render.price}
        {render.prepTime}
        <div className="item-specs">
          {render.nutriFacts}
        </div>
        {img}
      </div>
    );
  }
}

export default MenuItem;
