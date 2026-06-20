package pl.SFG.SGF.model.game.fighting;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@Data
public class FightResult {

    private boolean heroWon;

    private List<FightAction> actions;
}
