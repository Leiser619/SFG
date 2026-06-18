package pl.SFG.SGF.api.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.game.map.Location;
import pl.SFG.SGF.service.game.EnemyService;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/api/enemy")
public class EnemyController {

    private final EnemyService enemyService;




    @GetMapping("/getEnemiesByRegion/{regionName}")
    public List<Enemy> getEnemiesByRegion(@PathVariable("regionName") String regionName){
        System.out.println("TO REGION W 1 KROKU"+regionName);
        return enemyService.getAllEnemiesByRegion(regionName);
    }


    @GetMapping("/getEnemyById/{id}")
    public Optional<Enemy> getEnemyById(@PathVariable Long id){
        return enemyService.getEnemyById(id);
    }

}
