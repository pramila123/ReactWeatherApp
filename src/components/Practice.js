import React from 'react'

const Practice = ({item}) => {
    return (
        <>
        {
         item.map((items)=>
        {
return <li> {items.title} <br/>{items.content} </li>
        })
    }
        </>
    )
}

export default Practice
