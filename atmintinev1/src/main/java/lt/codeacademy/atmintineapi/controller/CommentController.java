package lt.codeacademy.atmintineapi.controller;


import io.swagger.annotations.Api;
import lt.codeacademy.atmintineapi.model.Comment;
import lt.codeacademy.atmintineapi.model.TagItem;
import lt.codeacademy.atmintineapi.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/comments")
@Api(tags="This is Comment controller")
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Comment> getTagItems() {
        return commentService.getComments();
    }

    @GetMapping(value = "/{UUID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Comment getTagItem(@PathVariable("UUID") UUID uuid) {
        return commentService.getComment(uuid);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(@Valid @RequestBody Comment comment) {
        commentService.addComment(comment);
    }

    @DeleteMapping(value = "/{UUID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable("UUID") UUID uuid) {
        commentService.delete(uuid);
    }

    @PutMapping
    public Comment updateComment(@Valid @RequestBody Comment comment) {
        return commentService.update(comment);
    }

}
