package pl.SFG.SGF.model.game.Buildings;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.model.game.npc.NPC;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name="building")
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String desc;
    @Enumerated(EnumType.STRING)
    private BuildinType type;

    @OneToMany
    @JoinColumn(name = "building_id")
    private List<NPC> npc;

    private String bgUrl;
}
