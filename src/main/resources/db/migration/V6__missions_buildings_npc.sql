CREATE TABLE location (
                          id BIGSERIAL PRIMARY KEY,
                          location_name VARCHAR(100) NOT NULL
);

CREATE TABLE building (
                          id BIGSERIAL PRIMARY KEY,
                          location_id BIGINT NOT NULL,

                          name VARCHAR(255) NOT NULL,
                          desc VARCHAR(1000),

                          type VARCHAR(100) NOT NULL,

                          bg_url VARCHAR(1000),

                          CONSTRAINT fk_building_location
                              FOREIGN KEY (location_id)
                                  REFERENCES location(id)
                                  ON DELETE CASCADE
);

CREATE TABLE npc (
                     id BIGSERIAL PRIMARY KEY,

                     building_id BIGINT NOT NULL,

                     name VARCHAR(255) NOT NULL,

                     faction_type VARCHAR(100) NOT NULL,

                     avatar_url VARCHAR(1000),

                     CONSTRAINT fk_npc_building
                         FOREIGN KEY (building_id)
                             REFERENCES building(id)
                             ON DELETE CASCADE
);

CREATE TABLE mission (
                         id BIGSERIAL PRIMARY KEY,

                         npc_id BIGINT NOT NULL,

                         name VARCHAR(255) NOT NULL,

                         desc VARCHAR(2000),

                         exp_reward INTEGER DEFAULT 0,

                         mission_type VARCHAR(100) NOT NULL,

                         trader INTEGER DEFAULT 0,
                         mage INTEGER DEFAULT 0,
                         assassin INTEGER DEFAULT 0,

                         CONSTRAINT fk_mission_npc
                             FOREIGN KEY (npc_id)
                                 REFERENCES npc(id)
                                 ON DELETE CASCADE
);