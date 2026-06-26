package pl.SFG.SGF.model.game.Fighting;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
public class FightAction {

    private String attacker;

    private String target;

    private int damage;

    private boolean critical;

    private int targetRemainingHp;


}