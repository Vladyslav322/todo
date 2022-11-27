import React from 'react';
import classes from './Todo.module.css';
import {convertDate} from '../../utils/convertDate';
import {MdFileDownloadDone, MdOutlineDeleteForever} from "react-icons/md";
import {BsClock} from "react-icons/bs";
import {DiOpenshift} from "react-icons/di";
import EditableField from "./EditableField";

const Todo = ({todo, completeTodo, deleteTodo, inProgressTodo, openTodo, descriptionEditing, titleEditing}) => {
    return (
        <li className={`todo__list-item ${todo.status}`}>
            <div className={classes.todo__container}>
               <div className={classes.todo__container_text}>
                   <div>
                       <span className={classes.todo__label}>Title:</span>
                       <EditableField value={todo.title} valueChange={(value) => titleEditing(todo.id, value)}/>
                   </div>

                   <div>
                       <span className={classes.todo__label}>Description:</span>
                       <EditableField value={todo.description} valueChange={(value) => descriptionEditing(todo.id, value)}/>
                   </div>
               </div>

                <div className={classes.todo__container_button}>
                    <button onClick={() => openTodo(todo.id)}>
                        <DiOpenshift className={classes.todo__item_edit}/>
                    </button>
                    <button onClick={() => completeTodo(todo.id)}>
                        <MdFileDownloadDone className={classes.todo__item_add} />
                    </button>
                    <button onClick={() => inProgressTodo(todo.id)}>
                        <BsClock className={classes.todo__item_progress} />
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>
                        <MdOutlineDeleteForever className={classes.todo__item_delete}/>
                    </button>
                </div>
            </div>

            <div className={classes.todo__container_data}>
                <span className={classes.todo__data}>{convertDate(todo.creationDate)}</span>
                {
                    todo.updateDate ? <span className={classes.todo__data}>{convertDate(todo.updateDate)}</span> : ''
                }
            </div>
        </li>

    );
};

export default Todo;

