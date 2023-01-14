
const includes = (person, chars) => {
    return person.name.includes(chars)
  }

  
const ShowPersons = ( {persons, newFilter} ) => {

    const namesToShow = persons.filter(person => includes(person, newFilter))

    return(
        <>
            {namesToShow.map(person => <li key = {person.name}> {person.name} {person.number} </li>)}
        </>
    )

}

export default ShowPersons