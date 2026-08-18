package pl.SFG.SGF.model.game.Missions;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class Reward {
    int exp;
    int gold;
    @Nullable
    Long item_id;
}
