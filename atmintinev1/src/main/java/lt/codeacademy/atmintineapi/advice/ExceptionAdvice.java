package lt.codeacademy.atmintineapi.advice;

import lt.codeacademy.atmintineapi.exception.ExceptionResponse;
import lt.codeacademy.atmintineapi.exception.TagItemNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(TagItemNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ExceptionResponse handlingTagItemNotFoundException(TagItemNotFoundException exception){
        return new ExceptionResponse(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
}
