package pl.SFG.SGF.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="Hero")
public class Hero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private byte[] avatar;

    @Column(nullable = false)
    private int speed;

    @Column(nullable = false)
    private int exp;

    @Column(nullable = false, name="backpack_space")
    private int backpackSpace;

    @Column(nullable = false,name="spell_space")
    private int spellSpace;
//combat variables

    @Column(nullable = false)
    private int health;

    @Column(nullable = false)
    private int attack;

    @Column(nullable = false,name = "attack_speed")
    private float attackSpeed;

    @Column(nullable = false)
    private int shield;

    @Column(nullable = false)
    private int magic;

    @Column(nullable = false)
    private int luck;
}