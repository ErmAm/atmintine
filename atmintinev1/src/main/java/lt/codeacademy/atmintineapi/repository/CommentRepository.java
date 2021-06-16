package lt.codeacademy.atmintineapi.repository;

import lt.codeacademy.atmintineapi.model.Comment;
import lt.codeacademy.atmintineapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CommentRepository extends JpaRepository<Comment, UUID> {

    Optional<List<Comment>> findAllByTagItemId(UUID id);
}
