import React from 'react';
import { consumer } from './context-hoc';

const NameForm = ({ addName }) => {
    const [name, setName] = React.useState('');

    const submitHandler = (evt) => {
        evt.preventDefault();
        addName(name);
        setName('');
    }

    return (
        <form className="form"
            style={{ width: '250px' }}
            onSubmit={submitHandler}>

            <label htmlFor="name">Enter name: </label>
            <input type="text" className="form-control"
                id="name" name="name" value={name}
                onChange={e => {
                    setName(e.target.value);
                }} /> 
        </form>
    );
}
export default consumer('addName')(NameForm);