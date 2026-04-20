package pl.SFG.SGF.dto.game;

import pl.SFG.SGF.model.game.Region;

public record EnemyReq(Long regionId,
                       String name,
                       int level,
                       String avatarUrl,
                       int health,
                       int attack,
                       int magic,
                       int speed) {
}
