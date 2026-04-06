package pl.SFG.SGF.service.game;

import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.game.EnemyReq;
import pl.SFG.SGF.model.game.Enemy;
import pl.SFG.SGF.repository.game.EnemyRepository;

@Service
@RequiredArgsConstructor
public class EnemyService {
    private final EnemyRepository enemyRepository;

    public Enemy save(EnemyReq enemyReq){
        if(enemyRepository.existsByNameAndLevel(enemyReq.name(),enemyReq.level())){
            throw new EntityExistsException("Taki wrog jest juz w bazie");
        }
        Enemy enemy=new Enemy();
        enemy.setAttack(enemyReq.attack());
        enemy.setHealth(enemyReq.health());
        enemy.setLevel(enemyReq.level());
        enemy.setMagic(enemyReq.magic());
        enemy.setName(enemyReq.name());
        enemy.setAvatarUrl(enemyReq.avatarUrl());
        enemy.setSpeed(enemyReq.speed());
        enemy.setRegionId(enemyReq.regionId());


       return enemyRepository.save(enemy);
    }
}
