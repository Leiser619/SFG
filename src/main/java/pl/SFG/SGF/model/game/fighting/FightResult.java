package pl.SFG.SGF.model.game.Fighting;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
public class FightResult {

    public boolean heroWon;

    public List<FightAction> actions;
}
