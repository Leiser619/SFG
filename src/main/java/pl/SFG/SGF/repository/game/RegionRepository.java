package pl.SFG.SGF.repository.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.SFG.SGF.model.game.Region;

@Repository
public interface RegionRepository extends JpaRepository<Region,Long> {
    boolean existsByName(String name);
}
