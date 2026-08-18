-- V8__hero_class_growth_data_and_type_fix.sql

ALTER TABLE hero_class_growth ALTER COLUMN speed_per_level TYPE FLOAT;
ALTER TABLE hero_class_growth ALTER COLUMN shield_per_level TYPE FLOAT;
ALTER TABLE hero_class_growth ALTER COLUMN luck_per_level TYPE FLOAT;

ALTER TABLE hero_class_stats ALTER COLUMN base_speed TYPE FLOAT;
ALTER TABLE hero_class_stats ALTER COLUMN base_shield TYPE FLOAT;
ALTER TABLE hero_class_stats ALTER COLUMN base_luck TYPE FLOAT;


insert into hero_class_growth (hero_class,health_per_level,attack_per_level,magic_per_level,speed_per_level,shield_per_level,luck_per_level) VALUES
        ('ARCHER',5,3,2,0.5,1,4),
        ('WARRIOR',5,5,1,0.1,2,1),
        ('MAGE',4,1,3,0.3,0.2,1.5),
        ('TANK',10,1,1,0.1,4,2);

ALTER TABLE enemy ADD COLUMN "hero_class" VARCHAR(50);
UPDATE enemy SET hero_class ='WARRIOR' WHERE id=1;
UPDATE enemy SET hero_class ='TANK' WHERE id=3;
UPDATE enemy SET hero_class ='TANK' WHERE id=2;

ALTER TABLE Hero add column "level" INT;

ALTER TABLE hero_class_growth
ALTER COLUMN speed_per_level TYPE REAL;

ALTER TABLE enemy
ALTER COLUMN base_speed TYPE REAL;
