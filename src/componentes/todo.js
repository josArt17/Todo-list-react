import { useState } from "react";
import { MdCreate } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdDone } from "react-icons/md";

import "../hojas-de-estilo/todo-app.css";



export default function Todo({ item, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);

    

    function FormEdit() {

            const [newValue, setNewValue] = useState(item.title);
        function handleSubmit(e) {
            e.preventDeFault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);

        }

        function handleClickUpdateTodo() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }


        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput"  onChange={handleChange} value={newValue} />
            <button className="button" onClick={handleClickUpdateTodo}> <MdDone/> </button>
        </form>
    }

    function TodoElement() {
        return <div className="todoInfo"> 
                {item.title} <button onClick={() => setIsEdit(true)} className="buttonEdit"> <MdCreate/> </button> 
                <button onClick={(e) => onDelete(item.id)} className="buttonDelete"> <MdClear/> </button>
                </div>
    }

    return (
            <div className="todo">
                {isEdit ? <FormEdit/> : <TodoElement/>}
            </div>

            
    );
}