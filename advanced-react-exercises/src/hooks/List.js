import React, { useState } from 'react';
import ListItem from './components/ListItem';

const List = () => {
    const [listItems, setListItems] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e) => setInput(e.currentTarget.value);

    const handleClick = () => {
        setListItems([...listItems, input]);
        setInput("");
    }
    return (
        <>
            <h4>My List:</h4>
            <ul className="list-group">
                { listItems.map((value, index) => (
                    <ListItem key={ index } content={ value }/>
                ))}
            </ul>
            <div className="form-group">
                <label
                    htmlFor="text"
                >
                    Add to the list:
                </label>
                <input
                    className="form-control p-2 m-2"
                    type="text"
                    name="text"
                    onChange={ handleChange }
                    value={ input }
                >
                </input>
            </div>
            <button 
                className="btn btn-success ml-2"
                onClick={ handleClick }
            >
                Add
            </button>
        </>
    );
}

export default List;