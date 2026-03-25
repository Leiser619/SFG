-- V1__init.sql
CREATE TABLE users (
        id BIGSERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Hero (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    speed INT NOT NULL,
    exp INT NOT NULL,
    backpack_space INT NOT NULL,
    spell_space INT NOT NULL,
    health INT NOT NULL,
    attack INT NOT NULL,
    attack_speed REAL NOT NULL,
    shield INT NOT NULL,
    magic INT NOT NULL,
    luck INT NOT NULL,
    avatar BYTEA NOT NULL,
    owner_id BIGINT NOT NULL,
    CONSTRAINT fk_hero_owner
        FOREIGN KEY (owner_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
