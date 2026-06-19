package pl.SFG.SGF.model.hero;

import jakarta.persistence.*;
import lombok.Data;
import pl.SFG.SGF.dto.hero.HeroClass;

@Entity
@Data
public class HeroClassGrowth {
    @Id
    @Enumerated(EnumType.STRING)
    @Column(nullable = false,name="hero_class")
    private HeroClass heroClass;
    @Column(nullable = false, name="health_per_level")
    private int healthPerLevel;

    @Column(nullable = false ,name="attack_per_level")
    private int attackPerLevel;

    @Column(nullable = false, name="magic_per_level")
    private int magicPerLevel;

    @Column(nullable = false, name="speed_per_level")
    private float speedPerLevel;

    @Column(nullable = false, name="shield_per_level")
    private int shieldPerLevel;

    @Column(nullable = false, name="luck_per_level")
    private int luckPerLevel;
}
