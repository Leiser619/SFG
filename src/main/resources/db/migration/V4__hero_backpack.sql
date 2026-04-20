-- V4__hero_backpack.sql


ALTER TABLE items
DROP COLUMN avatar;

ALTER TABLE items
    ADD COLUMN avatar_url VARCHAR(255) NOT NULL;

ALTER TABLE items
    ADD COLUMN type VARCHAR(50) NOT NULL;


DROP TABLE hero_items;

CREATE TABLE hero_backpack (
                               id BIGSERIAL PRIMARY KEY,
                               hero_id BIGINT NOT NULL,
                               item_id BIGINT NOT NULL,
                               equipped BOOLEAN NOT NULL DEFAULT FALSE,

                               CONSTRAINT fk_backpack_hero
                                   FOREIGN KEY (hero_id)
                                       REFERENCES hero(id)
                                       ON DELETE CASCADE,

                               CONSTRAINT fk_backpack_item
                                   FOREIGN KEY (item_id)
                                       REFERENCES items(id)
                                       ON DELETE CASCADE
);