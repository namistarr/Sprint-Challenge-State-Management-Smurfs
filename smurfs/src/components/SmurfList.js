import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfList = (props) => {
    useEffect(() => {
        props.getSmurfs(props.smurfs)
    }, [])

    return(
        <div>
            <h2>Look at all these Smurfs!!!</h2>
            {props.smurfs && 
                props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect (mapStateToProps, { getSmurfs })(SmurfList);