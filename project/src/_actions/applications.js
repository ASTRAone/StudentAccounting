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
export function postCreateNewStudent(payload, meta) {
    return {
        type: 'POST_CREATE_NEW_STUDENT',
        payload, 
        meta
    };
};

export function sendPostNewStudent(payload) {
    return {
        type: 'POST_SEND_NEW_STUDENT',
        payload
    };
};

// Удаление студента
export function deleteStudent(payload, meta) {
    return {
        type: 'DELETE_STUDENT',
        payload, 
        meta
    };
};

export function successDeleteStudent(payload) {
    return {
        type: 'DELETE_STUDENT_SUCCESS',
        payload
    };
};

// Поиск студента
export function postFindStudent(payload, meta) {
    return {
        type: 'POST_FIND_STUDENT',
        payload, 
        meta
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

//Экспорт в Excel
export function exportToExcel(payload) {
    return {
        type: 'EXPORT_TO_EXCEL',
        payload
    };
};

export function successExportToExcel(payload) {
    return {
        type: 'EXPORT_TO_EXCEL_SUCCESS',
        payload
    };
};

//Экспортировать практику в Excel
export function practicToExcel(payload) {
    return {
        type: 'PRACTIC_TO_EXCEL',
        payload
    };
};

export function successPracticToExcel(payload) {
    return {
        type: 'PRACTIC_TO_EXCEL_SUCCESS',
        payload
    };
};

//Добавить комментарий к практике
export function addStudentPracticComment(payload) {
    return {
        type: 'ADD_STUDENT_PRACTIC_COMMENT',
        payload
    };
};

export function successAddStudentPracticComment(payload) {
    return {
        type: 'ADD_STUDENT_PRACTIC_COMMENT_SUCCESS',
        payload
    };
};

//Это вроде отчет чи шо
export function studentCardReport(payload) {
    return {
        type: 'STUDENT_CARD_REPORT',
        payload
    };
};

export function successStudentCardReport(payload) {
    return {
        type: 'STUDENT_CARD_REPORT_SUCCESS',
        payload
    };
};

//Обновить практику
export function updatePractic(payload) {
    return {
        type: 'UPDATE_PRACTIC',
        payload
    };
};

export function successUpdatePractic(payload) {
    return {
        type: 'UPDATE_PRACTIC_SUCCESS',
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
export function postLogin(payload, meta) {
    return {
        type: 'POST_LOGIN',
        payload,
        meta
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

// Получение кураторов
export function getListCurators(payload, meta) {
    return {
        type: 'GET_LIST_CURATORS',
        payload,
        meta
    };
};

export function successGetListCurators(payload) {
    return {
        type: 'GET_LIST_CURATORS_SUCCESS',
        payload
    };
};

// Получение институтов
export function getListInstitutes(payload) {
    return {
        type: 'GET_LIST_INSTITUTES',
        payload
    };
};

export function successListInstitutes(payload) {
    return {
        type: 'GET_LIST_INSTITUTES_SUCCESS',
        payload
    };
};