-- template from: https://github.com/jdaarevalo/docker_postgres_with_data
-- Creation of loan table
CREATE TABLE IF NOT EXISTS loans (
    loan_id INT NOT NULL,
    --user_id,
    --equipment_ids integer[],
    --return_by: DATETIME,

    PRIMARY KEY (loan_id)

    --CONSTRAINT fk_user
    --FOREIGN KEY(user_id)
    --REFERENCES users(user_id)

    --CONSTRAINT fk_equipment
    --FOREIGN KEY(equipment_ids)
    --REFERENCES equipment(equipment_id)
);

-- Creation of user table
CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL,
    --user_name varchar(450),

    PRIMARY KEY (user_id)
);

-- Creation of equipment table
CREATE TABLE IF NOT EXISTS equipment (
    equipment_id INT NOT NULL,
    --equipment_name varchar(450),
    --equipment_description varchar(1000),

    PRIMARY KEY (equipment_id)
);
