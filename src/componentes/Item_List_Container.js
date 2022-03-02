import ItemCount from "./ItemCount";


const Item_List_Container = (props) => {

    const {nombre} = props
    
  return (

    <>
        <h2>Hola {nombre} </h2> 
        <ItemCount/>
    </>

  )
}

export default Item_List_Container;