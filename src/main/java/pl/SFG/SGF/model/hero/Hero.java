package pl.SFG.SGF.model.hero;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.SFG.SGF.dto.hero.HeroClass;
import pl.SFG.SGF.model.User;

@Entity
@Getter
@Setter
@Table(name="Hero")
public class Hero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private HeroClass heroClass;
    private int exp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id")
    private User owner;
}