interface TaskItemProps {
    task: string;
}

export default function TaskItem({task}: TaskItemProps){
    return (
        <div>
            <h1>{task}</h1>
        </div>
    )
}