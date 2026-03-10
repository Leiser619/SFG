package pl.SFG.SGF.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.SFG.SGF.dto.hero.MyHeroesResponses;
import pl.SFG.SGF.model.Hero;
import pl.SFG.SGF.repository.HeroRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final HeroRepository heroRepository;
    @Transactional(readOnly = true)
    public List<MyHeroesResponses> getMyHeroes(Long userId){
        return heroRepository.findAllByOwnerId(userId)
                .stream()
                .map(ProfileService::toResponse)
                .toList();
    }



    private static MyHeroesResponses toResponse(Hero h) {
        return new MyHeroesResponses(
                h.getName(),
                h.getExp(),
                h.getAvatar()
        );
    }
}
