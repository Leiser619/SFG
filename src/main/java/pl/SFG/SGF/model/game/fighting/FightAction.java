package pl.SFG.SGF.model.game.fighting;

import lombok.Data;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;

import java.util.ArrayList;
import java.util.List;

@Data
public class FightAction {

    private FighterStatsDto attacker;

    private FighterStatsDto target;

    private List<Integer> damage = new ArrayList<>();
    private List<Float> attackTime = new ArrayList<>();
    private List<Boolean> crit = new ArrayList<>();

}