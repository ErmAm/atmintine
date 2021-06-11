package lt.codeacademy.atmintineapi.service;

import lt.codeacademy.atmintineapi.exception.TagItemNotFoundException;
import lt.codeacademy.atmintineapi.exception.UserNotFoundException;
import lt.codeacademy.atmintineapi.model.TagItem;
import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    getAll

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //    add
    public void addNewUser(User user) {
        try {
            if (user != null) {
                userRepository.save(user);
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    //    get
    public User getUser(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id.toString()));
    }

    //    update
    public User update(User User) {
        return userRepository.save(User);
    }

    //delete
    public void delete(UUID id) {
        userRepository.deleteById(id);
    }

}
