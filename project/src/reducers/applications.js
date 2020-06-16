import { handleActions } from 'redux-actions';
import {successGetStudentsList, successListInstitutes, successGetListCurators,
        successFindStudent, successDeleteStudent, sendPostNewStudent} from "../_actions/applications";

const initialState = {
    studentsList: [],
    institutesList: [],
    curatorsList: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successGetStudentsList().type]: (state, action) => {
            console.log('successGetStudentsList', action);
            return {
                ...state,
                studentsList: action.payload
            }
        },
        [successListInstitutes().type]: (state, action) => {
            console.log('successListInstitutes', action);
            return {
                ...state,
                institutesList: action.payload
            }
        },
        [successGetListCurators().type]: (state, action) => {
            console.log('successGetListCurators', action);
            return {
                ...state,
                curatorsList: action.payload
            }
        },
        // Чекнуть поиск
        [successFindStudent().type]: (state, action) => {
            console.log('successFindStudent', action);
            return {
                ...state,
                studentsList: action.payload,
            }
        },
        // Чекнуть удаление
        [successDeleteStudent().type]: (state, action) => {
            console.log('successDeleteStudent', action);
            return {
                ...state,
                studentsList: action.payload,
            }
        },
        // Чекнуть добавление
        [sendPostNewStudent().type]: (state, action) => {
            console.log('sendPostNewStudent', action);
            return {
                ...state,
                studentsList: action.payload,
            }
        },
    },

    initialState
)

