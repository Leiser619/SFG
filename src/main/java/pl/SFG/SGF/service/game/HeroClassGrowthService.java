package pl.SFG.SGF.service.game;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.hero.HeroClassGrowth;
import pl.SFG.SGF.repository.game.HeroClassGrowthReposiotory;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HeroClassGrowthService {

    private final HeroClassGrowthReposiotory heroClassGrowthReposiotory;

    public HeroClassGrowth findByHeroClass(HeroClass heroClass){
        return heroClassGrowthReposiotory.findById(heroClass).orElseThrow(() -> new EntityNotFoundException("Nie znaleziono przyrostu statystyk dla klasy: " + heroClass));
    }

}
