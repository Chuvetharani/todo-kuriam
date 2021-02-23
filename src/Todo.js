import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const TodoList = props => (
  <ul className="list-group">
    {props.items.map(item => (
      <TodoListItem
        key={item.index}
        item={item}
        itemIndex={item.index}
        removeItem={props.removeItem}
        markTodoDone={props.markTodoDone}
        updateItemValue={props.updateItemValue}
      />
    ))}
  </ul>
);

const TodoListItem = ({
  item,
  itemIndex,
  removeItem,
  markTodoDone,
  updateItemValue
}) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(item.value);

  const handleEditValue = () => {
    setEditMode(false);
    updateItemValue(inputValue, itemIndex);
  };

  const keyPress = e => {
    if (e.key === "Enter") {
      handleEditValue();
    }
  };

  return (
    <li className="list-group-item">
      <div className={item.done ? "done" : "undone"}>
        <span onClick={() => setEditMode(true)}>🎀</span>
        <span onClick={() => setEditMode(true)}>
          {editMode ? (
            <input className="list-input"
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onBlur={handleEditValue}
              onKeyPress={keyPress}
              autoFocus
            />
          ) : (
            item.value
          )}
        </span>
        <button 
          type="button"
          className="close"
          onClick={() => removeItem(itemIndex)}
        >🗑️
        </button>
      </div>
    </li>
  );
};

const TodoForm = ({ addItem }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    let newInputValue = inputEl.current.value;
    if (newInputValue) {
      addItem({ newItemValue: newInputValue });
      inputEl.current.value = "";
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-inline">
      <input className="list-input"
        type="text"
        ref={inputEl}
        className="form-control todo-input"
        placeholder="add a new todo..."
      />
      <button className="red-button" type="submit">
        Add
      </button>
    </form>
  );
};

const TodoHeader = () => <h1 style={{ marginLeft: 40 }}>Todo list</h1>;

const TodoApp = props => {
  const [todoItems, setTodoItems] = useState(props.initItems);
  const [id, setId] = useState(props.initItems.length);

  const addItem = newTodoItem => {
    const newId = id + 1;
    setTodoItems([
      ...todoItems,
      {
        index: newId,
        value: newTodoItem.newItemValue,
        done: false
      }
    ]);
    setId(newId);
  };

  const removeItem = itemIndex => {
    const updatedTodoItems = todoItems.filter(item => item.index !== itemIndex);
    setTodoItems(updatedTodoItems);
  };

  const markTodoDone = itemIndex => {
    const updatedTodoItems = todoItems.map(item =>
      item.index === itemIndex
        ? {
            ...item,
            done: !item.done
          }
        : item
    );
    setTodoItems(updatedTodoItems);
  };

  const updateItemValue = (value, itemIndex) => {
    const updatedTodoItems = todoItems.map(item =>
      item.index === itemIndex
        ? {
            ...item,
            value
          }
        : item
    );
    setTodoItems(updatedTodoItems);
  };

  return (
    <div id="main">
      <TodoHeader />
      <TodoList
        items={todoItems}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
        updateItemValue={updateItemValue}
      />
      <TodoForm addItem={addItem} />
    </div>
  );
};

export default TodoApp;