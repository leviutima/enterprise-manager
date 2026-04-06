CREATE TABLE IF NOT EXISTS sectors (
    id              UUID PRIMARY KEY,
    name            VARCHAR(110) NOT NULL,
    DESCRIPTION     VARCHAR(110) NOT NULL,
    
    enterprise_id   UUID NOT NULL,
    FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE
);