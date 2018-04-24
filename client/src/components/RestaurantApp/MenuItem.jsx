import React from 'react';

const MenuItem = ({ data }) => {
  const options = {
    published: <select><option selected disabled>Options...</option><option value="edit">Edit</option><option value="unavailable">Mark as unavailable</option><option value="hide">Remove from menu</option><option value="delete">Delete permanently</option></select>,
    draft: <select><option selected disabled>Options...</option><option value="edit">Edit</option><option value="publish">Publish to menu</option><option value="delete">Delete permanently</option></select>,
    unvailable: <select><option selected disabled>Options...</option><option value="edit">Edit</option><option value="available">Mark as available</option><option value="hide">Remove from menu</option><option value="delete">Delete permanently</option></select>,
  };

  const img = data.image ? <img className="item-image" src={data.image} alt="food" /> : <div className="no-image">No image available</div>;

  return (
    <div className="menu-item">
      <p>This is a <strong>Menu Item</strong> component</p>
      <h3>{data.name} - ${data.price}</h3>
      <p>Status: {data.status}</p>

      {options[data.status]}
      {img}
    </div>
  );
};

export default MenuItem;
