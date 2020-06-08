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

// Добавление нового студента
export function postCreateNewStudent(payload) {
    return {
        type: 'POST_CREATE_NEW_STUDENT',
        payload
    };
}

export function sendPostNewStudent(payload) {
    return {
        type: 'POST_SEND_NEW_STUDENT',
        payload
    };
}

// Удаление студента
// export function deleteStudent(payload) {
//     return {
//         type: 'DELETE_STUDENT',
//         payload
//     };
// }

// Поиск студента
export function postFindStudent(payload) {
    return {
        type: 'POST_FIND_STUDENT',
        payload
    };
}

export function successFindStudent(payload) {
    return {
        type: 'POST_FIND_STUDENT_SUCCESS',
        payload
    };
}
