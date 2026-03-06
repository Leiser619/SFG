package pl.SFG.SGF.dto.hero;

import jakarta.validation.constraints.NotBlank;

public record MyHeroesResponses(

        @NotBlank String name,
        @NotBlank int exp
//        @NotBlank byte[] avatar;
) {

}
