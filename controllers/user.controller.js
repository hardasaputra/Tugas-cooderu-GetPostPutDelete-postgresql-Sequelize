const { User } = require("../models/index");

const findAll = async (req, res) => {
  return User.findAll({})
    .then((user) => {
      res.status(200).send({
        status: "SUCCESS",
        message: "User berhasil dibuat",
        data: user,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(503).send({
        status: "FAIL",
        message: "Gagal membuat user",
      });
    });
};

const create = async (req, res) => {
  const body = req.body;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;

  return User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
  })
    .then((user) => {
      res.status(200).send({
        status: "SUCCESS",
        message: "User berhasil dibuat",
        data: user,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(503).send({
        status: "FAIL",
        message: "Gagal membuat user",
      });
    });
};

const update = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;

  return User.update(
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((user) => {
      res.status(200).send({
        status: "SUCCESS",
        message: "User berhasil diupdate",
        data: user,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(503).send({
        status: "FAIL",
        message: "Gagal update user",
      });
    });
};
const deleteById = async (req, res) => {
  const id = req.params.id;

  return User.destroy({
    where: {
      id: id,
    },
  })
    .then((user) => {
      res.status(200).send({
        status: "SUCCESS",
        message: "User berhasil didelete",
        data: user,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(503).send({
        status: "FAIL",
        message: "Gagal delete user",
      });
    });
};

module.exports = {
  create,
  findAll,
  update,
  deleteById,
};
