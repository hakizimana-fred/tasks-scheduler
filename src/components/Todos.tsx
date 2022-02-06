import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { HiOutlineTrash } from 'react-icons/hi'
import Modal from './Modal/Modal'
import { deleteTodo } from '../Redux/actions/TodoAction'

export function Todos() {
  const todos = useSelector((state: RootStateOrAny) => state)
  const { tasks } = todos

  const dispach = useDispatch()

  return (
    <div className=" pt-8 pb-12 mx-auto">
      <div>
        <div className="flex items-center justify-between">
          <h6 className="text-base font-medium text-gray-600">Your Taks</h6>
        </div>
      </div>

      <ul className="pt-5">
        {tasks?.map((task: any) => (
          <li className="flex  flex-row items-start p-3 justify-between py-2.5">
            <div className="flex flex-col items-start justify-start gap-x-5">
              <p className="text-sm text-gray-500 font-light">{task.task}</p>
            </div>
            <div className="flex pl-2 flex-col items-start justify-start gap-x-5">
              <p className="text-sm text-gray-500 font-light">Date: {task.date}</p>
            </div>
            <div className="flex pl-2  flex-col items-start justify-start gap-x-5">
              <p className="text-sm text-gray-700 font-light">
                {task.time} <span>{task.time > 12 ? 'PM' : 'AM'}</span>{' '}
              </p>
            </div>
            <div className="flex pl-4 flex-row items-center gap-x-4">
              <button
                type="button"
                className="transition duration-300 ease-in-out"
                onClick={() => dispach(deleteTodo(task.id))}>
                <HiOutlineTrash
                  className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
                  size={20}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
