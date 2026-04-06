package pl.SFG.SGF.model.game;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.dto.ItemTypeEnum;

@Entity
@Setter
@Getter
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Enumerated(EnumType.STRING)
    private ItemTypeEnum type;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, name="attack_bonus")
    private int attackBonus;

    @Column(nullable = false, name="health_bonus")
    private int healthBonus;

    @Column(nullable = false, name = "avatar_url")
    private String avatarUrl;

    @Column(nullable = false, name = "magic_bonus")
    private int magic;

    @Column(nullable = false, name = "speed_bonus")
    private int speed;

    @Column(nullable = false, name = "luck_bonus")
    private int luck;

}