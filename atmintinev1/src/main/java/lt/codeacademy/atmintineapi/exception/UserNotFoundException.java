package lt.codeacademy.atmintineapi.exception;

import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException{
    private final String userID;
    private final String message;

    public UserNotFoundException(String userID) {
        this.userID = userID;
        message = String.format("Tokio userio %s nera", userID);
    }
}
