package com.dearnews.service;

import java.nio.charset.Charset;
import java.util.Optional;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.dearnews.model.UserModel;
import com.dearnews.model.UsuarioLogin;
import com.dearnews.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Optional<UserModel> cadastrarUsuario(UserModel email) {
		if (userRepository.findByEmail(email.getEmail()).isPresent())
			return Optional.empty();
		email.setPassword(criptografarSenha(email.getPassword()));
		return Optional.of(userRepository.save(email));
	}

	public Optional<UserModel> atualizarUsuario(UserModel email) {
		if (userRepository.findByEmail(email.getEmail()).isPresent()) {
			email.setPassword(criptografarSenha(email.getPassword()));
			return Optional.of(userRepository.save(email));
		}
		return Optional.empty();
	}

	public Optional<UsuarioLogin> autenticarUsuario(Optional<UsuarioLogin> usuarioLogin) {
		Optional<UserModel> email = userRepository.findByEmail(usuarioLogin.get().getEmail());
		if (email.isPresent()) {
			if (compararSenhas(usuarioLogin.get().getPassword(), email.get().getPassword())) {
				usuarioLogin.get().setId(email.get().getId());
				usuarioLogin.get().setName(email.get().getName());
				usuarioLogin.get().setPhoto(email.get().getPhoto());
				usuarioLogin.get()
						.setToken(gerarBasicToken(usuarioLogin.get().getEmail(), usuarioLogin.get().getPassword()));
				usuarioLogin.get().setPassword(email.get().getPassword());
				return usuarioLogin;
			}
		}
		return Optional.empty();
	}

	private String criptografarSenha(String password) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(password);
	}

	private boolean compararSenhas(String senhaDigitada, String senhaBanco) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.matches(senhaDigitada, senhaBanco);
	}

	private String gerarBasicToken(String usuario, String senha) {
		String token = usuario + ":" + senha;
		byte[] tokenBase64 = Base64.encodeBase64(token.getBytes(Charset.forName("US-ASCII")));
		return "Basic " + new String(tokenBase64);
	}

}
