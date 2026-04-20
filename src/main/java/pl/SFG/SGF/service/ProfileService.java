package pl.SFG.SGF.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.SFG.SGF.dto.hero.MyHeroesProjection;
import pl.SFG.SGF.dto.hero.MyHeroesResponses;
import pl.SFG.SGF.model.User;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.repository.hero.HeroRepository;
import pl.SFG.SGF.repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final HeroRepository heroRepository;
    private final UserRepository userRepository;
    @Transactional(readOnly = true)
    public List<MyHeroesProjection> getMyHeros(Long userId){
        return heroRepository.findMyHeroes(userId);
    }


    @Transactional
    public MyHeroesResponses save(MyHeroesResponses myHeroesResponses, Long userId){
        User user = userRepository.getReferenceById(userId);
        Hero hero=new Hero();
        hero.setName(myHeroesResponses.name());
        hero.setExp(0);
        hero.setHeroClass(myHeroesResponses.heroClass());
        hero.setOwner(user);
        heroRepository.save(hero);

        return new MyHeroesResponses(hero.getName(), hero.getExp(), hero.getHeroClass(),"url");
    }


}
