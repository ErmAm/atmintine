package lt.codeacademy.atmintineapi.exception;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public class TagItemNotFoundException extends RuntimeException {

    private final String tagItemId;
    private final String message;

    public TagItemNotFoundException(String tagItemId) {
        this.tagItemId = tagItemId;

//        TODO multilang reikia padaryti kažkaip visamekame
        message = String.format("Tokio tag'o %s nera", tagItemId);
    }
}
