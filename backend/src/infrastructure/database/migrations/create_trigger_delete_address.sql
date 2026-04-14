CREATE OR REPLACE FUNCTION delete_address_on_user_delete()
RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM addresses WHERE id = OLD.addresses_id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_delete_address
BEFORE DELETE ON users
FOR EACH ROW
EXECUTE FUNCTION delete_address_on_user_delete();