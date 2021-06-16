package lt.codeacademy.atmintineapi.exception;

import lombok.Getter;


@Getter
public class TagItemNotFoundException extends RuntimeException {

    private final String tagItemId;
    private final String message;

    public TagItemNotFoundException(String tagItemId) {
        this.tagItemId = tagItemId;
        message = String.format("Tokio tag'o %s nera", tagItemId);
    }
}
