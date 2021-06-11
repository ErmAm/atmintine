package lt.codeacademy.atmintineapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import javax.persistence.*;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;

    private String username;

    private String name;

    private String surname;

    private String email;

    @Column(name="phone_number")
    private String phoneNumber;

    private String city;

    @ManyToMany
    private Set<Role> roles;

    @Column(name="tags")
    @OneToMany
    private List<TagItem> tagItemList;
}
