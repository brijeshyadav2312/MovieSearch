import React from "react";
const Search = (props) => {
  return (
    <>
      <div className='containers'>
        <div className='card'>
          <a href={props.imageSrc} target="_ "><div className='bgImage' style={{ backgroundImage: `url(${props.imageSrc})` }}></div></a>
          <p className='title'>{props.title}</p>
          <span className='moreAbout'>
            <span><span>{props.year}&nbsp;</span></span>
            <span><span>{props.type}&nbsp;</span></span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Search;
