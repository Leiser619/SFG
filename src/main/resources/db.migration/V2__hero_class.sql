-- V2__hero_class.sql

-- 1 najpierw tworzymy tabele klas

CREATE TABLE hero_class_stats (
    hero_class VARCHAR(50) PRIMARY KEY,

    base_health INT NOT NULL,
    base_attack INT NOT NULL,
    base_magic INT NOT NULL,
    base_speed INT NOT NULL,
    base_shield INT NOT NULL,
    base_luck INT NOT NULL,

    base_backpack_space INT NOT NULL,
    base_spell_space INT NOT NULL
);


CREATE TABLE hero_class_growth (
    hero_class VARCHAR(50) PRIMARY KEY,

    health_per_level INT NOT NULL,
    attack_per_level INT NOT NULL,
    magic_per_level INT NOT NULL,
    speed_per_level INT NOT NULL,
    shield_per_level INT NOT NULL,
    luck_per_level INT NOT NULL
);


ALTER TABLE hero
ADD COLUMN hero_class VARCHAR(50);

ALTER TABLE hero
DROP COLUMN health,
DROP COLUMN attack,
DROP COLUMN attack_speed,
DROP COLUMN shield,
DROP COLUMN magic,
DROP COLUMN luck,
DROP COLUMN speed;


ALTER TABLE hero
ADD CONSTRAINT fk_hero_class
FOREIGN KEY (hero_class)
REFERENCES hero_class_stats(hero_class);

CREATE TABLE items (
    id BIGSERIAL PRIMARY KEY,
    avatar BYTEA NOT NULL,
    name VARCHAR(255) NOT NULL,
    attack_bonus INT DEFAULT 0,
    health_bonus INT DEFAULT 0,
    magic_bonus INT DEFAULT 0,
    shield_bonus INT DEFAULT 0,
    speed_bonus INT DEFAULT 0,
    luck_bonus INT DEFAULT 0
);


-- Plecak

CREATE TABLE hero_items (
    hero_id BIGINT REFERENCES hero(id),
    item_id BIGINT REFERENCES items(id),

    PRIMARY KEY(hero_id,item_id)
);
