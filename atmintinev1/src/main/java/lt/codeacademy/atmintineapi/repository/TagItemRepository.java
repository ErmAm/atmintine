package lt.codeacademy.atmintineapi.repository;

import lt.codeacademy.atmintineapi.model.TagItem;
import lt.codeacademy.atmintineapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TagItemRepository extends JpaRepository<TagItem, UUID> {

    List<TagItem> findByName(String name);

    List<TagItem> findByNameLikeOrDescriptionLike(String name, String description);

}
