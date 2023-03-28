import React, { useState } from 'react';

function CommentPointMaker() {
  const [points, setPoints] = useState([]);

  function handleDivClick(event) {
    const div = event.target;
    const rect = div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const comment = window.prompt('Enter your comment:');
    setPoints([...points, { x, y, comment }]);
  }

//   return (
//     <div style={{ position: 'relative', width: '500px', height: '500px' }} onClick={handleDivClick}>
//       {points.map((point, index) => (
//         <CommentPoint key={index} x={point.x} y={point.y} comment={point.comment} />
//       ))}
//     </div>
//   );
}

function CommentPoint({ x, y, comment }) {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <>
      <div style={{ position: 'absolute', left: x, top: y, width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'red' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {isHovering && (
        <div style={{ position: 'absolute', left: x + 20, top: y + 20, backgroundColor: 'white', padding: '10px', border: '1px solid black' }}>
          {comment}
        </div>
      )}
    </>
  );
}

const test=()=>{
    <div style={{ position: 'relative', width: '500px', height: '500px',background:"red" }} onClick={handleDivClick}>
      {points.map((point, index) => (
        <CommentPoint key={index} x={point.x} y={point.y} comment={point.comment} />
      ))}
    </div>
}
export default test;