import React, { useState } from 'react';

const Item = (props) => {

    const [isDone, setIsDone] = React.useState(false)
    let btnText = isDone ? '戻す' : '完了！'
    const handleClick = () => {
        setIsDone(!isDone)
    }
    return (
        <li>
            <span>{props.id}:</span>
            <span>{props.content}</span>
            <button onClick={handleClick}>
                {btnText}
            </button>
        </li>
    )
}
export default Item