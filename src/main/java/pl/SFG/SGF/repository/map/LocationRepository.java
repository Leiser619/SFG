package pl.SFG.SGF.repository.map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.SFG.SGF.model.game.map.Location;
import pl.SFG.SGF.model.game.map.LocationName;

@Repository
public interface LocationRepository extends JpaRepository<Location,Long> {

    Location findByLocationName(LocationName name);
}
