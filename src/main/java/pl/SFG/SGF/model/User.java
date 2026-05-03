package pl.SFG.SGF.model;
//TODO dodac migracje i w niej pola money i guildName

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Bean;

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

    @Column(name = "guild_name")
    private String guildName;
}
