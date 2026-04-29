package pl.SFG.SGF.service.game;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.model.hero.HeroClassStats;
import pl.SFG.SGF.repository.hero.HeroClassStatsRepository;
import pl.SFG.SGF.repository.hero.HeroRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HeroStatsService {
    private final HeroClassStatsRepository heroClassStatsRepository;

    public List<HeroClassStats> getAllHeroStats(){
        return heroClassStatsRepository.findAll();
    }
}
