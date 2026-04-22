package pl.SFG.SGF.api;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import pl.SFG.SGF.dto.auth.LoginRequest;
import pl.SFG.SGF.dto.auth.RegisterRequest;
import pl.SFG.SGF.security.UserPrincipal;
import pl.SFG.SGF.service.AuthService;

import java.time.Duration;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@Valid @RequestBody RegisterRequest req) {
        authService.register(req);
    }

    @PostMapping("/login")
    public void login(@Valid @RequestBody LoginRequest req, HttpServletResponse response) {

        String token = authService.login(req); // ZWRACAJ STRING zamiast AuthResponse

        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .secure(false) // true na produkcji (HTTPS)
                .path("/")
                .maxAge(Duration.ofDays(1))
                .sameSite("Lax")
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }
    @GetMapping("/me")
    public String me(@AuthenticationPrincipal UserPrincipal user) {
        return user.getEmail();
    }
}