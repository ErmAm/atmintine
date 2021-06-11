package lt.codeacademy.atmintineapi.controller;

import lt.codeacademy.atmintineapi.model.TagItem;
import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

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


//    like metodai, čia biški bardakėlis bet kol kas taip reikia

    @GetMapping(value = "/{UUID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable("UUID") UUID uuid) {
        return userService.getUser(uuid);
    }

    @DeleteMapping(value = "/{UUID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable("UUID") UUID uuid) {
        userService.delete(uuid);
    }

    @PutMapping
    public User updateTagItem(@Valid @RequestBody User Uesr) {
        return userService.update(Uesr);
    }


}
