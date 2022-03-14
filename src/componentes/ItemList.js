import React from 'react'
import Item from './Item'


const ItemList = ({Items}) => {

  return (
    <>
       <ul> 
            {Items.map((Items)=>{
              return <Item item={Items}/>
            })}
            
        </ul>
        
    </>

  )
}

export default ItemList