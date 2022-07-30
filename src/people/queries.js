const getPeopleQuery = "SELECT * FROM person";
const getPersonByIdQuery = "SELECT * FROM person WHERE id = $1";
const getEmailQuery = "SELECT * FROM person WHERE email = $1";
const addPersonQuery =
  "INSERT INTO person (first_name, last_name, gender, email, date_of_birth, country_of_birth) VALUES ($1, $2, $3, $4, $5, $6)";
const removePersonByIdQuery = "DELETE FROM person WHERE id = $1";
const updatePersonByIdQuery =
  "UPDATE person SET first_name = $1, last_name = $2, gender = $3, email = $4, date_of_birth = $5, country_of_birth = $6";

module.exports = {
  getPeopleQuery,
  getPersonByIdQuery,
  getEmailQuery,
  addPersonQuery,
  removePersonByIdQuery,
  updatePersonByIdQuery,
};
