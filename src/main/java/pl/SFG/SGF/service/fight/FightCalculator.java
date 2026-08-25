package pl.SFG.SGF.service.fight;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.fighting.DamageDto;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.game.Missions.Reward;
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
    private final EnemyService enemyService;
    private final ProfileService profileService;
    private final HeroStatsCalculator heroStatsCalculator;
    Random rand = new Random();



    public FightResult fight(Long heroId, Long enemyId) {
        Hero heroForm = profileService.getHeroById(heroId);
        Enemy enemForm = enemyService.getEnemyById(enemyId);
        Reward reward = new Reward();
        Random random = new Random();
        FighterStatsDto hero = heroStatsCalculator.fromHero(heroForm);
        FighterStatsDto enemy = heroStatsCalculator.fromEnemy(enemForm);
        FightResult fightResult = new FightResult();
        FightAction heroFightAction = new FightAction();
        FightAction enemyFightAction = new FightAction();
        float heroAttackInterval = attackInterval(hero.getSpeed());
        float enemyAttackInterval = attackInterval(enemy.getSpeed());
        float nextHeroAttack = heroAttackInterval;
        float nextEnemyAttack = enemyAttackInterval;


        int heroHp=hero.getHealth();
        int enemyHP=enemy.getHealth();
        heroFightAction.getTargetHpLeft().add(enemyHP);
        enemyFightAction.getTargetHpLeft().add(heroHp);
        while (hero.getHealth() > 0 && enemy.getHealth() > 0){
            if (nextHeroAttack <= nextEnemyAttack) {
                DamageDto damage = calculateDamage(hero, enemy);
                enemyHP=enemyHP-damage.getDamage();
                heroFightAction.getTargetHpLeft().add(enemyHP);
                heroFightAction.setAttacker(hero);
                heroFightAction.setTarget(enemy);
                heroFightAction.getAttackTime().add(nextHeroAttack);
                heroFightAction.getDamage().add(damage.getDamage());
                heroFightAction.getCrit().add(damage.isCrit());
                enemy.setHealth(enemy.getHealth() - damage.getDamage());
                nextHeroAttack += heroAttackInterval;

            }else {
                DamageDto damage = calculateDamage(enemy, hero);
                heroHp=heroHp-damage.getDamage();
                enemyFightAction.getTargetHpLeft().add(heroHp);
                enemyFightAction.setAttacker(enemy);
                enemyFightAction.setTarget(hero);
                enemyFightAction.getAttackTime().add(nextEnemyAttack);
                enemyFightAction.getDamage().add(damage.getDamage());
                enemyFightAction.getCrit().add(damage.isCrit());
                hero.setHealth(hero.getHealth() - damage.getDamage());
                nextEnemyAttack += enemyAttackInterval;
            }
        }
        if(hero.getHealth()>enemy.getHealth()){
            fightResult.setHeroWon(true);
            int reward_exp=random.nextInt((enemForm.getMaxExp()-enemForm.getMinExp())+enemForm.getMinExp());
            int reward_gold=random.nextInt((enemForm.getMaxGold()-enemForm.getMinGold())+enemForm.getMinGold());
            reward.setGold(reward_gold);
            reward.setExp(reward_exp);
        }else {
            reward.setExp(0);
            reward.setGold(0);
            reward.setItem_id(null);
            fightResult.setHeroWon(false);
        }
        fightResult.setReward(reward);
        fightResult.getActions().add(heroFightAction);
        fightResult.getActions().add(enemyFightAction);
        return fightResult;
    }

// Damage calculator now its pretty simple
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
    } if(crit){
        attack=attack*2;
    } if (attack < 1) {
        attack = 1;
    }
    damageDto.setDamage(attack);
    damageDto.setCrit(crit);
    return damageDto;
    }



private float attackInterval(float speed) {
    return (2f / speed) * 10f;

    }
}