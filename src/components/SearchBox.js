import React from "react";

const SearchBox = ({searchinput, searchChange}) => {
    return (
        <div>
            <input
                className="pa3 ba b--yellow bg-lightest-blue"
                type='search' 
                placeholder='Search user' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;