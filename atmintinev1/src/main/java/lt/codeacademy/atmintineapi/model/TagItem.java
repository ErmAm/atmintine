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

    @Column(name="real_place_name")
    private String realPlaceName;

    private String description;
    //    Čia privalumai tiesiog vėliavėlės.

    @Column(name="has_shed")
    private Boolean hasShed;

    @Column(name="has_fireplace")
    private Boolean hasFireplace;

    @Column(name="has_wc")
    private Boolean hasWC;

    @Column(name="has_lake_nearby")
    private Boolean hasLakeNearby;

}
