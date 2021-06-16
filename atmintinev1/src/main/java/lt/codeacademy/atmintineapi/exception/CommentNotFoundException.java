package lt.codeacademy.atmintineapi.exception;

import lombok.Getter;

@Getter
public class CommentNotFoundException extends RuntimeException{


    private final String commentId;
    private final String message;

    public CommentNotFoundException(String commentId) {
        this.commentId = commentId;
        message = String.format("Tokio komentaro %s nera", commentId);
    }
}
