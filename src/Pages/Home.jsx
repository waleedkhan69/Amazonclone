// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { arr} from '../data/Array'

// const Home = () => {
//     const [name, setName] = useState('')

  

//     const navigate = useNavigate()
//     const handleClick = (i) => {
//         console.log(i)
//         navigate("/about", { state: { goingArray:arr[i] } })
//     }
//     return (
//         <div>
//             <button  >

//                 about
//             </button>

//             {arr.map((item,i)=>(
//                 <h1 onClick={() => handleClick(i)}>{item.name}</h1>
//             ))}
//         </div>
//     )
// }

// export default Home