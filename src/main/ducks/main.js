import _ from 'lodash';
import { handleActions, createAction } from 'redux-actions';

// constants
const ACTION_NAME = "ACTION_NAME";

// sync actions
export const action = createAction(ACTION_NAME);

// async actions
export const asyncAction = () => {
    return (dispatch) => {
        dispatch(action());
    };
};

// initial state
const initialState = {
    field: "123"
};

// reducer
export default handleActions({

    [ACTION_NAME]: (state, { payload }) => {
        return _.assign({}, state, {
            payload
        });
    }

}, initialState);

// selectors
export const getField = (state) => {
    return state.field;
};
