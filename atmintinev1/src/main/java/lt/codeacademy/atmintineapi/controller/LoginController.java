package lt.codeacademy.atmintineapi.controller;

import lt.codeacademy.atmintineapi.dto.LoggedInUserDto;
import lt.codeacademy.atmintineapi.model.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @PostMapping
    public LoggedInUserDto login(@AuthenticationPrincipal User user) {
        return new LoggedInUserDto(user);
    }
}
