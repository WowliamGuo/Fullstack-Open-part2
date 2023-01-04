const Header = (name) => (
    <h1> {name.name} </h1>
)

const Part = (part) => (
    <>
        <p>{part.content}: {part.num}</p>
    </>
)

const Course = ( {course} ) => {
    //console.log(course)
    const parts  = course.parts

    return(
        <>
            <Header name = {course.name}/>
            {parts.map(part => <Part content = {part.name} num = {part.exercises} key = {part.id} />)}
            <strong> Total number of exercises is {parts.reduce(function(sum, part)
                {return sum + part.exercises}, 
            0)} </strong>
        </>
    )
}

export default Course