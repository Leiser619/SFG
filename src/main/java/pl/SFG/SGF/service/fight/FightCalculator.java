package pl.SFG.SGF.service.fight;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.game.Fighting.AttackEvent;
import pl.SFG.SGF.model.game.Fighting.FightAction;
import pl.SFG.SGF.model.game.Fighting.FightResult;
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
        PriorityQueue<AttackEvent> queue =
                new PriorityQueue<>(
                        Comparator.comparingDouble(AttackEvent::getTime)
                );

        FightResult fightResult=new FightResult();
        while(hero.getHealth() > 0 && enemy.getHealth() > 0){

            AttackEvent event = queue.poll();

            FighterStatsDto attacker = event.getAttacker();
            FighterStatsDto target = event.getTarget();

            int damage = calculateDamage(attacker, target);

            target.setHealth(
                    Math.max(0, target.getHealth() - damage)
            );

            FightAction action = new FightAction();

            action.setAttacker(attacker.getName());
            action.setTarget(target.getName());
            action.setDamage(damage);
            action.setTargetRemainingHp(target.getHealth());

            fightResult.getActions().add(action);

            // jeżeli przeciwnik przeżył, dodaj następny atak
            if(target.getHealth() > 0){

                double nextTime =
                        event.getTime() +
                                (1.0 / attacker.getSpeed());

                queue.add(
                        new AttackEvent(
                                attacker,
                                target,
                                nextTime
                        )
                );
            }
        }




        return fightResult;
    }



//  Damage calculator now its pretty simple
    public int calculateDamage(FighterStatsDto attacker, FighterStatsDto target){
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
        return attack;

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
                .luck(calculatedHCS.getMagic())
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
