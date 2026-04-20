package pl.SFG.SGF.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.SFG.SGF.dto.ItemTypeEnum;
import pl.SFG.SGF.model.hero.HeroBackpack;
import pl.SFG.SGF.repository.hero.HeroBackpackRepository;

@Service
@RequiredArgsConstructor
public class HeroBackpackService {
    private final HeroBackpackRepository heroBackpackRepository;

    @Transactional
    public void equipItem(Long heroItemId) {
        HeroBackpack heroItem = heroBackpackRepository.findById(heroItemId).orElseThrow();

        Long heroId = heroItem.getHero().getId();
        ItemTypeEnum type = heroItem.getItem().getType();

        if (heroBackpackRepository.existsByHeroIdAndItem_TypeAndEquippedTrue(heroId, type)) {
            throw new RuntimeException("Item tego typu już założony");
        }

        heroItem.setEquipped(true);
    }
}
