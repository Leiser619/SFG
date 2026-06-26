package pl.SFG.SGF.dto.fighting;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.dto.hero.HeroClass;

@Getter
@Builder
@Setter
public class FighterStatsDto {

    private Long id;

    private String name;

    private String avatarUrl;

    private HeroClass heroClass;
    private int health;

    private int attack;

    private int magic;

    private float speed;

    private int shield;

    private int luck;
}