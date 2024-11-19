import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import pic1 from "../Pages/car1.jpeg"
import pic2 from "../Pages/car2.jpeg"
import pic3 from "../Pages/car3.jpeg"
import pic4 from "../Pages/car4.jpeg"
import pic5 from "../Pages/car5.jpeg"

const Cars = () => {
  const navigate = useNavigate()
  
  
  useEffect(() => {
    
    if(localStorage.getItem("isAuth")==="true"){
        return
    }else{
      navigate("/local")
    }
 }, [navigate])
 
  

  const Array = [
    { id: "1 :", img: pic1, nam: "Civic", descrip: "The Honda Civic is a compact car known for its fuel efficiency, reliability, and modern design. It offers a comfortable ride with advanced safety features and a sleek, aerodynamic profile.", price: "$185000" },
    { id: "2 :", img: pic2, nam: "Land Curizer", descrip: "The Honda Civic is a compact car known for its fuel efficiency, reliability, and modern design. It offers a comfortable ride with advanced safety features and a sleek, aerodynamic profile.", price: "$185000" },
    { id: "3 :", img: pic2, nam: "Mercedize Benzs", descrip: "The Honda Civic is a compact car known for its fuel efficiency, reliability, and modern design. It offers a comfortable ride with advanced safety features and a sleek, aerodynamic profile.", price: "$185000" },
    { id: "4 :", img: pic3, nam: "Mercedize Benzs", descrip: "The Honda Civic is a compact car known for its fuel efficiency, reliability, and modern design. It offers a comfortable ride with advanced safety features and a sleek, aerodynamic profile.", price: "$185000" },
    { id: "5 :", img: pic4, nam: "Toyota", descrip: "The Honda Civic is a compact car known for its fuel efficiency, reliability, and modern design. It offers a comfortable ride with advanced safety features and a sleek, aerodynamic profile.", price: "$185000" },
    { id: "6 :", img: pic5, nam: "Sportage", descrip: "The Honda Civic is a compact car known for its fuel efficiency, reliability, and modern design. It offers a comfortable ride with advanced safety features and a sleek, aerodynamic profile.", price: "$185000" },
  ]

  const handlePageChange = (index) => {
    console.log(index)
    navigate("/detail", { state: Array[index] })
  }
  return (
    <Fragment>
      <h1>Types of cars</h1>
      <div className="main1" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

        {Array.map((item, index) => {
          return <div key={index} onClick={() => handlePageChange(index)} className="main " style={{ width: "200px", cursor: "pointer", height: "auto", }} >
            <div className="car" style={{ backgroundColor: "green" }}>

            </div>
            <div className="p" style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
              <h2> {item.id}</h2>

              <h3>  {item.nam}</h3>
            </div>


          </div>
        })}
      </div>
    </Fragment>
  )
}

export default Cars