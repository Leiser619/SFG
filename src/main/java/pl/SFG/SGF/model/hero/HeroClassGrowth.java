package pl.SFG.SGF.model.hero;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import pl.SFG.SGF.dto.hero.HeroClass;

@Entity
public class HeroClassGrowth {
    @Id
    @Enumerated(EnumType.STRING)
    private HeroClass heroClass;

    private int healthPerLevel;
    private int attackPerLevel;
}
