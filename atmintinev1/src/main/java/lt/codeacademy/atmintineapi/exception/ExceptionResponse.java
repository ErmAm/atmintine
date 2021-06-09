package lt.codeacademy.atmintineapi.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Getter
public class ExceptionResponse {
    private String message;
    private Long timeStamp;
    private int status;

    public ExceptionResponse(String message, HttpStatus status) {
        this.message = message;
        this.status=status.value();
        timeStamp= LocalDateTime.now().atZone(ZoneOffset.systemDefault()).toInstant().toEpochMilli();
    }



}
