import React, { useState, useEffect } from 'react';
import data from './data/datas.json';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredData([]);
            return;
        }

        const filteredResults = data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredResults);
    }, [searchQuery]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        console.log("Recherche soumise :", searchQuery);
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <button type="submit">Rechercher</button>
            </form>

            { }
            {searchQuery && (
                <ul>
                    {filteredData.map(item => (
                        <li key={item.id}>{item.name}</li>))}

                </ul>
            )}
        </div>
    );
}

export default SearchBar;
