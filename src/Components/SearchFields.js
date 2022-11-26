import React from "react";

const SearchFields = ({ theme }) => {
  return (
    <>
      <div className="input-fields">
        <input
          className={`${theme}-input-text`}
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search for a country"
        />

        <select
          className={`${theme}-region-option`}
          name="region"
          id="region-search"
          placeholder="Filter by region"
        >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
};

export default SearchFields;
