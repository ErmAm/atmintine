package lt.codeacademy.atmintineapi.service;

import lt.codeacademy.atmintineapi.exception.CommentNotFoundException;
import lt.codeacademy.atmintineapi.model.Comment;
import lt.codeacademy.atmintineapi.repository.CommentRepository;
import lt.codeacademy.atmintineapi.repository.TagItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final TagItemRepository tagItemRepository;

    public CommentService(CommentRepository commentRepository, TagItemRepository tagItemRepository) {
        this.commentRepository = commentRepository;
        this.tagItemRepository = tagItemRepository;
    }


    public void addComment(Comment comment){
        try {
            if (comment != null){
                commentRepository.save(comment);
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    public Comment getComment(UUID id){
        return commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException(id.toString()));
    }

    public List<Comment> getAllCommentsById(UUID id){
        return commentRepository.findAllByTagItemId(id).orElseThrow(
                ()-> new CommentNotFoundException(id.toString()));
    }


    public List<Comment> getComments(){
        return commentRepository.findAll();
    }

    public Comment update(Comment comment){
        return commentRepository.save(comment);
    }

    public void delete(UUID id){
        commentRepository.deleteById(id);
    }
}
