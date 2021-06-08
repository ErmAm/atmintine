package lt.codeacademy.atmintineapi.repository;

import lt.codeacademy.atmintineapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}