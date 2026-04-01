CREATE TABLE IF NOT EXISTS users { 
    id              UUID PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    surname         VARCHAR(100) NOT NULL,
    email           VARCHAR(255) NOT NULL UNIQUE,
    password        VARCHAR(255) NOT NULL,
    birth_date      DATE         NOT NULL,
    cpf             VARCHAR(14)  NOT NULL UNIQUE,
    enterprise_id   UUID         NOT NULL  
    sector_id       UUID,
    addresses_id    UUID,

    FOREIGN KEY (addresses_id) REFERENCES addresses(id)
    FOREIGN KEY (enterprise_id) REFERENCES enterprises(id)
    FOREIGN KEY (sector_id) REFERENCES sectors(id)

    created_at      TIMESTAMP DEFAULT NOW(),
    update_at       TIMESTAMP DEFAULT NOW()     

}