import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import ShowPersons from './components/ShowPersons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newFilter, setNewFilter] = useState('')

  return (
    <>
      <h2>Phonebook</h2>
        <Filter newFilter = {newFilter} setNewFilter = {setNewFilter}/>

      <h2> Add New </h2>
        <Form persons = {persons} setPersons = {setPersons} />

      <h2>Numbers</h2>
        <ShowPersons persons = {persons} newFilter = {newFilter} />
    </>
  )

}


export default App