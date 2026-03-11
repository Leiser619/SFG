package pl.SFG.SGF.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {

    @Id
    private Long id;

    private int attackBonus;
    private int healthBonus;
}