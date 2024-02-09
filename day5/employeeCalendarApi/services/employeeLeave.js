employeeLeave = [
    { "empId": 1, "empName": "Jane Doe", "leaveType": "Medical Leave", "startDate": "2024-01-10", "endDate": "2024-01-16", "status": "Pending For Approval" },
    { "empId": 2, "empName": "Jane Doe", "leaveType": "Vacation Leave", "startDate": "2023-12-22", "endDate": "2024-01-02", "status": "Approved" }
];


empLeaveService = {}

empLeaveService.getAll = () => {
    return employeeLeave;
}



empLeaveService.getById = (empId) => {

    for (let i = 0; i < employeeLeave.length; i++) {
        if (((employeeLeave[i]["empId"]).toLowerCase()) == ((empId).toLowerCase()))
            return employeeLeave[i];
    }
}


empLeaveService.add = (request) => {
    if (Movie) {
        let data = JSON.parse(request);
        employeeLeave.push(data);
        // console.log(employeeLeave);
        return true;
    }
    else
        return false;
}

empLeaveService.delete = (empId) => {
    let index;
    if (empId) {
        for (let i = 0; i < employeeLeave.length; i++) {
            if (((employeeLeave[i]["empId"]).toLowerCase()) == ((empId).toLowerCase())) {
                index = i;
                break;
            }
        }
        employeeLeave.splice(index, 1);
        console.log(employeeLeave);
        return true;

    }
    else
        return false;
}

empLeaveService.update = (empId, key, value) => {
    if (empId) {
        for (let i = 0; i < employeeLeave.length; i++) {
            if (((employeeLeave[i]["empId"]).toLowerCase()) == ((empId).toLowerCase())) {
                employeeLeave[key] = value;
                return true;
            }
        }
    }
    else
        return false;
}


module.exports = empLeaveService;