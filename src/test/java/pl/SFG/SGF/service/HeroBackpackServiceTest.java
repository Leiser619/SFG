package pl.SFG.SGF.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.SFG.SGF.dto.ItemTypeEnum;
import pl.SFG.SGF.model.Item;
import pl.SFG.SGF.model.hero.Hero;
import pl.SFG.SGF.model.hero.HeroBackpack;
import pl.SFG.SGF.repository.HeroBackpackRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class HeroBackpackServiceTest {

    @Mock
    private HeroBackpackRepository heroBackpackRepository;

    @InjectMocks
    private HeroBackpackService heroBackpackService;

    @Test
    void shouldEquipItemSuccessfully() {
        // given
        Long heroItemId = 1L;

        Hero hero = new Hero();
        hero.setId(10L);

        Item item = new Item();
        item.setType(ItemTypeEnum.HELMET);

        HeroBackpack heroBackpack = new HeroBackpack();
        heroBackpack.setId(heroItemId);
        heroBackpack.setHero(hero);
        heroBackpack.setItem(item);
        heroBackpack.setEquipped(false);

        when(heroBackpackRepository.findById(heroItemId))
                .thenReturn(Optional.of(heroBackpack));

        when(heroBackpackRepository
                .existsByHeroIdAndItem_TypeAndEquippedTrue(10L, ItemTypeEnum.HELMET))
                .thenReturn(false);

        // when
        heroBackpackService.equipItem(heroItemId);

        // then
        assertTrue(heroBackpack.isEquipped());
    }

    @Test
    void shouldThrowExceptionWhenItemTypeAlreadyEquipped() {
        // given
        Long heroItemId = 1L;

        Hero hero = new Hero();
        hero.setId(10L);

        Item item = new Item();
        item.setType(ItemTypeEnum.HELMET);

        HeroBackpack heroBackpack = new HeroBackpack();
        heroBackpack.setId(heroItemId);
        heroBackpack.setHero(hero);
        heroBackpack.setItem(item);

        when(heroBackpackRepository.findById(heroItemId))
                .thenReturn(Optional.of(heroBackpack));

        when(heroBackpackRepository
                .existsByHeroIdAndItem_TypeAndEquippedTrue(10L, ItemTypeEnum.HELMET))
                .thenReturn(true);

        // when + then
        assertThrows(RuntimeException.class, () ->
                heroBackpackService.equipItem(heroItemId)
        );

        assertFalse(heroBackpack.isEquipped());
    }
}
