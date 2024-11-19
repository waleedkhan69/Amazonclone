import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Order = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get('age'))
    const marks = (searchParams.get('marks'))

    const handleClick  = ()=>{
        searchParams.set('class', 10)
        setSearchParams(searchParams)
    }

  return (
    <>
    {marks}
    <div>Order</div>
    <button onClick={()=>handleClick()}>Ali</button>
    </>
  )
}

export default Order