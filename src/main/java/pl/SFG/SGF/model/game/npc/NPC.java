package pl.SFG.SGF.model.game.npc;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.model.game.Missions.Mission;
import pl.SFG.SGF.model.game.faction.FactionType;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name="npc")
public class NPC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "faction_type")
    private FactionType factionType;

    @OneToMany
    @JoinColumn(name = "npc_id")
    private List<Mission> missions;

    @Column(name="avatar_url")
    private String avatarUrl;
}
