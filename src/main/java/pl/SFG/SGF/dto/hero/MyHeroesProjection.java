package pl.SFG.SGF.dto.hero;

public interface MyHeroesProjection {
    Long getHeroId();

    String getName();

    int getExp();

    HeroClass getHeroClass();

    String getAvatar();
}