function SearchBar({query , onChange})
{
    // const [query, setQuery] = useState(query);
    // function handleChange(e)
    // {
    //     setQuery(e.target.value);
    // }
    return (
     <label>
            Search: {' '}
            <input 
                type="text" 
                value={query}
                onChange={onChange} 
            />
     </label>
    );
}
export default SearchBar