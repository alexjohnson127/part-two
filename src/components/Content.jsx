import Part from "./Part"

export default function Content(props){
   
    
    return (
        <>
            <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
            <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
            <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
        </>
    )
}