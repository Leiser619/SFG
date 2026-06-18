
insert into location (id,location_name,description,bg_url,required_level) values
        (1,'UDUN','Drugie najwieksze miasto w panstwie jest fajne','/src/assets/map/cities/udun.png',1),
        (2,'VOLEMIN','Miasto Łączące zachód ze wschodem miasto transportowe mozna tu znalesc dobrze płatną prace i praktycznie wszystkie materiały jakie są duzo rodzajów broni i zbroi ale trzeba znać dobrze całą krainę, miasto technologicznie wyprzedza reszte swiata o kilkanasice lat','/src/assets/map/cities/volemin.png',5),
        (3,'EMET_NORTH','Emet ot miasto łączące 2 wśi w jedno miasto południowa część jest troche większa niz pólnocna jednak nie różnią się za bardzo','/src/assets/map/cities/emet_north.png',1),
        (4,'EMET_SOUTH','Emet ot miasto łączące 2 wśi w jedno miasto południowa część jest troche większa niz pólnocna jednak nie różnią się za bardzo','/src/assets/map/cities/emet_south.png',1),
        (5,'LION','Potężne miasto aspiruje by w przyszłosci mogło być dominującym miastem w państwie','/src/assets/map/cities/lion.png',1),
        (6,'ANORIEN','Duże miasto jeśli chodzi o rozwój to idzie łeb w łeb z lion dlatego ze często ze sobą współpracują (mozliwe ze kiedys sie połączą w jedno wieksze miasto)','/src/assets/map/cities/anorien.png',1),
        (7,'SPL','Kilka zabudowań ale leżą na ważnej drodze ,ludzie żyją tu z tego co znajdą w leśnie są blisko natury i niektórzy mieszkańy potrafią rozmawiać ze zwierzętami','/src/assets/map/cities/spl.png',1),
        (8,'EVEDIM','Małe miasteczko skorumpowane przez bandytów ludzie wiedza ze trasa jest niebezpieczna ale nie chca mowic bo sie boja magow','/src/assets/map/cities/evedim.png',1),
        (9,'WICHROWY_CZUB','Mroczna wioska przy której jest jedyny port który prowadzi do ESGAROTH','/src/assets/map/cities/wichrowy_czub.png',1),
        (10,'GLADDEN','Opuszczona wies w której sa opuszcozne budnki sa rozwalone i pelno sladow krwi jest. Wioska byla znana z tego ze mieszkali tu druidzi','/src/assets/map/cities/gladden.png',1),
        (11,'TURMIN','Mała wieś duzo miejsca do wykupienia dzialki ludzie sa raczej neutralni w stosunku do gosci swietne miejsce na wykupienie terenu do inwestycji','/src/assets/map/cities/turmin.png',1),
        (12,'TERION','Bardzo przyjazna miejscowosc głownie utrzymuje sie z tego ze łączy az 5 miast ze sobą ludzie sa bardzo przyjazni chetnie rozmawiaja i dziela sie wiadomosciami','/src/assets/map/cities/terion.png',6);


    INSERT INTO building (id, name, description, type, bg_url) VALUES
    (1,'Sklep Barda','zywkly sklep','STORE','/src/assets/buildings/shop.png'),

    (2,'Zbrojownia wojskowa','Nie jest to zwykla zbrojownia , mozna tu kupic naprawde ciekawe rzeczy za naprawde nieokazyjna cene','WEAPON_STORE','/src/assets/buildings/weapon_shop.png'),

    (3,'Schronisko','Tanio i niekoniecznie wygodnie','TAVERN','/src/assets/buildings/tavern.png'),

    (4,'Tawerna Lasego','Lasy to pol czlowiek pol borsku kocha wszystko i wszystkich (oprocz elfow ich nienawidzi).','TAVERN','/src/assets/buildings/tavern.png'),

    (5,'Rada miasta','nieprzyjemne typy z jescze bardziej nieprzyjemnymi wiesciami','TOWN_HALL','/src/assets/buildings/town_hall.png'),

    (6,'Bank Królewski','Przechowuj swoje złoto bezpiecznie.','BANK','/src/assets/buildings/bank_2.png'),
    (7,'Arena ' ,'mozna tu odbyc epicki pojedynek i zyskac troche zlota', 'ARENA', '/src/assets/buildings/arena_1.png');



ALTER TABLE region
    ADD COLUMN description VARCHAR(2000);


ALTER TABLE enemy
    ADD COLUMN region_name VARCHAR(50);
ALTER TABLE enemy DROP COLUMN region_id;


INSERT INTO npc (id, name, faction_type, avatar_url)
VALUES
    (1,'Lasy','MERCHANTS','/src/assets/npc/lasy.png');


INSERT INTO location_building (location_id,building_id) VALUES
                                                            (1,1),
                                                            (1,2),
                                                            (1,3),
                                                            (1,4),
                                                            (1,5),
                                                            (1,6),
                                                            (1,7);

INSERT INTO building_npc (building_id,npc_id) VALUES (4,1);



INSERT INTO enemy (id,name,level,avatar_url,base_health,base_attack,base_magic,base_speed,base_shield,base_luck,region_name)    VALUES
                (1,'Knypek z areny',1,'/src/assets/enemy/arena/arena_1.png',  70, 15,1,5,6,3,'ARENA'),
                (2,'Wojownik z areny',1,'/src/assets/enemy/arena/arena_2.png',  90, 20,1,5,6,3,'ARENA'),
                (3,'Bohater z areny',1,'/src/assets/enemy/arena/arena_3.png',  110, 15,6,5,6,5,'ARENA');




