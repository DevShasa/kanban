import { type Column, type Id, type Task } from "../types";
import Trashicon from "../icons/Trashicon";

interface Props{
    column: Column;
    // tasks: Task[];
    deleteColumn: (id: Id) => void;
    // updateColumn: (id: Id, title: string) => void;
    // createTask: (columnId: Id) => void;
    // deleteTask: (id: Id) => void;
    // updateTask: (id:Id, content:string) => void;
}

const ColumnContainer = (props:Props) => {

    const {column, deleteColumn} = props
  return (
    <div className={`bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col`}>
        <div className={`bg-mainBacgroundcolor text-lg h-[60px] cursor-grab rounded-md rounded-bl-none p-3 font-bold border-columnBackgroundColor border-4 flex items-center justify-between`}>
            <div className="flex gap-2">
                <div className={`flex justify-center items-center bg-columnBackgroundColor py-1  px-2 text-sm rounded-full`}>0</div>
                {column.title}
            </div>
            <button className={`stroke-gray-500 hover:stroke-white rounded px-1 py-2`}
                onClick={()=>deleteColumn(column.id)}
            >
                <Trashicon />
            </button>
        </div>
        <div className={`flex grow`}>
            Content
        </div>
        <div>
            Footer
        </div>
    </div>
  )
}

export default ColumnContainer