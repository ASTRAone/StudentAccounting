export function getStudentsListRequest(payload) {
    return {
        type: 'GET_STUDENTS_LIST_REQUEST',
        payload
    };
};

export function successGetStudentsList(payload) {
    return {
        type: 'GET_STUDENTS_LIST_SUCCESS',
        payload
    };
};

// Добавление нового студента
export function postCreateNewStudent(payload) {
    return {
        type: 'POST_CREATE_NEW_STUDENT',
        payload
    };
};

export function sendPostNewStudent(payload) {
    return {
        type: 'POST_SEND_NEW_STUDENT',
        payload
    };
};

// Удаление студента
export function deleteStudent(payload) {
    return {
        type: 'DELETE_STUDENT',
        payload
    };
};

export function successDeleteStudent(payload) {
    return {
        type: 'DELETE_STUDENT_SUCCESS',
        payload
    };
};

// Поиск студента
export function postFindStudent(payload) {
    return {
        type: 'POST_FIND_STUDENT',
        payload
    };
};

export function successFindStudent(payload) {
    return {
        type: 'POST_FIND_STUDENT_SUCCESS',
        payload
    };
};

// Обновление информаии о студенте
export function updateInfoStudent(payload) {
    return {
        type: 'UPDATE_INFO_STUDENT',
        payload
    };
};

export function successUpdateInfoStudent(payload) {
    return {
        type: 'UPDATE_INFO_STUDENT_SUCCESS',
        payload
    };
};

// Создание практики
// export function updateInfoStudent(payload) {
//     return {
//         type: 'UPDATE_INFO_STUDENT',
//         payload
//     };
// };

// export function successUpdateInfoStudent(payload) {
//     return {
//         type: 'UPDATE_INFO_STUDENT_SUCCESS',
//         payload
//     };
// };

// Вход в систему
export function postLogin(payload) {
    return {
        type: 'POST_LOGIN',
        payload
    };
};

export function successPostLogin(payload) {
    return {
        type: 'POST_LOGIN_SUCCESS',
        payload
    };
};

// Добавление куратора
export function addCurator(payload) {
    return {
        type: 'ADD_CURATOR',
        payload
    };
};

export function successAddCurator(payload) {
    return {
        type: 'ADD_CURATOR_SUCCESS',
        payload
    };
};