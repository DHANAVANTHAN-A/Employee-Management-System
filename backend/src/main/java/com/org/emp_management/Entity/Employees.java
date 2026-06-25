package com.org.emp_management.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Employees {

    @Id
    private long id;

    private String name;
    private long phone;
    private String department;
    private String joiningDate;
}