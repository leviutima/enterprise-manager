CREATE TABLE IF NOT EXISTS enterprises (
    id              UUID PRIMARY KEY,
    trade_name      VARCHAR(110) NOT NULL,
    corporate_name  VARCHAR(110) NOT NULL,
    cnpj            VARCHAR(14) NOT NULL,
    address_id      UUID, 
    created_at      TIMESTAMP DEFAULT NOW(),
    update_at       TIMESTAMP DEFAULT NOW()
);