import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom';

const Bookcaar = () => {

  const params = useParams()
  console.log(params.id)
  return (
    <Fragment>
  <div className="main">
    <form action="#">
     <Link to={`/order?age=20&marks=5`}>Hello </Link>
     <h3>{params.id}</h3>
     
    </form>
  </div>
    </Fragment>
  )
}

export default Bookcaar;