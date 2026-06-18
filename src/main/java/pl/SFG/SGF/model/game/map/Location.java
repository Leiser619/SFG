package pl.SFG.SGF.model.game.map;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.model.game.Buildings.Building;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name="location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "location_name")
    private LocationName locationName;

    private String description;

    @Column(nullable = false, name = "bg_url")
    private String backgroundUrl;

    @Column(nullable = false,name = "required_level")
    private int requiredLevel;

    @ManyToMany
    @JoinTable(
            name = "location_building",
            joinColumns = @JoinColumn(name = "location_id"),
            inverseJoinColumns = @JoinColumn(name = "building_id")
    )
    private List<Building> buildings;
}
