package pl.SFG.SGF.dto.hero;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record MyHeroesResponses(
        String name,
        int exp,
        HeroClass heroClass,
        String avatarUrl
) {}
