package pl.SFG.SGF.service.fight;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.fighting.DamageDto;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.game.fighting.FightAction;
import pl.SFG.SGF.model.game.fighting.FightResult;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.model.hero.HeroClassGrowth;
import pl.SFG.SGF.model.hero.HeroClassStats;
import pl.SFG.SGF.service.ProfileService;
import pl.SFG.SGF.service.game.EnemyService;
import pl.SFG.SGF.service.game.HeroClassGrowthService;
import pl.SFG.SGF.service.game.HeroStatsService;

import java.util.*;


@Service
@RequiredArgsConstructor
public class FightCalculator {
    private final HeroClassGrowthService heroClassGrowthService;
    private final HeroStatsService heroStatsService;
    private final EnemyService enemyService;
    private final ProfileService profileService;
    Random rand = new Random();



    public FightResult fight(Long heroId, Long enemyId){
        Hero heroForm= profileService.getHeroById(heroId);
        Enemy enemForm=enemyService.getEnemyById(enemyId);

        FighterStatsDto hero= fromHero(heroForm);
        FighterStatsDto enemy=fromEnemy(enemForm);

        FightResult fightResult=new FightResult();

        FightAction heroFightAction=new FightAction();
        FightAction enemyFightAction=new FightAction();


        float nextHeroAttack = hero.getSpeed();
        float nextEnemyAttack = enemy.getSpeed();

        while (hero.getHealth() > 0 && enemy.getHealth() > 0) {

            if (nextHeroAttack <= nextEnemyAttack) {

                DamageDto damage = calculateDamage(hero, enemy);

                heroFightAction.getAttackTime().add(nextHeroAttack);
                heroFightAction.getDamage().add(damage.getDamage());
                heroFightAction.getCrit().add(damage.isCrit());

                enemy.setHealth(enemy.getHealth() - damage.getDamage());

                nextHeroAttack += hero.getSpeed();

            } else {

                DamageDto damage = calculateDamage(enemy, hero);

                enemyFightAction.getAttackTime().add(nextEnemyAttack);
                enemyFightAction.getDamage().add(damage.getDamage());
                enemyFightAction.getCrit().add(damage.isCrit());

                hero.setHealth(hero.getHealth() - damage.getDamage());

                nextEnemyAttack += enemy.getSpeed();
            }
        }
        if(hero.getHealth()>enemy.getHealth()){
            fightResult.setHeroWon(true);
        } else {
            fightResult.setHeroWon(false);
        }


        fightResult.getActions().add(heroFightAction);
        fightResult.getActions().add(enemyFightAction);

        return fightResult;
    }



//  Damage calculator now its pretty simple
    public DamageDto calculateDamage(FighterStatsDto attacker, FighterStatsDto target){
        DamageDto damageDto=new DamageDto();
        int attack;
        boolean crit=false;
        if(rand.nextInt(100) <= attacker.getLuck()){
            crit=true;
        }else {
            crit=false;
        }

        if (attacker.getHeroClass()==HeroClass.MAGE){
            attack=(attacker.getAttack()+ attacker.getMagic())-(target.getShield()/2);
        }else{
            attack=(attacker.getAttack()-(target.getShield()/2));
        }
        if(crit){
            attack=attack*2;
        }

        if (attack < 1) {
            attack = 1;
        }
        damageDto.setDamage(attack);
        damageDto.setCrit(crit);

        return damageDto;

    }




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

//        for(HeroBackpack backpack : hero.getItems()) {
//
//            if(!backpack.isEquipped()) {
//                continue;
//            }
//
//            Item item = backpack.getItem();
//
//            attack += item.getAttackBonus();
//            health += item.getHealthBonus();
//        }

        return FighterStatsDto.builder()
                .id(hero.getId())
                .name(hero.getName())
                .heroClass(hero.getHeroClass())
                .health(calculatedHCS.getHealth())
                .attack(calculatedHCS.getAttack())
                .shield(calculatedHCS.getShield())
                .speed(calculatedHCS.getSpeed())
                .magic(calculatedHCS.getMagic())
                .luck(calculatedHCS.getLuck())
            .build();
    }






/// This part calculate heroClassStats multiplying it by level
    private HeroClassStats calculateHCS(Hero hero) {
        HeroClassStats hcs=new HeroClassStats();
        HeroClassStats basicHCS= heroStatsService.getStatsByHeroClass(hero.getHeroClass());
        HeroClassGrowth hcg=heroClassGrowthService.findByHeroClass(hero.getHeroClass());
        int multiplier=hero.getLevel();
        hcs.setAttack(basicHCS.getAttack()+(multiplier*hcg.getAttackPerLevel()));
        hcs.setLuck(basicHCS.getLuck()+(multiplier*hcg.getLuckPerLevel()));
        hcs.setHealth(basicHCS.getHealth()+(multiplier*hcg.getHealthPerLevel()));
        hcs.setMagic(basicHCS.getMagic()+(multiplier*hcg.getMagicPerLevel()));
        hcs.setShield(basicHCS.getShield()+(multiplier*hcg.getShieldPerLevel()));
        hcs.setSpeed(basicHCS.getSpeed()+(multiplier*hcg.getSpeedPerLevel()));
        return hcs;

    }


}
