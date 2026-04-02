-- V3_hero_class_data.sql


INSERT INTO hero_class_stats(
hero_class,avatar_url,base_health,base_attack,base_magic,base_speed,base_shield,
base_luck,base_backpack_space,base_spell_space)VALUES
('ARCHER','archer.png',  90,  22,  5,  10, 3,   9,   7,  5),
('MAGE','mage.png',   100,  8,  10, 6,  4,   10,  8,  10),
('WARRIOR','warrior.png',120, 20,  1,  6,  6,   2,   7,  2),
('TANK','tank.png',   150, 10,  2,  2,  10,  2,   9,  0)