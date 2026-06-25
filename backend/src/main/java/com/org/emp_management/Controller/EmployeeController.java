package com.org.emp_management.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.emp_management.Entity.Employees;
import com.org.emp_management.Service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:5173/")
public class EmployeeController {
	@Autowired
	private EmployeeService empservice;
	@GetMapping("/api/getall")
	public ResponseEntity<List<Employees>> getAllEmp() {
		List<Employees> allemp = empservice.getallEmployees();
		return ResponseEntity.ok(allemp);
		
	}
	
	@PostMapping("/api/save")
	public Employees create(@RequestBody Employees emp) {
		return empservice.create(emp);
	}
	@PutMapping("/api/{id}")
	public Employees uptate(@PathVariable long id, @RequestBody Employees emp) {
		return empservice.uptateEmp(id, emp);
	}
	@DeleteMapping("/api/{id}")
	public void delete(@PathVariable long id) { 
		empservice.delete(id);
		
	}
	}


