
const KanbanBoard = () => {
  return (
    <div>
        <button
            className={
                `h-[60px]
                w-[350px]
                min-w-[350px]
                cursor-pointer
                rounded-lg
                bg-mainBacgroundcolor   
               `
            }    
        >
            Add column
        </button>
    </div>
  )
}

export default KanbanBoard