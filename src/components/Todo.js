import React from 'react'

function Todo(props) {

const handleClick = () => {
    console.log(props.item.id)
    props.toggleItem(props.item.id)
}

    return (
        <div onClick={handleClick} style={props.item.completed ? { textDecoration: 'line-through'} : {textDecoration: 'none'}} >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo
