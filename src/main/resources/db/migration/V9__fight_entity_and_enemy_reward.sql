
CREATE TABLE fight (
                       id BIGSERIAL PRIMARY KEY,

                       hero_id BIGINT NOT NULL,
                       enemy_id BIGINT NOT NULL,

                       hero_won BOOLEAN NOT NULL,

                       reward_gold INTEGER NOT NULL,
                       reward_exp INTEGER NOT NULL,

                       reward_claimed BOOLEAN NOT NULL
);



ALTER TABLE enemy add column max_exp INT;
ALTER TABLE enemy add column min_exp INT;
ALTER TABLE enemy add column max_gold INT;
ALTER TABLE enemy add column min_gold INT;


UPDATE enemy SET max_exp = 10 WHERE id=1;
UPDATE enemy SET min_exp = 1 WHERE id=1;
UPDATE enemy SET max_gold = 5 WHERE id=1;
UPDATE enemy SET min_gold = 0 WHERE id=1;


UPDATE enemy SET max_exp = 15 WHERE id=2;
UPDATE enemy SET min_exp = 5 WHERE id=2;
UPDATE enemy SET max_gold = 8 WHERE id=2;
UPDATE enemy SET min_gold = 2 WHERE id=2;

UPDATE enemy SET max_exp = 20 WHERE id=3;
UPDATE enemy SET min_exp = 5 WHERE id=3;
UPDATE enemy SET max_gold = 10 WHERE id=3;
UPDATE enemy SET min_gold = 4 WHERE id=3;