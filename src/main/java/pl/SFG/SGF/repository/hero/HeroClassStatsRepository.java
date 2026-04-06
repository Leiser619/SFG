package pl.SFG.SGF.repository.hero;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.hero.HeroClassStats;

public interface HeroClassStatsRepository extends JpaRepository<HeroClassStats, HeroClass> {
    HeroClassStats findByHeroClass(HeroClass heroClass);
}
