package com.example.demo.model;





import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bike_details")
public class login {
	@Id
	private String username;
	private String mail;
	private String password;
	private String cpassword;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public login(String username, String mail, String password, String cpassword) {
		super();
		this.username = username;
		this.mail = mail;
		this.password = password;
		this.cpassword = cpassword;
	}
	public login() {
		
	}
}