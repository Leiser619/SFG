package pl.SFG.SGF.service;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import pl.SFG.SGF.dto.auth.AuthResponse;
import pl.SFG.SGF.dto.auth.LoginRequest;
import pl.SFG.SGF.dto.auth.RegisterRequest;
import pl.SFG.SGF.model.Role;
import pl.SFG.SGF.model.User;
import pl.SFG.SGF.repository.UserRepository;
import pl.SFG.SGF.security.UserPrincipal;

import java.sql.Time;
import java.sql.Timestamp;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Transactional
    public void register(RegisterRequest req) {
        String email = req.email().trim().toLowerCase();
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new EntityExistsException("Email już zajęty.");
        }

        if (userRepository.existsByGuildName(req.guildName())) {
            throw new EntityExistsException("Nazwa glildii już zajęty.");
        }

        User user = new User();
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(req.password()));
        user.setRole(Role.USER);
        user.setMoney(0);
        user.setAssassinPoints(0);
        user.setMagePoints(0);
        user.setMerchantPoints(0);;
        user.setGuildName(req.guildName());
        userRepository.save(user);
    }

    public String login(LoginRequest req) {
        var auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.email(), req.password())
        );

        var principal = (UserPrincipal) auth.getPrincipal();

        return jwtService.generateToken(
                principal.getId(),
                principal.getUsername()
        );
    }
}