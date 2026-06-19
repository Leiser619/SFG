    package pl.SFG.SGF.model.game;

    import jakarta.persistence.*;
    import lombok.Builder;
    import lombok.Getter;
    import lombok.Setter;
    import pl.SFG.SGF.dto.hero.HeroClass;
    import pl.SFG.SGF.model.hero.Hero;

    @Entity
    @Getter
    @Setter
    @Table(name="enemy")
    public class Enemy {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String name;

        @Column(nullable = false)
        private int level;

        @Column(nullable = false,name = "region_name")
        private String regionName;

        @Column(nullable = false, name = "avatar_url")
        private String avatarUrl;

        @Column(name = "base_health")
        private int health;

        @Column(name = "base_attack")
        private int attack;

        @Column(name = "base_magic")
        private int magic;

        @Column(name = "base_speed")
        private float speed;

        @Column(name = "base_shield")
        private int shield;

        @Column(name = "base_luck")
        private int luck;

        @Column(name = "hero_class")
        private HeroClass heroClass;
    }