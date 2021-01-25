import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed"> Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="First and Last"
          id="breed"
        />
        </div>
        <div className="form-group">
        <label htmlFor="breed" > Email:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder=""
          id="breed"
        />
        </div>
        <div className="form-group">
        <label htmlFor="breed" > Message:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder=""
          id="breed"
        />
        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
