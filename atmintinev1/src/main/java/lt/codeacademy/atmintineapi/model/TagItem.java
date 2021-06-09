package lt.codeacademy.atmintineapi.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tagitem")
public class TagItem {

    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;

    @NotBlank
    private String name;

    @NotBlank
    private String latitude;

    @NotBlank
    private String longitude;

    private String realPlaceName;

    private String description;
    //    Čia privalumai tiesiog vėliavėlės.

    private Boolean hasShed;

    private Boolean hasFireplace;

    private Boolean hasWC;

    private Boolean hasLakeNearby;

}
