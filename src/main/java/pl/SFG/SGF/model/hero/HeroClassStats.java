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

    @Column(nullable = false)
    private int health;

    @Column(nullable = false)
    private int attack;

    @Column(nullable = false)
    private int magic;

    @Column(nullable = false)
    private int speed;

    @Column(nullable = false,name="backpack_space")
    private int backpackSpace;

    @Column(nullable = false,name="spell_space")
    private int spellSpace;


}