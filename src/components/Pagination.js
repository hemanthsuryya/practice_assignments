import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
  }
  return <nav>
    
    <ul className='pagination' style={{width: "100%", 
        border: "1px solid black"}}>
      {pageNumbers.map(number => (
        <li style={{display: "inline"}} key={number}>
          <a onClick={() => paginate(number)} href="!#">{number}</a>
        </li>
      ))}
    </ul>
  </nav>;
};

export default Pagination;
