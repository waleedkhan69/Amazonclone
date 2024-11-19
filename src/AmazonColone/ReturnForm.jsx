import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const ReturnForm = () => {
  return (
    <Fragment>
     
       <div className="mian flex justify-center h-[90vh]  items-center">
    
       
        <div className='flex  flex-col justify-center items-center h-[100vh]'>
       
        <img src="/Amfrom.webp" alt="" className='w-40 h-auto' />
        <form action="#" className=' rounded p-2 w-[40%] border-black gap-3 flex flex-col border-2'>
      <h1 className='text-2xl font-semibold'>Anmelden</h1>
          <div className="btn flex flex-col">
            <p className='font-bold'>E-Mail-Adresse oder Mobiltelefonnummer</p>
          <input type="Email"  placeholder='Enter email'/>
          <button className='bg-yellow-300 rounded-xl p-2'>Weiter</button>
          </div>
          <p>Wenn Sie fortfahren, erklären Sie sich mit den
            <span>Nutzungsbedingungen und der Datenschutzerklärung</span>
            von Amazon einverstanden.
          </p>
          <summary>Benötigst du Hilfe?
            <details>Passwort vergessen
            Sonstige Probleme mit der Anmeldung</details>
          </summary>
        </form>
       <div className='bg-red w-[40%] justify-center flex flex-col'>
       <div className='flex justify-center'> <hr /><p>Neu bei Amazon?</p> <hr /></div>
       <button className='rounded-lg shadow-lg border-2 py-2 mt-2'>Dein Amazon Konto erstellen</button>
       </div>
            <div className='flex justify-between gap-7 mt-7 text-blue-700  '>
                <Link className='hover:text-yellow-500 hover:border-b-2 border-yellow-500'>Unsere AGB </Link>
                <Link className='hover:text-yellow-500 hover:border-b-2 border-yellow-500'>Unsere AGB </Link>
                <Link className='hover:text-yellow-500 hover:border-b-2 border-yellow-500'>Unsere AGB </Link>
            </div>
            <div className='mt-4'>
            <p>© 1996-2024, Amazon.com, Inc. oder Tochtergesellschaften</p>
        </div>
        </div>
       
       </div>
    </Fragment>
  )
}

export default ReturnForm