package pl.SFG.SGF.model.game.Missions;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.model.game.Item;
import pl.SFG.SGF.model.game.faction.FactionPoints;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name="mission")
public class Mission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private int money;

    private int exp;

    @Embedded
    private FactionPoints factionPoints;


    @Column(name="mission_type")
    private MissionType missionType;

}
