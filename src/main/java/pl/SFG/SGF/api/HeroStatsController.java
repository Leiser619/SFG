package pl.SFG.SGF.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.model.hero.HeroClassStats;
import pl.SFG.SGF.service.game.HeroStatsService;

import java.util.List;


// This class is for heroClasses and not for getting heros for your profile
@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("api/sfg/hero_stats")
public class HeroStatsController {
    private final HeroStatsService heroStatsService;

    @GetMapping
    List<HeroClassStats> getAllStats(){
        return  heroStatsService.getAllHeroStats();
    }
}
