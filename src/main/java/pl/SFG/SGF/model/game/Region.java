package pl.SFG.SGF.model.game;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.autoconfigure.batch.BatchDataSource;

import java.util.List;

@Entity
@Data
@Table(name = "region")
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @Column(nullable = false, name = "background_url")
    private String backgroundUrl;

    @Column(nullable = false,name = "required_level")
    private int requiredLevel;
}