import React from 'react'

export function FormLogin() {
  return (
    <div className='w-80  '>
      <h2 className='font-bold text-center text-lg mb-4'>login</h2>

      <div className='bg-white shadow-md rounded-md p-4 space-y-4'>
        <div>
          <label 
          className='block text-base text-gray-800 mb-1'
          htmlFor="email">E-mail:</label>
          <input 
          placeholder='digite seu email'
          className= ' bg-zinc-100 hover:bg-zinc-50 w-full  border border-gray-300 focus:border-blue-500 rounded px-2 py-1 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-150 ease-out hover:ease-in'
          type="text" id='email' />
          
        </div>
        <div>
          <label 
          className='block text-base text-gray-800 mb-1'
          htmlFor="password">Senha:</label>
          <input
          placeholder='digite sua senha'
          className='bg-zinc-100 hover:bg-zinc-50 w-full  border border-gray-300 focus:border-blue-500 rounded px-2 py-1 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-150 ease-out hover:ease-in'
           type="password" id='password' />
        </div>
        <div className>
          <button className='w-full text-sm bg-blue-500 hover:bg-blue-600 transition duration-150 ease-out hover:ease-in px-4 py-1 rounded text-white shadow '>
            entrar
          </button>
        </div>
      </div>
    </div>
  )
}
