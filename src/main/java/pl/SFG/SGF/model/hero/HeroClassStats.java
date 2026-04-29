package pl.SFG.SGF.model.hero;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.dto.hero.HeroClass;

@Entity
@Getter
@Setter
@Table(name = "hero_class_stats")
public class HeroClassStats {

    @Id
    @Enumerated(EnumType.STRING)
    @Column(name = "hero_class")
    private HeroClass heroClass;

    @Column(nullable = false, name = "avatar_url")
    private String avatarUrl;

    @Column(nullable = false, name="base_health")
    private int health;

    @Column(nullable = false, name="base_attack")
    private int attack;

    @Column(nullable = false, name="base_magic")
    private int magic;

    @Column(nullable = false, name="base_speed")
    private int speed;

    @Column(nullable = false, name="base_shield")
    private int shield;

    @Column(nullable = false, name="base_luck")
    private int luck;

    @Column(nullable = false,name="base_backpack_space")
    private int backpackSpace;

    @Column(nullable = false,name="base_spell_space")
    private int spellSpace;


}