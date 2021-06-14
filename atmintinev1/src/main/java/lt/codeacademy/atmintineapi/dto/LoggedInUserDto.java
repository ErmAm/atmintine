package lt.codeacademy.atmintineapi.dto;


import lombok.Data;
import lt.codeacademy.atmintineapi.model.Role;
import lt.codeacademy.atmintineapi.model.User;

import java.util.Set;

import static java.util.stream.Collectors.toSet;

@Data
public class LoggedInUserDto {

    private String username;
    private Set<String> roles;
    private String fullName;

    public LoggedInUserDto(User user) {
        this.username = user.getUsername();
        this.roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(toSet());
        this.fullName = user.getName() + " " + user.getSurname();
    }

}
