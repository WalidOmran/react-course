import { useState } from 'react';
import {foods, FilterItems} from './foods';
import SearchBar from './SearchBar';
import List from './List';
export default function FilterableList()
{
    const [query, setQuery] = useState('');
    function handleChange(e)
    {
        setQuery(e.target.value);
    }
    return (
        <>
            <SearchBar onChange={handleChange} query={query} />
            <hr />
            {
                (query === '') ? 
                <List items={foods}/> :
                <FilterItems query={query}  />
            }
        </>
    );
}



