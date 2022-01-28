import React, {useState} from 'react';

const AddTodo = ({onCreate}) => {
    const [value, setValue] = useState('');

    function submitHadler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
        }

        setValue('');
    }

    return (
        <form onSubmit={submitHadler}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;
