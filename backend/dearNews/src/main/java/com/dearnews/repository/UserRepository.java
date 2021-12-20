package com.dearnews.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dearnews.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{

	public Optional<UserModel> findByEmail(String email);
	
}
