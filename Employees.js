function getEmpl (employeeName) {
    const employeeData = [];
    for (const nameEmpl of employeeName) {
        employeeData.push({
            name: nameEmpl,
            number: nameEmpl.length
        })
    }

    employeeData.forEach((employee) => console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`))
}