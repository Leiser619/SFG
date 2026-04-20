--V5__enemy_and_user_role.sql

ALTER TABLE users ADD COLUMN role VARCHAR(255);

CREATE TABLE region (
                        id BIGSERIAL PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        background_url VARCHAR(255) NOT NULL,
                        required_level INT NOT NULL
);

CREATE TABLE enemy (
                       id BIGSERIAL PRIMARY KEY,
                       avatar_url VARCHAR(255) NOT NULL,
                       name VARCHAR(50) NOT NULL,
                       level INT NOT NULL,
                       base_health INT NOT NULL,
                       base_attack INT NOT NULL,
                       base_magic INT NOT NULL,
                       base_speed INT NOT NULL,
                       base_shield INT NOT NULL,
                       base_luck INT NOT NULL,
                       region_id BIGINT NOT NULL,
                       CONSTRAINT fk_region
                           FOREIGN KEY (region_id)
                               REFERENCES region(id)
                               ON DELETE CASCADE
);