package pl.SFG.SGF.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.SFG.SGF.dto.fighting.FighterStatsDto;
import pl.SFG.SGF.dto.hero.FullHeroProjection;
import pl.SFG.SGF.dto.hero.MyHeroesProjection;
import pl.SFG.SGF.dto.hero.MyHeroesResponses;
import pl.SFG.SGF.exceptions.AccessDeniedException;
import pl.SFG.SGF.model.User;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.model.hero.HeroClassStats;
import pl.SFG.SGF.repository.hero.HeroRepository;
import pl.SFG.SGF.repository.UserRepository;
import pl.SFG.SGF.security.UserPrincipal;
import pl.SFG.SGF.service.fight.FightCalculator;
import pl.SFG.SGF.service.fight.HeroStatsCalculator;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final HeroRepository heroRepository;
    private final UserRepository userRepository;
    private final HeroStatsCalculator heroStatsCalculator;
    @Transactional(readOnly = true)
    public List<MyHeroesProjection> getMyHeros(Long userId){
        return heroRepository.findMyHeroes(userId);
    }


    public List<Hero> getAllHeroes(){
        return heroRepository.findAll();
    }


    @Transactional
    public MyHeroesResponses save(MyHeroesResponses myHeroesResponses, Long userId){
        if (heroRepository.existsByNameAndHeroClass(myHeroesResponses.name(), myHeroesResponses.heroClass())) {
            throw new RuntimeException("Item tego typu już założony");
        }


        User user = userRepository.getReferenceById(userId);
        Hero hero=new Hero();
        hero.setName(myHeroesResponses.name());
        hero.setTiredness(0);
        hero.setExp(0);
        hero.setHeroClass(myHeroesResponses.heroClass());
        hero.setOwner(user);
        heroRepository.save(hero);

        return new MyHeroesResponses(hero.getName(), hero.getHeroClass());
    }


    public Hero getHeroById(Long id){
        return heroRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Nie bohatera o id : "+id));
    }

    public FullHeroProjection getMyHeroById(UserPrincipal userPrincipal , Long heroId){
        Hero hero=heroRepository.findById(heroId).orElseThrow(() -> new EntityNotFoundException("Nie bohatera o id : "+heroId));

        System.out.println(" Hero Id "+heroId  + "Hero owner id "+hero.getOwner().getId());
        if(!hero.getOwner().getId().equals(userPrincipal.getId())){
            System.out.println("User Id "+userPrincipal.getId());
            throw new AccessDeniedException("Brak dostepu do bohatera o id "+heroId+" przez uzytkownika z id "+userPrincipal.getId() );
        }

        HeroClassStats heroClassStatsByLevel=heroStatsCalculator.calculateHCS(hero);

        FullHeroProjection fullHeroProjection=new FullHeroProjection(
                hero.getName(),
                hero.getHeroClass(),
                hero.getExp(),
                hero.getItems(),
                hero.getLevel(),
                hero.getTiredness(),
                heroClassStatsByLevel.getAvatarUrl(),
                heroClassStatsByLevel.getHealth(),
                heroClassStatsByLevel.getAttack(),
                heroClassStatsByLevel.getMagic(),
                heroClassStatsByLevel.getSpeed(),
                heroClassStatsByLevel.getShield(),
                heroClassStatsByLevel.getLuck()



        );
        return fullHeroProjection;

    }


}
