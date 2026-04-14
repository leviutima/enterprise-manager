DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'role_enum') THEN
    CREATE TYPE role_enum AS ENUM ('ADMIN', 'USER', 'MANAGER');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS users (
    id          UUID         PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    surname     VARCHAR(100) NOT NULL,
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    birth_date  DATE         NOT NULL,
    cpf         VARCHAR(14)  NOT NULL UNIQUE,
    role        role_enum    NOT NULL,

    enterprise_id UUID,
    sector_id     UUID,
    addresses_id  UUID,

    FOREIGN KEY (enterprise_id) REFERENCES enterprises(id),
    FOREIGN KEY (sector_id)     REFERENCES sectors(id),

    active      BOOLEAN   DEFAULT TRUE,
    deleted_at  TIMESTAMP DEFAULT NULL,
    created_at  TIMESTAMP DEFAULT NOW(),
    updated_at  TIMESTAMP DEFAULT NOW()
);