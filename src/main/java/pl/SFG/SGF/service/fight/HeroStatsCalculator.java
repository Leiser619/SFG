package pl.SFG.SGF.service.fight;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.model.hero.HeroClassGrowth;
import pl.SFG.SGF.model.hero.HeroClassStats;
import pl.SFG.SGF.service.game.HeroClassGrowthService;
import pl.SFG.SGF.service.game.HeroStatsService;

@Service
@RequiredArgsConstructor
public class HeroStatsCalculator {
    private final HeroStatsService heroStatsService;
    private final HeroClassGrowthService heroClassGrowthService;

    public FighterStatsDto fromEnemy(Enemy enemy) {
        return FighterStatsDto.builder()
                .id(enemy.getId())
                .name(enemy.getName())
                .avatarUrl(enemy.getAvatarUrl())
                .health(enemy.getHealth())
                .attack(enemy.getAttack())
                .magic(enemy.getMagic())
                .speed(enemy.getSpeed())
                .shield(enemy.getShield())
                .heroClass(enemy.getHeroClass())
                .luck(enemy.getLuck())
                .build();
    }
    public FighterStatsDto fromHero(Hero hero) {
        HeroClassStats calculatedHCS= calculateHCS(hero);
        // TODO: ADD METHOD THAT WILL CALCULATE ATTACK WITH ITEMS EQUIPED
        // for(HeroBackpack backpack : hero.getItems()) {
        // // if(!backpack.isEquipped()) {
        // continue; // }
        // // Item item = backpack.getItem();
        // // attack += item.getAttackBonus();
        // health += item.getHealthBonus();
        // }
        return FighterStatsDto.builder()
                .id(hero.getId())
                .name(hero.getName())
                .avatarUrl(calculatedHCS.getAvatarUrl())
                .heroClass(hero.getHeroClass())
                .health(calculatedHCS.getHealth())
                .attack(calculatedHCS.getAttack())
                .shield(calculatedHCS.getShield())
                .speed(calculatedHCS.getSpeed())
                .magic(calculatedHCS.getMagic())
                .luck(calculatedHCS.getLuck())
                .build();
    }



    /// This function calculate heroClassStats multiplying it by level
    public HeroClassStats calculateHCS(Hero hero) {
        HeroClassStats hcs=new HeroClassStats();
        HeroClassStats basicHCS= heroStatsService.getStatsByHeroClass(hero.getHeroClass());
        HeroClassGrowth hcg=heroClassGrowthService.findByHeroClass(hero.getHeroClass());
        int multiplier=hero.getLevel();
        hcs.setAvatarUrl(basicHCS.getAvatarUrl());
        hcs.setAttack(basicHCS.getAttack()+(multiplier*hcg.getAttackPerLevel()));
        hcs.setLuck(basicHCS.getLuck()+(multiplier*hcg.getLuckPerLevel()));
        hcs.setHealth(basicHCS.getHealth()+(multiplier*hcg.getHealthPerLevel()));
        hcs.setMagic(basicHCS.getMagic()+(multiplier*hcg.getMagicPerLevel()));
        hcs.setShield(basicHCS.getShield()+(multiplier*hcg.getShieldPerLevel()));
        hcs.setSpeed(basicHCS.getSpeed()+(multiplier*hcg.getSpeedPerLevel()));
        return hcs;
    }
}
