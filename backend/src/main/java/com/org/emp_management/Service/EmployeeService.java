package com.org.emp_management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.org.emp_management.Entity.Employees;
import com.org.emp_management.Repository.Emp;

@Service
public class EmployeeService {

    @Autowired
    private Emp emp;

    public List<Employees> getallEmployees() {
        return emp.findAll();
    }

    public Employees create(Employees employee) {
        return emp.save(employee);
    }

    public Employees uptateEmp(long id, Employees details) {

        Employees employees = emp.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employees.setName(details.getName());
        employees.setDepartment(details.getDepartment());
        employees.setPhone(details.getPhone());

        // FIXED LINE 👇
        employees.setJoiningDate(details.getJoiningDate());

        return emp.save(employees);
    }

    public void delete(long id) {
        emp.deleteById(id);
    }
}