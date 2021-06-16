package lt.codeacademy.atmintineapi.service;

import lt.codeacademy.atmintineapi.exception.UserNotFoundException;
import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public void addNewUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));


        try {
            if (user != null) {
                userRepository.save(user);
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }


    public User getUser(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id.toString()));
    }

    public User update(User User) {
        return userRepository.save(User);
    }

    public void delete(UUID id) {
        userRepository.deleteById(id);
    }




}
