package pl.SFG.SGF.model.game.Fighting;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;

@Getter
@Setter
@AllArgsConstructor
 public class AttackEvent {

    private FighterStatsDto attacker;
    private FighterStatsDto target;
    private double time;
}