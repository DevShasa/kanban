import PlusIcon from "../icons/PlusIcon";
import { useState } from "react";
import { type Column, type Id, type Task } from "../types";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
	const [columns, setColumns] = useState<Column[]>([]);
	const [activeColumn, setActiveColumn] = useState<Column | null>(null);
	const [activeTask, setActiveTask] = useState<Task | null>(null);
	const [tasks, setTasks] = useState<Task[]>([]);

	function generateId() {
		return Math.floor(Math.random() * 1000) + 1;
	}

	function createNewColumn() {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		};

		setColumns([...columns, columnToAdd]);
	}

	function deleteColumn(id: Id) {
		const filteredColumns = columns.filter((col) => col.id !== id);
		setColumns(filteredColumns);

		const newTasks = tasks.filter((t) => t.columnId !== id);
		setTasks(newTasks);
	}

	function updateColumn(id: Id, title: string) {
		const newColumns = columns.map((col) => {
			if (col.id !== id) return col;
			return { ...col, title };
		});

		setColumns(newColumns);
	}

	function createTask(columnId: Id) {
		const newTask: Task = {
			id: generateId(),
			columnId,
			content: `Task ${tasks.length + 1}`,
		};
		setTasks([...tasks, newTask]);
	}

	function deleteTask(id: Id) {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	}

	function updateTask(id: Id, content: string) {
		const newTasks = tasks.map((task) => {
			if (task.id !== id) return task;
			return { ...task, content };
		});
		setTasks(newTasks);
	}

	return (
		<div
			className={`m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]`}
		>
			<div className={`m-auto flex gap-4`}>
                <div className="flex gap-4">
                    {columns.map(c=>(<ColumnContainer
                        column={c}
                        deleteColumn={deleteColumn}
                    />))}
                </div>
				<button
					className={`h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBacgroundcolor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2 flex gap-2`}
					onClick={() => {
						createNewColumn();
					}}
				>
					<PlusIcon /> Add column
				</button>
			</div>
		</div>
	);
};

export default KanbanBoard;
