package pl.SFG.SGF.dto.fighting;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FighterStatsDto {

    private Long id;

    private String name;

    private String avatarUrl;

    private int health;

    private int attack;

    private int magic;

    private float speed;

    private int shield;

    private int luck;
}