package pl.SFG.SGF.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.SFG.SGF.model.game.fighting.FightResult;
import pl.SFG.SGF.service.fight.FightCalculator;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/fight")
public class FightController {
    private final FightCalculator fightCalculator;
    @GetMapping("/arena")
    public FightResult getArenaFightResult(
            @RequestParam Long heroId,
            @RequestParam Long enemyId){
        return fightCalculator.fight(heroId,enemyId);
    }
//    @PostMapping("/arena")
//    public FightResult startFight(
//            @RequestParam Long heroId,
//            @RequestParam Long enemyId
//    ) {
//        return fightCalculator.fight(heroId, enemyId);
//    }

//    @GetMapping("/arena/{fightId}")
//    public FightResult getFight(
//            @PathVariable Long fightId
//    ) {
//        return fightCalculator.getFight(fightId);
//    }
}
