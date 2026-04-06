import React from "react"
import { use } from "react"

function Sample(props) {
    const [name, setname]=useState("Pranav")
    const [age, setage]=useState(18)

    return(
        <div>
            <h2>Treanding report</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tempora maiores obcaecati rerum voluptas sequi est iure? Culpa esse laboriosam quis obcaecati minima provident adipisci accusamus magnam sed? Voluptatibus, voluptate.</p>
            <h3>{name}</h3>
            <p>Age: {age}</p>
             <button onClick={()=>setname("Pranav Dhiman")}>Change name</button>
             <button onClick={()=>setage(20)}>Change age</button>
        <button
            className="counter"
            onClick={() => props.setcount((Count) => Count + 1)}
        >
            Count is {props.Count}
        </button>
        
        </div>

    )
}
// class Sample extends React.Component {
//     constructor(props) {
//         // super(props) is used to call the constructor of the parent class which is React.Component
//         super(props)
//     }
//     render() { return(
//         <div>
//             <h2>Treanding report</h2>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tempora maiores obcaecati rerum voluptas sequi est iure? Culpa esse laboriosam quis obcaecati minima provident adipisci accusamus magnam sed? Voluptatibus, voluptate.</p>
//         <button
//             className="counter"
//             onClick={() => setcount((Count) => Count + 1)}
//         >
//             Count is {this.props.Count}
//         </button>
        
//         </div>

//     )
// }
// }
export default Sample