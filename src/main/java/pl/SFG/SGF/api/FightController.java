package pl.SFG.SGF.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.SFG.SGF.model.game.fighting.FightResult;
import pl.SFG.SGF.service.fight.FightCalculator;

@RequiredArgsConstructor
@RestController
@RequestMapping("/fight")
public class FightController {
private final FightCalculator fightCalculator;

@GetMapping("/arena")
public FightResult getArenaFightResult(Long heroId,Long enemyId){
    return fightCalculator.fight(heroId,enemyId);
}
}
