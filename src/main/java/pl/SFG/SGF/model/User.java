package pl.SFG.SGF.model;

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

    @Column(name="created_at",insertable = false,updatable = false)
    private OffsetDateTime createdAt;
}
