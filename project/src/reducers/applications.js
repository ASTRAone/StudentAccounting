import { handleActions } from 'redux-actions';
import {successGetStudentsList, sendPostNewStudent, successDeleteStudent} from "../_actions/applications";

const initialState = {
    studentsList: [],
    
    // sortStudentList: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successGetStudentsList().type]: (state, action) => {
            console.log('successGetStudentsList', action);
            return {
                studentsList: action.payload
            }
        },
    },
    initialState
)

