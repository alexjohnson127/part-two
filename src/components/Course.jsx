import Content from './Content.jsx'
import Header from './Header.jsx'
import Part from './Part.jsx'
import Total from './Total.jsx'

export default function Course({course}){
    const total = course.parts.reduce((s,p) => s+p.exercises,0)
    return (
    <>
        <Header course={course} />
        {course.parts.map(p => <Part part={p.name} exercise={p.exercises} key={p.id}/>)}
        <Total total={total} />
    </>
    )
}