package pl.SFG.SGF.service.map;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.intercept.AfterInvocationManager;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.model.game.map.Location;
import pl.SFG.SGF.model.game.map.LocationName;
import pl.SFG.SGF.repository.map.LocationRepository;

@Service
@RequiredArgsConstructor
public class LocationService {
    private final LocationRepository locationRepository;


    public Location getLocationByName(String name){
         LocationName locationName=LocationName.valueOf(name);
         return locationRepository.findByLocationName(locationName);
    }
}

