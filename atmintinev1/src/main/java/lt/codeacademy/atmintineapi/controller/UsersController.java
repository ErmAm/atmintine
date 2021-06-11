package lt.codeacademy.atmintineapi.controller;

import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/atmintine/api/users")
public class UsersController {

    private final UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("all")
    public List<User> getAllUsersInDB(){
        return userService.getAllUsers();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewUSer(@Valid @RequestBody User user){
//        TODO sukurti servisą paimantį iš formos info.
        userService.addNewUser(user);
    }

}
