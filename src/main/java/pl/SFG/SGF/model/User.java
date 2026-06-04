package pl.SFG.SGF.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;

@Getter
@Setter
@Table(name="users")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(name="password_hash" , nullable = false)
    private String passwordHash;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name="created_at",insertable = false,updatable = false)
    private OffsetDateTime createdAt;

    @Column(nullable = false)
    private int money;

    @Column(name = "guild_name" ,unique=true)
    private String guildName;

    @Column(name = "mage_points")
    private int assassinPoints;

    @Column(name = "trader_points")
    private int merchantPoints;

    @Column(name = "mage_points")
    private int magePoints;
}
