package com.example.demo.service;

import java.util.Iterator;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.login;
import com.example.demo.repository.loginRepository;

@Service
public class loginService {
	@Autowired(required=true)
	loginRepository r;
	
	public String add(login e)
	{
		r.save(e);
		return "Added";
	}
	public List<login> getDetails()
	{
		return r.findAll();
	}
	public login updateDetails(login e1) {
		return r.saveAndFlush(e1);
	}
	public String deleteDetails(String username) {
		List<login> patients=r.findAll();	
		Iterator<login> pat=patients.iterator();
		
		while(pat.hasNext())  
		{  
		login user=pat.next();  
		if((user.getUsername()).equals(username))  
		{  
			r.delete(user);
		}
		}
		return "user deleted";


	}
	
	public List<login> getSorted(String field) {
		return r.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<login> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<login> page =r.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}



}