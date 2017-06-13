--Database name: Step_Up_Check_In

--query to create intern table
CREATE TABLE "intern_sample" (
"id" serial not null,
"first_name" varchar(80) not null,
"last_name" varchar(80) not null,
"email" varchar(80) not null,
"birthdate" date,
"company" varchar(120),
"supervisor" varchar(120),
"step_up_group" varchar(120),
"coach" varchar(120),
PRIMARY KEY(email, first_name, last_name));

--test query to insert into intern_sample
INSERT INTO intern_sample (first_name, last_name, email, birthdate, company, supervisor, step_up_group, coach)
VALUES ('Matt', 'Larson', 'matt.a.larson@gmail.com', '09/06/1984', 'some_company', 'some_supervisor', 'achieve', 'some_coach');

--sample COPY FROM to copy CSV file from Desktop
COPY intern_sample FROM '/Users/matthewlarson/Desktop/intern_sample.csv' DELIMITERS ',' CSV;
