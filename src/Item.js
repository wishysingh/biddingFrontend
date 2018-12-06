import React from 'react';

 const Item = ({title,description,highestbid}) => {
  return (
        <div className='items'>
		    <h1 className='title'>{title}</h1>
			<p className='para'>{description}</p>
            <i className='bidval'>highest bid : {highestbid}</i>
            <button className='edit itembut'>edit</button>
            <button className='delete itembut'>delete</button>
		</div>
        );
}
export default Item;