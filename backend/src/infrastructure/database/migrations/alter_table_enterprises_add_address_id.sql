ALTER TABLE enterprises
ADD CONSTRAINT fk_enterprise_address FOREIGN KEY (address_id) REFERENCES addresses(id);