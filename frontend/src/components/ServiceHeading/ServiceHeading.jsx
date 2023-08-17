import React from 'react'
import "./ServiceHeading.css"

const ServiceHeading = ({heading , content}) => {

    const list = [
        {
          id: 1,
          heading: `${heading}`,
          content:
            `${content}`,
        },
      ];


  return (
    <>
        <div>
        {list.map((list) => {
          return (
            <div className="outerS" id={list.id}>
              <div className="topHead">{list.heading}</div>
              <div className="topTxt">{list.content}</div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default ServiceHeading