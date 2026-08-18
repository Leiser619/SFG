package pl.SFG.SGF.model.game.fighting;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Fight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long heroId;
    private Long enemyId;

    private boolean heroWon;

    private int rewardGold;
    private int rewardExp;

    private boolean rewardClaimed;
}