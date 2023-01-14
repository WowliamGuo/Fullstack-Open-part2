import { useState } from 'react'

const Form = ( {persons, setPersons} ) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }

      const addPerson = (event) => {
        event.preventDefault()
    
        const person = {
          name: newName,
          number: newNumber,
        }
    
        let isDupe = false
    
        for(let i = 0; i < persons.length; i++){
    
          if(persons[i].name === person.name){
            isDupe = true
          }
    
        }
    
        if(isDupe){
          alert(`${newName} is already added to phonebook`)
        }else{
    
          setNewName('')
          setNewNumber('')
    
          setPersons(persons.concat(person))
          console.log(person)
    
        }
        
      }


      return (
        <form onSubmit = {addPerson}>

            <div>
            name: <input value = {newName} onChange = {handleNameChange}/>
            <br />
            number: <input value = {newNumber} onChange = {handleNumberChange} />
            </div>

            <div>
            <button type='submit'>add</button>
            </div>

        </form>
      )

}



export default Form