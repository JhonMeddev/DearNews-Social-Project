package com.dearnews.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.dearnews.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{

	public Optional<UserModel> findByEmail(String email);
	
}
