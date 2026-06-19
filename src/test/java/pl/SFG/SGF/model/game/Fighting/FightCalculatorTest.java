package pl.SFG.SGF.model.game.Fighting;

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
import pl.SFG.SGF.service.fight.FightCalculator;
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
        assertEquals(25 + (10 * 4), result.getAttack());       // 25 + 40 = 65
        assertEquals(10 + (10 * 2), result.getShield());       // 10 + 20 = 30
        assertEquals(11.5f + (10 * 1.2f), result.getSpeed());  // 11.5 + 12.0 = 23.5f
        assertEquals(5 + (10 * 1), result.getMagic());         // 5 + 10 = 15
        assertEquals(150 + (10 * 40), result.getHealth());     // 150 + 400 = 550
    }
}