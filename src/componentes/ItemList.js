import React from 'react'
import Item from './Item'


const ItemList = ({Items}) => {

  return (
    
       <section className='productos'> 
            {Items.map((Items)=>{
              return <Item key={Items.id} item={Items}/>
            })}
            
        </section>

  )
}

export default ItemList