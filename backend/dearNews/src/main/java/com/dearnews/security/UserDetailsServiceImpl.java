package com.dearnews.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dearnews.model.UserModel;
import com.dearnews.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		Optional<UserModel> email = userRepository.findByEmail(userEmail);
		email.orElseThrow(() -> new UsernameNotFoundException(userEmail + " not found."));
		return email.map(UserDetailsImpl::new).get();
	}
	
}
