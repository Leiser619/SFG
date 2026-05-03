package pl.SFG.SGF.repository.hero;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.dto.hero.MyHeroesProjection;
import pl.SFG.SGF.model.hero.Hero;

import java.util.List;

public interface HeroRepository extends JpaRepository<Hero,Long> {
    List<Hero> findAllByOwnerId(Long ownerId);
    @Query("""
        SELECT h.name AS name,
               h.exp AS exp,
               h.heroClass AS heroClass,
               s.avatarUrl AS avatar
        FROM Hero h, HeroClassStats s
        WHERE h.heroClass = s.heroClass
          AND h.owner.id = :userId
    """)
    List<MyHeroesProjection> findMyHeroes(@Param("userId") Long userId);


    boolean existsByNameAndHeroClass(String name, HeroClass heroClass);
}
