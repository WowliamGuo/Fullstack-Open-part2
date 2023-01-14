
const Filter = ( {newFilter, setNewFilter} ) => {
    
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
      }

    return (
        <ul>
            filter <input value = {newFilter} onChange = {handleFilterChange} />
        </ul>
    )
}


export default Filter