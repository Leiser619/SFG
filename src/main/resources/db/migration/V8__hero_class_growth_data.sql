insert into hero_class_growth (hero_class,health_per_level,attack_per_level,magic_per_level,speed_per_level,shield_per_level,luck_per_level) VALUES
VALUES  ('ARCHER',5,3,2,0.5,1,4),
        ('WARRIOR', 5,5,1,0.1,2,1),
        ('MAGE',4,1,3,3,0.2,1,5),
        ('TANK',10,1,1,0.1,4,2);

ALTER TABLE enemy ADD COLUMN 'hero_class' VARCHAR(50);
UPDATE enemy SET hero_class ='WARRIOR' WHERE id=1;
UPDATE enemy SET hero_class ='TANK' WHERE id=3;

ALTER TABLE Hero add column 'level' INT;

ALTER TABLE hero_class_growth
ALTER COLUMN base_speed TYPE REAL;

ALTER TABLE enemy
ALTER COLUMN speed TYPE REAL;