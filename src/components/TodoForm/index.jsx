import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit:PropTypes.func,
};
TodoForm.defaultTypes = {
    onSubmit:null
};
function TodoForm(props) {

    const {onSubmit} = props
    const[value, setValue] = useState('')

    function handlerValueChange(e){
        setValue(e.target.value)
    }

    function handleSubmit(e){
        //preven reload
        e.preventDefault()

        if( !onSubmit) return

        const formValue = {
            title:value
        }
        onSubmit(formValue)
        //reset form
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handlerValueChange} />
        </form>
    );
}

export default TodoForm;