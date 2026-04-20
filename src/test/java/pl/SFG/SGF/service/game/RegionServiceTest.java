package pl.SFG.SGF.service.game;

import jakarta.persistence.EntityExistsException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.SFG.SGF.dto.game.RegionReq;
import pl.SFG.SGF.model.game.Region;
import pl.SFG.SGF.repository.game.RegionRepository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RegionServiceTest {

    @Mock
    private RegionRepository regionRepository;

    @InjectMocks
    private RegionService regionService;

    @Test
    void shouldSaveRegion_whenNotExists() {
        // given
        RegionReq dto = new RegionReq(
                "Forest",
                "Dark scary forest",
                "forest.png",
                1
        );

        when(regionRepository.existsByName(dto.name())).thenReturn(false);

        // when
        regionService.save(dto);

        // then
        verify(regionRepository, times(1)).save(any(Region.class));
    }

    @Test
    void shouldThrowException_whenRegionExists() {
        // given
        RegionReq dto = new RegionReq(
                "Forest",
                "Dark forest",
                "url",
                1
        );

        when(regionRepository.existsByName(dto.name())).thenReturn(true);

        // when + then
        assertThrows(EntityExistsException.class, () -> regionService.save(dto));

        verify(regionRepository, never()).save(any());
    }
}