package lt.codeacademy.atmintineapi.repository;

import lt.codeacademy.atmintineapi.model.Role;
import lt.codeacademy.atmintineapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    Optional<User> findByUsername(String username);


    //@Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.username = :username")
//    @Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.username = :username")
//    Optional<User> findByNameWithRoles(@Param("username") String username);

//    @Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.username = :username")
//    Optional<User> findByNameWithRoles(@Param("username") String username);

//    Optional<User> findUserByRoles(String role);

    Optional<User> findUserByUsername(String username);

}
