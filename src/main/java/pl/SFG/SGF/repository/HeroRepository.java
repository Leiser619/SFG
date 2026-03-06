package pl.SFG.SGF.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.SFG.SGF.model.Hero;

public interface HeroRepository extends JpaRepository<Hero,Long> {
}
