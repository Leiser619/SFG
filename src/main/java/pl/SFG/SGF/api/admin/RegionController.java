package pl.SFG.SGF.api.admin;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.SFG.SGF.dto.game.RegionReq;
import pl.SFG.SGF.model.game.Region;
import pl.SFG.SGF.service.game.RegionService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/admin_panel/region")
@PreAuthorize("hasRole('ADMIN')")
public class RegionController {
    private final RegionService regionService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@Valid @RequestBody RegionReq regionReq){
        regionService.save(regionReq);

    }

    @GetMapping
    public List<Region> getAllRegion(){
        return regionService.getAll();
    }
}
