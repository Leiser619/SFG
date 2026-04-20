package pl.SFG.SGF.repository.hero;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.SFG.SGF.dto.ItemTypeEnum;
import pl.SFG.SGF.model.hero.HeroBackpack;

public interface HeroBackpackRepository extends JpaRepository<HeroBackpack,Long> {
    boolean existsByHeroIdAndItem_TypeAndEquippedTrue(Long heroId, ItemTypeEnum type);

}
