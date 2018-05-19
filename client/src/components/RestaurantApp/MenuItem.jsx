import React from 'react';
import '../../styles/MenuManager.css';
import AuthService from '../../services/AuthService';
import ApiService from '../../services/ApiService';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentWillReceiveProps (props){
  //   this.setState({data: props.data, hasChanged: false}) // This will update your component.
  //  }

  componentWillMount() {
    let data = this.props.data;
    this.setState({ data, hasChanged: false })
  }

  componentDidMount() {
  }

  imageUpload = (e) => {
    this.refs.imageUploader.click();
  }

  _onChange = (itemId) => {
    var file = this.refs.imageUploader.files[0];
    var formData = new FormData()
    formData.append('file', file)

    fetch(`http://localhost:3000/upload/${itemId}`, {
      method: 'POST',
      body: formData
    }).then((res) => {
      return res.json()
    }).then(res => {
      console.log('the res after uploaddd: ', res)
      let url = res.data.Location;
      let data = this.state.data;
      data.image = url
      this.setState({data, hasChanged: true})
    })
    .catch((err)=>{
      console.log('error uploading: ', err)
    }); 
  }

  removePhoto = () => {
    let data = this.state.data
    data.image = null
    this.setState({data, hasChanged: true})
  }

  toggleSlider = (e) => {
    let data = this.state.data
    data.status = data.status === 'published' ? 'draft' : 'published',
    this.setState({
      data, 
      hasChanged: true,
    });
  }

  inputChange = (e) => {
    let name = e.target.name;
    let value;
    if (name === "name" || name === "status") {
      value = e.target.value
    } else if(typeof JSON.parse(e.target.value) === "number" || typeof JSON.parse(e.target.value) === "boolean") {
      value = JSON.parse(e.target.value)
    } else {
      value = null;
    }
    let data = this.state.data;
    data[name] = value;
    this.setState({ data, hasChanged: true})
  }

  updateItem = () => {
    const { RestaurantId, id } = this.state.data
    ApiService.updateMenuItem(RestaurantId, id, this.state.data)
      .then((updatedItem) => (
        this.setState({hasChanged: false})
      )).catch(err => 
        console.log('error updating item', err)
      )
  }

  deleteItem = () => {
    let data = this.state.data;
    data.status = 'archived'
    const { RestaurantId, id } = this.state.data
    this.setState({ data }, () => {
        this.props.updateCount(-1);
        ApiService.updateMenuItem(RestaurantId, id, this.state.data)
      }
    )
  }

  render() {
    const others = ['vegan', 'vegetarian', 'glutenFree', 'spicy'];
    const { id, status, name, image, price, prepTime, vegan, vegetarian, glutenFree, spicy } = this.state.data
    const img = <div className='image-container'>
                {
                  image
                  ? <div className='image-wrapper'>
                      <img onClick={this.imageUpload} className='item-image' src={image} alt='food' />
                      <div className='remove-photo-button'>
                        <button onClick={this.removePhoto}>Remove photo</button>
                      </div>
                    </div> 
                  : <span className='no-image' onClick={this.imageUpload}>Upload image.</span>
                }
                  <input type='file' accept='image/*' ref='imageUploader' style={{display: 'none'}} 
                    onChange={()=>{this._onChange(id)}}/>
                </div>;
    const render = {
      name: <div className='item-input-div name'><input
        className='item-input'
        name='name'
        type='text'
        defaultValue={name}
        placeholder='Item name.'
        onChange={(e) => { this.inputChange(e); }}
      />
      </div>,
      price: <div className='item-input-div price'><i className='material-icons manager-icons'>attach_money</i><input
        className='item-input'
        name='price'
        type='text'
        placeholder='$'
        defaultValue={price}
        onChange={(e) => { this.inputChange(e); }}
      />
      </div>,
      // description: <div className='item-input-div description'><i className='material-icons manager-icons description'>format_align_justify</i><textarea
      //   className='item-input'
      //   name='description'
      //   type='text'
      //   placeholder='Description about food item'
      //   defaultValue={description}
      //   maxLength='255'
      //   rows='1'
      //   onChange={(e) => { this.inputChange(e); }}
      // />
      // </div>,
      prepTime: <div className='item-input-div prep'><i className='material-icons manager-icons'>timer</i><input
          className='item-input'
          name='prepTime'
          type='text'
          placeholder='Estimated item prep time (in minutes).'
          defaultValue={prepTime}
          onChange={(e) => { this.inputChange(e); }}
        />
      </div>,
      nutriFacts: others.map((attr, i) => (<div key={i} className='nutri-facts'>
                  <p className='option-name'>{attr}:</p>
                  <select className='option-select' name={attr} value={eval(attr) === null ? 'null' : eval(attr)}
                    onChange={(e) => { this.inputChange(e); }} >
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                    <option value='null'>N/A</option>
                  </select>
                       </div>)),
      status: 
              <div>
              <label className='switch'>
                <input type='checkbox' checked={status === 'published'} onChange={this.toggleSlider}/>
                <span className='slider round'></span>
              </label>
              {
                status === 'published'
                ? <div className='status-published'>Published</div>
                : <div className='status-draft'>Draft</div>
              }
              </div>,
      saveChanges:
              <button disabled={!this.state.hasChanged}
              onClick={this.updateItem}
              className="change-button save-changes-button">Save Changes</button>,
      deleteItem:
              <button className="change-button delete-item-button"
              onClick={this.deleteItem}>Delete Item</button>
    };
    return (
      <div>
        {this.state.data.status !== 'archived'
        ? <div className='form-group menu-manager-item'>
          <div className='item-header'>
            {render.status}
            {img}
          </div>
          {render.name}
          {/* {render.description} */}
          {render.price}
          {render.prepTime}
          <div className='item-specs'>
            {render.nutriFacts}
          </div>
          <div className="two-buttons">
            {render.saveChanges}
            <div className="divider"/>
            {render.deleteItem}
          </div>
        </div>
        : <div></div>
        }
      </div>
    );
  }
}

export default MenuItem;
