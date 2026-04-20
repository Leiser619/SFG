package pl.SFG.SGF.repository.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.SFG.SGF.model.game.Enemy;
@Repository
public interface EnemyRepository extends JpaRepository<Enemy,Long> {
    boolean existsByNameAndLevel(String name, int level);
}
