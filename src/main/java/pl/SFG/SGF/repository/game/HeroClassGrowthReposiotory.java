package pl.SFG.SGF.repository.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.hero.HeroClassGrowth;

@Repository
public interface HeroClassGrowthReposiotory extends JpaRepository <HeroClassGrowth, HeroClass> {
}
