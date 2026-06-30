package pl.SFG.SGF.model.game.fighting;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class FightResult {

    public boolean heroWon;

    private List<FightAction> actions = new ArrayList<>();
}
