import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import Modal from './Modal/Modal'
import { addTodo } from '../Redux/actions/TodoAction'

const currentDate = new Date().toISOString().substr(0, 10)
const currentTime = `${new Date().getHours()}: ${new Date().getMinutes()}`

// eslint-disable-next-line react/function-component-definition
export const Heading: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [task, setTask] = useState<string>('')
  const [date, setDate] = useState<string>(currentDate)
  const [time, setTime] = useState<string>(currentTime)

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value)
  }
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask = {
      task,
      date,
      time,
      id: v4()
    }
    dispatch(addTodo(newTask))
    setTask('')
    setShowModal(false)
  }

  return (
    <>
      <div className="p-4 bg-blue-400 shadow-sm">
        <header className="flex flex-row items-center justify-between max-w-xl mx-auto">
          <img src="images/logo.png" alt="logo" />
          <button
            className="px-10 py-3 font-semibold text-white transition duration-300 ease-in-out bg-indigo-500 rounded-md hover:bg-indigo-600"
            type="button"
            onClick={() => setShowModal(true)}>
            +
          </button>
        </header>
      </div>
      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          task={task}
          date={date}
          time={time}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTask(e.target.value)}
          currentDate={currentDate}
          onSubmit={onSubmit}
          handleDate={handleDate}
          handleTime={handleTime}
        />
      ) : null}
    </>
  )
}
