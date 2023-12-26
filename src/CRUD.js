import { useState } from "react";

const CRUD =()=>{
    const initialState = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];
    const [items,setItems] = useState(initialState);
    const [input,setInput] = useState('');
    const [editMode,setEditMode] = useState(null);
    
    function addHandler(){
        if(input.trim()==='') return;

        if(editMode!==null){
          const updateItem = items.map(item=>
            editMode === item.id ? {...item,name:input} : item
          );
          setItems(updateItem);
          setEditMode(null);
        //   setInput('');
        }else{
            const newItem = {
                id : items.length+1,
                name: input
               };
               setItems([...items,newItem]);
            //    setInput('');
        }
        setInput('');
    };
    
    function editHandler(id){
       const itemToEdit = items.find(item=> item.id === id);
       setInput(itemToEdit.name);
       setEditMode(id);
    }

    function deleteHandler(id){
        setItems(items.filter(item=>item.id !== id))
    };
    return(
        <>
         <h1>CRUD</h1>
         <input type="text" 
                placeholder="enter text"
                value={input}
                onChange={e=>{setInput(e.target.value)}}/>
         <button onClick={addHandler}>
         {editMode !== null? 'Update': 'Add'}
            </button><br/>

         <ul>
            {items.map(item=>
                <li key={item.id}>
                  {item.name}
                  <button onClick={()=>{editHandler(item.id)}}>Edit</button>
                  <button onClick={()=>{deleteHandler(item.id)}}>Delete</button>
                </li>
            )}
         </ul>

        </>
    );
};

export default CRUD;