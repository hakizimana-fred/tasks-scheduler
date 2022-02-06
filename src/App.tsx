import React, { useState, useEffect } from 'react'
import { Heading } from './components/Heading'
import './App.css'
import { Todos } from './components/Todos'

export default function App() {
  return (
    <>
      <Heading />
      <div className="container flex flex-col justify-between justify-center m-auto lg ">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">Your Daily Tasks</h2>
        <div className="mx-auto">
          <Todos />
        </div>
      </div>
    </>
  )
}
