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

    private String description;
    @Enumerated(EnumType.STRING)
    private BuildinType type;

    @ManyToMany
    @JoinTable(
            name = "building_npc",
            joinColumns = @JoinColumn(name = "building_id"),
            inverseJoinColumns = @JoinColumn(name = "npc_id")
    )
    private List<NPC> npc;

    private String bgUrl;
}
