import React from 'react'
import './topicbox.css'

export default function TopicBox
(props) {
    const topic = "My favorite food is Kottu"
    const item = "and Rice"
    const foodprices = {kottu:"250", rice:"350"}
  return (
    <div>
        <div className='topic-box'>
            <span className='text'>My favorite food is {props.food} the price is {props.price}</span>
            {props.children}
        </div>
    </div>
  )
}
