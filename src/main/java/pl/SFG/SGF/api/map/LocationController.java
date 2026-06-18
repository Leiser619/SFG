package pl.SFG.SGF.api.map;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.SFG.SGF.model.game.map.Location;
import pl.SFG.SGF.service.map.LocationService;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("api/location")
public class LocationController {
    private final LocationService locationService;
    @GetMapping("/search/{searchKey}")
    public Location getLocationBySearchKey(
            @PathVariable("searchKey") String searchKey
    ){
        System.out.println("to klucz"+searchKey);
        return locationService.getLocationByName(searchKey.toUpperCase());
    }

}
