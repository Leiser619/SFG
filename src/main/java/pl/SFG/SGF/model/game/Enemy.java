    package pl.SFG.SGF.model.game;

    import jakarta.persistence.*;
    import lombok.Builder;
    import lombok.Getter;
    import lombok.Setter;

    @Entity
    @Getter
    @Setter
    @Table(name="Enemy")
    public class Enemy {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @Column(nullable = false, name="region_id")
        private Long regionId;

        @Column(nullable = false)
        private String name;

        @Column(nullable = false)
        private int level;

        @Column(nullable = false, name = "avatar_url")
        private String avatarUrl;

        @Column(nullable = false)
        private int health;

        @Column(nullable = false)
        private int attack;

        @Column(nullable = false)
        private int magic;

        @Column(nullable = false)
        private int speed;
    }