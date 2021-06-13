package lt.codeacademy.atmintineapi.service;

import lt.codeacademy.atmintineapi.exception.UserNotFoundException;
import lt.codeacademy.atmintineapi.model.User;
import lt.codeacademy.atmintineapi.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
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


//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return userRepository.findWithRolesByUsername(username)
//                .orElseThrow(() -> new UserNotFoundException(username));
//    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
//        System.out.println(userRepository.findByUsername(username).toString());
        UUID uuid = UUID.fromString("00000000-0000-000a-000f-000000000001");

        userRepository.findById(uuid);
        return userRepository.findWithRolesByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
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
