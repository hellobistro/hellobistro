import React from 'react';

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
    const others = ["vegan", "vegetarian", "glutenFree", "spicy" ]
    const { sectionIndex, itemIndex, inputChange, data } = this.props
    const img = data.image ? <img className="item-image" src={data.image} alt="food" /> : <div className="no-image">No image available</div>;
    const render = {
      name: <div>
              <p>Item Name:</p>
              <input className="form-input"
                name="name"
                type="text"
                defaultValue={data.name}
                onChange={(e)=>{
                  inputChange(sectionIndex, itemIndex, e)}} />
            </div>,
      price: <div>
              <p>Price:</p>
              <input className="form-input"
                name="price"
                type="text"
                defaultValue={data.price}
                onChange={(e)=>{
                  inputChange(sectionIndex, itemIndex, e)}} />
             </div>,
      prepTime: <div>
                  <p>Preparation Time(minutes):</p>
                  <input className="form-input"
                    name="prepTime"
                    type="text"
                    defaultValue={data.prepTime}
                    onChange={(e)=>{
                      inputChange(sectionIndex, itemIndex, e)}} />
                </div>,
      nutriFacts: others.map((attr, i) => {
               return (<div key={i} className="nutri-fact">
                  <p>{attr}:</p>
                  <select name={attr} value={data[attr] === null ? "null" : data[attr]} onChange={(e)=>{
                      inputChange(sectionIndex, itemIndex, e)}} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    <option value="null">N/A</option>
                  </select>
                </div>)
      }),
      status: <select name="status" value={data.status} 
                  onChange={(e)=>{inputChange(sectionIndex, itemIndex, e)}}>
                <option value="published">Published</option>
                <option value="unavailable">Item Unavailable</option>
                <option value="draft">Draft</option>
                <option value="delete">Delete permanently</option>
              </select>
    };

    return (
      <div className="form-group">
        {render.name}
        {render.price}
        {render.prepTime}
        {render.nutriFacts}
        {render.status}
        {img}
      </div>
    );
  }
}

export default MenuItem;
