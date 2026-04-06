package pl.SFG.SGF.service.game;

import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.game.RegionReq;
import pl.SFG.SGF.model.game.Region;
import pl.SFG.SGF.repository.game.RegionRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionService {
    private final RegionRepository regionRepository;


    public void save(RegionReq regionReq){

        if(regionRepository.existsByName(regionReq.name())){
            throw new EntityExistsException("This region already exists!");
        }
        Region region=new Region();
        region.setDescription(regionReq.description());
        region.setName(regionReq.name());
        region.setBackgroundUrl(regionReq.backgroundUrl());
        region.setRequiredLevel(regionReq.requiredLevel());
        regionRepository.save(region);
    }
    public List<Region> getAll(){
      return  regionRepository.findAll();
    }


}
