import { type Column, type Id, type Task } from "../types";


interface Props{
    column: Column;
    // tasks: Task[];
    // deleteColumn: (id: Id) => void;
    // updateColumn: (id: Id, title: string) => void;
    // createTask: (columnId: Id) => void;
    // deleteTask: (id: Id) => void;
    // updateTask: (id:Id, content:string) => void;
}

const ColumnContainer = (props:Props) => {

    const {column} = props
  return (
    <div className={`bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col`}>
        <div className={`bg-mainBacgroundcolor text-2xl h-[60px] cursor-grab rounded-md rounded-bl-none p-3 font-bold border-columnBackgroundColor`}>
            {column.title}
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