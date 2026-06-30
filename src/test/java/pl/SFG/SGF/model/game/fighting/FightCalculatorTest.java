package pl.SFG.SGF.model.game.fighting;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.model.hero.HeroClassGrowth;
import pl.SFG.SGF.model.hero.HeroClassStats;
import pl.SFG.SGF.service.ProfileService;
import pl.SFG.SGF.service.fight.FightCalculator;
import pl.SFG.SGF.service.game.EnemyService;
import pl.SFG.SGF.service.game.HeroClassGrowthService;
import pl.SFG.SGF.service.game.HeroStatsService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class FightCalculatorTest {
    @Mock
    private HeroClassGrowthService heroClassGrowthService;

    @Mock
    private HeroStatsService heroStatsService;

    @InjectMocks
    private FightCalculator fightCalculator;

    @Mock
    private EnemyService enemyService;

    @Mock
    private ProfileService profileService;
    @Test
    void shouldMapEnemyToFighterStatsDto() {
        // Given
        Enemy enemy = new Enemy();
        enemy.setId(1L);
        enemy.setName("Ork Wojownik");
        enemy.setAvatarUrl("url/ork.png");
        enemy.setHealth(100);
        enemy.setAttack(15);
        enemy.setMagic(5);
        enemy.setSpeed(10);
        enemy.setShield(20);
        enemy.setLuck(5);

        // When
        FighterStatsDto result = fightCalculator.fromEnemy(enemy);

        // Then
        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("Ork Wojownik", result.getName());
        assertEquals("url/ork.png", result.getAvatarUrl());
        assertEquals(100, result.getHealth());
        assertEquals(15, result.getAttack());
        assertEquals(5, result.getMagic());
        assertEquals(10.0f, result.getSpeed());
        assertEquals(20, result.getShield());
        assertEquals(5, result.getLuck());
    }

    @Test
    void shouldCalculateHeroStatsCorrectlyBasedOnLevelAndGrowth() {
        // Given
        HeroClass hClass = HeroClass.WARRIOR;

        Hero hero = new Hero();
        hero.setId(42L);
        hero.setName("Wario");
        hero.setHeroClass(hClass);
        hero.setLevel(10);

        HeroClassStats basicStats = new HeroClassStats();

        basicStats.setHealth(150);
        basicStats.setAttack(25);
        basicStats.setMagic(5);
        basicStats.setShield(10);
        basicStats.setSpeed(11.5f);
        basicStats.setLuck(7);


        HeroClassGrowth growth = new HeroClassGrowth();
        growth.setHealthPerLevel(40);
        growth.setAttackPerLevel(4);
        growth.setMagicPerLevel(1);
        growth.setShieldPerLevel(2);
        growth.setSpeedPerLevel(1.2f);
        growth.setLuckPerLevel(2);
        when(heroStatsService.getStatsByHeroClass(hClass)).thenReturn(basicStats);
        when(heroClassGrowthService.findByHeroClass(hClass)).thenReturn(growth);

        // When
        FighterStatsDto result = fightCalculator.fromHero(hero);

        // Then
        assertNotNull(result);
        assertEquals(42L, result.getId());
        assertEquals("Wario", result.getName());
        assertEquals(25 + (10 * 4), result.getAttack());
        assertEquals(10 + (10 * 2), result.getShield());
        assertEquals(11.5f + (10 * 1.2f), result.getSpeed());
        assertEquals(5 + (10 * 1), result.getMagic());
        assertEquals(150 + (10 * 40), result.getHealth());
    }


    @Test
    void shouldHeroWinFight() {
        // Given
        Hero hero = new Hero();
        hero.setId(1L);
        hero.setName("Mega kot");
        hero.setHeroClass(HeroClass.WARRIOR);
        hero.setLevel(100);

        Enemy enemy = new Enemy();
        enemy.setId(2L);
        enemy.setName("Goblinek");
        enemy.setHeroClass(HeroClass.WARRIOR);
        enemy.setHealth(100);
        enemy.setAttack(1);
        enemy.setMagic(0);
        enemy.setShield(0);
        enemy.setSpeed(1f);
        enemy.setLuck(0);

        HeroClassStats basicStats = new HeroClassStats();
        basicStats.setHealth(1000);
        basicStats.setAttack(10);
        basicStats.setMagic(0);
        basicStats.setShield(100);
        basicStats.setSpeed(1f);
        basicStats.setLuck(0);

        HeroClassGrowth growth = new HeroClassGrowth();
        growth.setHealthPerLevel(100);
        growth.setAttackPerLevel(50);
        growth.setMagicPerLevel(0);
        growth.setShieldPerLevel(10);
        growth.setSpeedPerLevel(0);
        growth.setLuckPerLevel(0);

        when(profileService.getHeroById(1L)).thenReturn(hero);
        when(enemyService.getEnemyById(2L)).thenReturn(enemy);

        when(heroStatsService.getStatsByHeroClass(HeroClass.WARRIOR))
                .thenReturn(basicStats);

        when(heroClassGrowthService.findByHeroClass(HeroClass.WARRIOR))
                .thenReturn(growth);

        // When
        FightResult result = fightCalculator.fight(1L, 2L);

        // Then
        assertTrue(result.isHeroWon());
    }




    @Test
    void shouldEnemyWinFight() {
        // Given
        Hero hero = new Hero();
        hero.setId(1L);
        hero.setName("Knypek");
        hero.setHeroClass(HeroClass.WARRIOR);
        hero.setLevel(1);

        Enemy enemy = new Enemy();
        enemy.setId(2L);
        enemy.setName("Smok");
        enemy.setHeroClass(HeroClass.WARRIOR);
        enemy.setHealth(100000);
        enemy.setAttack(10000);
        enemy.setMagic(0);
        enemy.setShield(500);
        enemy.setSpeed(1);
        enemy.setLuck(0);

        HeroClassStats basicStats = new HeroClassStats();
        basicStats.setHealth(10);
        basicStats.setAttack(1);
        basicStats.setMagic(0);
        basicStats.setShield(0);
        basicStats.setSpeed(1);
        basicStats.setLuck(0);

        HeroClassGrowth growth = new HeroClassGrowth();
        growth.setHealthPerLevel(0);
        growth.setAttackPerLevel(0);
        growth.setMagicPerLevel(0);
        growth.setShieldPerLevel(0);
        growth.setSpeedPerLevel(0);
        growth.setLuckPerLevel(0);

        when(profileService.getHeroById(1L)).thenReturn(hero);
        when(enemyService.getEnemyById(2L)).thenReturn(enemy);

        when(heroStatsService.getStatsByHeroClass(HeroClass.WARRIOR))
                .thenReturn(basicStats);

        when(heroClassGrowthService.findByHeroClass(HeroClass.WARRIOR))
                .thenReturn(growth);

        // When
        FightResult result = fightCalculator.fight(1L, 2L);

        // Then
        assertFalse(result.isHeroWon());
    }



}