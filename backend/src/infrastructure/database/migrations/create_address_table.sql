CREATE TABLE IF NOT EXISTS addresses (
    id              UUID PRIMARY KEY,
    zip_code        VARCHAR(110) NOT NULL,
    street          VARCHAR(110) NOT NULL,
    city            VARCHAR(110) NOT NULL,
    state           VARCHAR(110) NOT NULL,
    number          INTEGER,
    complement      VARCHAR(110),
    neightborhood   VARCHAR(110)
);