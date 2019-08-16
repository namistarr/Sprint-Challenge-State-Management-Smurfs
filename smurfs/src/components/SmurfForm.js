import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions';

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: null,
        height: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.postSmurfs(newSmurf);
        props.getSmurfs(props.smurfs);
    }

    const handleChange  = (event) => {
        setNewSmurf({...newSmurf, [event.target.name] : event.target.value})
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={newSmurf.name}
                    placeholder='Name'
                    onChange={handleChange} 
                />
                 <input
                    type='number'
                    name='age'
                    value={newSmurf.age}
                    placeholder='Age'
                    onChange={handleChange} 
                />
                 <input
                    type='text'
                    name='height'
                    value={newSmurf.height}
                    placeholder='Height'
                    onChange={handleChange} 
                />
                <button type='submit'>Add this Smurf!</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs, postSmurfs })(SmurfForm);