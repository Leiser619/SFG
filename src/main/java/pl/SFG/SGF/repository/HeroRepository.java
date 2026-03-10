package pl.SFG.SGF.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.SFG.SGF.model.Hero;

import java.util.List;

public interface HeroRepository extends JpaRepository<Hero,Long> {
    List<Hero> findAllByOwnerId(Long ownerId);
    Hero save(Hero hero);
}
