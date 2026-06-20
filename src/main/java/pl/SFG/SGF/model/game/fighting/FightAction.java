package pl.SFG.SGF.model.game.fighting;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FightAction {

    private String attacker;

    private String target;

    private int damage;

    private boolean critical;

    private int targetRemainingHp;


}