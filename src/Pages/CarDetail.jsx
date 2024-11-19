import React from 'react'
import { Fragment } from 'react'
import { useLocation,Link } from 'react-router-dom'

const CarDetail = () => {
  const location = useLocation()
  console.log(location)

  return (
    <Fragment>

      <h1>name :{location.state.nam}</h1>
            <h1>age : {location.state.descrip} </h1>

      <div className="main" style={{ display: "flex", justifyContent: "center", backgroundColor: 'gray', height: "90vh" }}>
        <div className="con" style={{ height: "auto", width: "500px", backgroundColor: "black" }}>
          <img src={location.state.img} alt="" style={{ height: "50vh", width: "100%" }} />
          <h2  style={{color:"white"}}>{location.state.nam}</h2>
          <h5 style={{color:"white"}}>{location.state.descrip}</h5>
          <div className="btn" style={{ display: "flex", justifyContent: "center" }}>
         <Link to={`/form/${location.state.id}`}> <button style={{ padding: "10px 30px",borderRadius:"30px", border:"none",cursor:"pointer",  fontSize:"20px" }} >By now</button></Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CarDetail