package com.org.emp_management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.emp_management.Entity.Employees;

public interface Emp extends JpaRepository<Employees, Long>{

}
