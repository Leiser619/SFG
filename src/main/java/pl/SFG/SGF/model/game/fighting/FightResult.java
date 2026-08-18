package pl.SFG.SGF.model.game.fighting;

import lombok.Data;
import pl.SFG.SGF.model.game.Missions.Reward;

import java.util.ArrayList;
import java.util.List;

@Data
public class FightResult {
    private Long fightId;

    public boolean heroWon;

    private List<FightAction> actions = new ArrayList<>();
    private Reward reward;

}
