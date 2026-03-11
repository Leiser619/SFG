package pl.SFG.SGF.model.hero;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import pl.SFG.SGF.dto.hero.HeroClass;

@Entity
public class HeroClassStats {

    @Id
    @Enumerated(EnumType.STRING)
    private HeroClass heroClass;

    private int health;
    private int attack;
    private int magic;
    private int speed;
}
