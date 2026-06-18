CREATE TABLE location (
                          id BIGSERIAL PRIMARY KEY,
                          location_name VARCHAR(100) NOT NULL,
                          description VARCHAR(1000),
                          bg_url VARCHAR(1000),
                          required_level integer
);
CREATE TABLE building (
                          id BIGSERIAL PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          description VARCHAR(1000),
                          type VARCHAR(100) NOT NULL,
                          bg_url VARCHAR(1000)
);


CREATE TABLE npc (
                     id BIGSERIAL PRIMARY KEY,

                     name VARCHAR(255) NOT NULL,

                     faction_type VARCHAR(100) NOT NULL,

                     avatar_url VARCHAR(1000)
);

CREATE TABLE mission (
                         id BIGSERIAL PRIMARY KEY,

                         name VARCHAR(255) NOT NULL,

                         description VARCHAR(2000),

                         money INTEGER DEFAULT 0,

                         exp INTEGER DEFAULT 0,

                         mission_type VARCHAR(100) NOT NULL,

                         trader INTEGER DEFAULT 0,
                         mage INTEGER DEFAULT 0,
                         assassin INTEGER DEFAULT 0
);



CREATE TABLE location_building (
                                   location_id BIGINT NOT NULL,
                                   building_id BIGINT NOT NULL,

                                   PRIMARY KEY(location_id, building_id),

                                   CONSTRAINT fk_lb_location
                                       FOREIGN KEY(location_id)
                                           REFERENCES location(id),

                                   CONSTRAINT fk_lb_building
                                       FOREIGN KEY(building_id)
                                           REFERENCES building(id)
);




CREATE TABLE building_npc (
                              building_id BIGINT NOT NULL,
                              npc_id BIGINT NOT NULL,

                              PRIMARY KEY(building_id, npc_id),

                              CONSTRAINT fk_bn_building
                                  FOREIGN KEY(building_id)
                                      REFERENCES building(id),

                              CONSTRAINT fk_bn_npc
                                  FOREIGN KEY(npc_id)
                                      REFERENCES npc(id)
);

CREATE TABLE npc_mission (
                             npc_id BIGINT NOT NULL,
                             mission_id BIGINT NOT NULL,

                             PRIMARY KEY (npc_id, mission_id),

                             CONSTRAINT fk_nm_npc
                                 FOREIGN KEY (npc_id)
                                     REFERENCES npc(id),

                             CONSTRAINT fk_nm_mission
                                 FOREIGN KEY (mission_id)
                                     REFERENCES mission(id)
);


ALTER TABLE users
    ADD COLUMN money INTEGER NOT NULL DEFAULT 0,

ADD COLUMN guild_name VARCHAR(255) UNIQUE,

ADD COLUMN assassin_points INTEGER NOT NULL DEFAULT 0,

ADD COLUMN trader_points INTEGER NOT NULL DEFAULT 0,

ADD COLUMN mage_points INTEGER NOT NULL DEFAULT 0;


ALTER TABLE hero ADD COLUMN tiredness INTEGER;