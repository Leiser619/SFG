package pl.SFG.SGF.service.game;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.game.EnemyReq;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.model.game.Region;
import pl.SFG.SGF.repository.game.EnemyRepository;
import pl.SFG.SGF.repository.game.RegionRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EnemyService {
    private final EnemyRepository enemyRepository;
    private final RegionRepository regionRepository;

    @Transactional
    public Enemy save(EnemyReq enemyReq){
        if(enemyRepository.existsByNameAndLevel(enemyReq.name(),enemyReq.level())){
            throw new EntityExistsException("Taki wrog jest juz w bazie");
        }
        Region region=regionRepository.getReferenceById(enemyReq.regionId());
        Enemy enemy=new Enemy();
        enemy.setAttack(enemyReq.attack());
        enemy.setHealth(enemyReq.health());
        enemy.setLevel(enemyReq.level());
        enemy.setMagic(enemyReq.magic());
        enemy.setName(enemyReq.name());
        enemy.setAvatarUrl(enemyReq.avatarUrl());
        enemy.setSpeed(enemyReq.speed());
       return enemyRepository.save(enemy);
    }


    public List<Enemy> getAllEnemiesByRegion(String regionName){


        List<Enemy> lista =enemyRepository.findAllByRegionName(regionName);

        return lista;
    }

    public Enemy getEnemyById(Long id){
        return enemyRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Nie ma wroga o id : "+id));
    }


}
