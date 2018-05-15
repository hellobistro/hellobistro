import React from 'react';
import '../../styles/MenuManager.css';
import AuthService from '../../services/AuthService';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  shouldComponentUpdate(nextProps) {
    return (this.props !== nextProps);
  }

  imageUpload = (e) => {
    this.refs.imageUploader.click();
  }

  _onChange = () => {
    var file = this.refs.imageUploader.files[0];
    console.log('the fileee:  ', file)
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);

    var data = new FormData()
    data.append('file', file)
    //console.log('the urlll:  ', url)

    fetch('http://localhost:3000/upload', {
      method: "POST",
      //headers: {'Content-Type': 'multipart/form-data'},
      //form: data
      body: data
    });
    //  reader.onloadend = function (e) {
    //     this.setState({
    //         imgSrc: [reader.result]
    //     })
    //   }.bind(this);
    // console.log('the urllll:  ', url) 
  }
  

  render() {
    const others = ['vegan', 'vegetarian', 'glutenFree', 'spicy'];
    const { sectionIndex, itemIndex, inputChange, data } = this.props;
    const img = data.image ? <img className="item-image" src={data.image} alt="food" /> : <div className="no-image" onClick={this.imageUpload}><span>Upload image.</span><input type="file" accept="image/*" ref="imageUploader" style={{display: "none"}} onChange={this._onChange}/></div>;
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
      description: <div className="item-input-div description"><i className="material-icons manager-icons description">format_align_justify</i><textarea
        className="item-input"
        name="description"
        type="text"
        placeholder="Description about food item"
        defaultValue={data.description}
        maxLength="255"
        rows="1"
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
                  <select className="option-select" name={attr} value={data[attr] === null ? "null" : data[attr]} onChange={(e)=>{
                      inputChange(sectionIndex, itemIndex, e)}} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    <option value="null">N/A</option>
                  </select>
                       </div>)),
      status: <div className="item-input-div status"><select 
      className="status"
      name="status"
      value={data.status}
      onChange={(e) => { inputChange(sectionIndex, itemIndex, e); }}
      >
        <option value="published">Published</option>
        <option value="unavailable">Item Unavailable</option>
        <option value="draft">Draft</option>
        <option value="delete">Delete permanently</option>
      </select>
      </div>,
    };

    return (
      <div className="form-group menu-manager-item">
        <div className="item-header">
          {render.status}
          {img}
        </div>
        {render.name}
        {render.description}
        {render.price}
        {render.prepTime}
        <div className="item-specs">
          {render.nutriFacts}
        </div>
       
      </div>
    );
  }
}

export default MenuItem;
