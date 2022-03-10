import React from 'react'
import Item from './Item'
import ItemListContainer from './ItemListContainer'

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