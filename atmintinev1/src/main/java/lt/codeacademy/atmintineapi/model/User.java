package lt.codeacademy.atmintineapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User implements UserDetails {

    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    @NotBlank
    private String name;

    @NotBlank
    private String surname;

    @NotBlank
    private String email;

    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;




    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }


//    @Id
//    @GeneratedValue
//    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
//    @Type(type = "uuid-char")
//    private UUID id;
//
//    @Column(name="username")
//    private String username;
//
//    @Column(name="password")
//    private String password;
//
//    private String name;
//
//    private String surname;
//
//    private String email;
//
//    @Column(name="phone_number")
//    private String phoneNumber;
//
//    private String city;
//
////    Čia yra nesamonė kažkokia kodėl neveikia.
//    @ManyToMany
//    private Set<Role> roles;
//
//    @Column(name="tags")
//    @OneToMany
//    private List<TagItem> tagItemList;
//
////    Čia svarbi vieta autorities grąžinti
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return roles;
//    }
//
//    @Override
//    public String getUsername() {
//        return username;
//    }
//
//    @Override
//    public String getPassword() {
//        return password;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }

//    public String getFullName() {
//        return name + " " + surname;
//    }
}
