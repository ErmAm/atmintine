package lt.codeacademy.atmintineapi.service;

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

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void addNewUser(User user){
        try {
            if (user != null){
                userRepository.save(user);
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }


}
