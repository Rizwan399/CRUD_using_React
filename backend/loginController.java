package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.login;
import com.example.demo.service.loginService;


@RestController
@CrossOrigin
public class loginController
{
	@Autowired
	loginService rr;
	
	@GetMapping("/get")
	
	public List<login> showDetails() {
		return rr.getDetails();

	}
	@CrossOrigin("*")
	@PostMapping("/post")
	public String addDetails(@RequestBody login m) {
		rr.add(m);
		return "Added Detail " + m.getUsername();
	}
	@CrossOrigin("*")
	@PutMapping("/put")
	public String updateInfo(@RequestBody login st) {
//		return rr.updateDetails(st) ;
		return "updated.";
	}
	@CrossOrigin("*")
	@DeleteMapping("/delete/{st2}")
	public String deleteInfo(@PathVariable String st2) {
		return rr.deleteDetails(st2);
	}
	@CrossOrigin("*")
	@GetMapping("/med/{field}")
	public List<login> getWithSort(@PathVariable String field) {
		return rr.getSorted(field);
	}
	@CrossOrigin("*")
	@GetMapping("/med/{offset}/{pageSize}")
	public List<login> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		return rr.getWithPagination(offset, pageSize);
	}

}