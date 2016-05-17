import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import _ from 'lodash';

const initialState = {

};

export default handleActions({

    [actionTypes.someAction]: (state, { payload }) => {
        return _.assign({}, state, {
            payload
        });
    }

}, initialState);
