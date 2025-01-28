interface TaskItemProps {
    task: string;
}

export default function TaskItem({task}: TaskItemProps){

    const oppss = ["Lol", "Lal"]

    return (
        <div>
            <h1>{task} { oppss[1]}</h1>
        </div>
    )
}