const pool = require("../db");
const {
  getPeopleQuery,
  getPersonByIdQuery,
  getEmailQuery,
  addPersonQuery,
  removePersonByIdQuery,
  updatePersonByIdQuery,
} = require("./queries");

const getPeople = (_req, res) => {
  pool.query(getPeopleQuery, (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows);
  });
};

const getPersonById = (req, res) => {
  const { personId } = req.params;
  pool.query(getPersonByIdQuery, [personId], (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows);
  });
};

const addPerson = (req, res) => {
  const { firstName, lastName, gender, email, dateOfBirth, countryOfBirth } =
    req.body;
  pool.query(getEmailQuery, [email], (_error, result) => {
    if (result.rowCount > 0) throw new Error("Email is already exists!");
    pool.query(
      addPersonQuery,
      [
        firstName,
        lastName,
        gender,
        email,
        new Date(dateOfBirth),
        countryOfBirth,
      ],
      (error, _result) => {
        if (error) throw error;
        res.status(201).send("Person was added successfully!");
      }
    );
  });
};

const removePersonById = (req, res) => {
  const { personId } = req.params;
  pool.query(getPersonByIdQuery, [personId], (error, result) => {
    if (error) throw error;
    else if (result.rowCount === 0)
      throw new Error("The person doesn't already exist!");
    pool.query(removePersonByIdQuery, [personId], (error) => {
      if (error) throw error;
      res.status(200).send("Person was deleted successfully!");
    });
  });
};

const updatePersonById = (req, res) => {
  const { personId } = req.params;
  const { firstName, lastName, gender, email, dateOfBirth, countryOfBirth } =
    req.body;
  pool.query(getPersonByIdQuery, [personId], (error, result) => {
    if (error) throw error;
    else if (result.rowCount === 0)
      throw new Error("The person doesn't exist!");
    const person = result.rows[0];
    pool.query(
      updatePersonByIdQuery,
      [
        firstName || person.first_name,
        lastName || person.last_name,
        gender || person.gender,
        email || person.email,
        new Date(dateOfBirth) || person.date_of_birth,
        countryOfBirth || person.country_of_birth,
      ],
      (error) => {
        if (error) throw error;
        res.status(200).send("Person was updated successfully!");
      }
    );
  });
};

module.exports = {
  getPeople,
  getPersonById,
  addPerson,
  removePersonById,
  updatePersonById,
};
