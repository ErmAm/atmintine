package lt.codeacademy.atmintineapi.controller;

import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UsersController {

    private final UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("all")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public List<User> getAllUsersInDB(){
        return userService.getAllUsers();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewUSer(@Valid @RequestBody User user){
        userService.addNewUser(user);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping(value = "/{UUID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable("UUID") UUID uuid) {
        return userService.getUser(uuid);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping(value = "/{UUID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable("UUID") UUID uuid) {
        userService.delete(uuid);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PutMapping
    public User updateTagItem(@Valid @RequestBody User Uesr) {
        return userService.update(Uesr);
    }


}
