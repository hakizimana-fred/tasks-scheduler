import React, { ChangeEventHandler } from 'react'

interface Props {
  showModal: boolean
  // eslint-disable-next-line prettier/prettier
  task: string
  date: string
  time: string
  setShowModal: (value: boolean) => void
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  currentDate: string
  handleDate: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTime: (e: React.ChangeEvent<HTMLInputElement>) => void
  
}

function Modal({ showModal, setShowModal, task, date, time, onChange, onSubmit, currentDate, handleDate, handleTime }: Props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Save Your Task</h3>
            </div>
            <div className="relative p-6 flex-auto">
              <form className="flex flex-col max-w-lg m-auto " onSubmit={onSubmit}>
                <textarea
                  required
                  className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="I don't understand pineapple pizza"
                  value={task}
                  onChange={onChange}
                />
                <div className="flex items-center mb-8">
                  <input
                    required
                    type="date"
                    className="focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md mx-4"
                    min={currentDate}
                    value={date}
                    onChange={handleDate}
                  />
                  <input
                    required
                    type="time"
                    className="focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md mx-4"
                    onChange={handleTime}
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center py-4 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Task
                </button>
              </form>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  )
}

export default Modal
