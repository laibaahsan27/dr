import React from 'react'
import './List.css'

const List = (props) => {
    const { list } = props;
  return (
    <div className='sv4-l'>
        {
            list.map((item) => {
                return (
                    <div key={item.id}>
                       
                    
                        <div className='sv4-l-content'><span>{item.id}.  </span>{item.content}</div>
                    </div>
                )
            }   )
        }
    </div>
  )
}

export default List