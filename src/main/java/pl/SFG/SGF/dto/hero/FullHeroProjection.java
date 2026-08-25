package pl.SFG.SGF.dto.hero;

import jakarta.persistence.Column;
import pl.SFG.SGF.model.game.Item;
import pl.SFG.SGF.model.hero.HeroBackpack;

import java.util.List;

public record FullHeroProjection(
        String name,
        HeroClass heroClass,
        int exp,
        List<HeroBackpack> items,
        int level,
        int tiredness,
        String avatarUrl,
        int health,
        int attack,
        int magic,
        float speed,
        int shield,
        int luck
){}