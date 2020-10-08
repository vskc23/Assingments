import React from 'react'
const names=['EShan','Tanish','James','Paul','George','Esha'];
const people=[
    {
        name:"Eshan",
        age:10
    },
    {
        name:"Tanish",
        age:20
    },
    {
        name:"Manish",
        age:30
    },
    {
        name:"CHiku",
        age:40
    }
]
// function App3(){
//     return (
//         <div>
//             <h1>NAME FILTER</h1>
//             {
//             names.filter(name=>name.includes('T')).map(filteredName=>(
//                 <li>
//                     {filteredName}
//                 </li>    
//             )) }
//             <br></br>
//             <h1>AGE FILTER</h1>
//             {people.filter(person=>person.age>=30).map(filteredPerson=>(
//                 <li>
//                     {filteredPerson.name}
//                 </li>
//             ))}
//         </div>
//     )
// }

// export default App3;
class App3 extends React.Component
{
    render(){
    return (
        <div>
            <h1>NAME FILTER</h1>
            {
            names.filter(name=>name.includes('T')).map(filteredName=>(
                <li>
                    {filteredName}
                </li>    
            )) }
            <br></br>
            <h1>AGE FILTER</h1>
            {people.filter(person=>person.age>=30).map(filteredPerson=>(
                <li>
                    {filteredPerson.name}
                </li>
            ))}
        </div>
    )
            }
}

export default App3;