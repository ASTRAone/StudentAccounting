export function getStudentsListRequest(payload) {
    return {
        type: 'GET_STUDENTS_LIST_REQUEST',
        payload
    };
}

export function successGetStudentsList(payload) {
    return {
        type: 'GET_STUDENTS_LIST_SUCCESS',
        payload
    };
}
