-- template from: https://github.com/jdaarevalo/docker_postgres_with_data
-- Set params
set session my.number_of_loans = '30';
set session my.number_of_users = '10';
set session my.number_of_equipment = '20';

-- Filling of loans
INSERT INTO loans
select id, concat('loan ', id)
FROM GENERATE_SERIES(1, current_setting('my.number_of_loans')::int) as id;

-- Filling of users
INSERT INTO users
select id, concat('user ', id)
FROM GENERATE_SERIES(1, current_setting('my.number_of_users')::int) as id;

-- Filling of equipment
INSERT INTO equipment
select id concat('equipment ', id)
FROM GENERATE_SERIES(1, current_setting('my.number_of_equipment')::int) as id;
