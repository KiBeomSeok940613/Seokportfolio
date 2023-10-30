import React from 'react'




function Loading() {
  const snow = [];
    
  for (let i = 0; i < 50; i++){
      snow.push()
  }

  return (
    <>
     <div className="snow-container">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="snowflake" />
      ))}
    </div>
   


    </>
  )
}

export default Loading