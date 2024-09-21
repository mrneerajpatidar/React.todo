import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />
  );
}

export default SearchBar;