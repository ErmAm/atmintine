package lt.codeacademy.atmintineapi.controller;

import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    private final UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("all")
    public List<User> getAllUsersInDB(){
        return userService.getAllUsers();
    }

}
