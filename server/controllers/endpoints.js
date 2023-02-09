const toDo = require("../models/toDo");

exports.getAllItems = (_req, res) => {
  toDo
    .find()
    .then((item) => res.json(item))
    .catch((err) => {
      res.status(404).json({ message: "Item not found", error: err.message });
    });
};

exports.getOneItem = (req, res) => {
  toDo
    .findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => {
      res.status(404).json({ message: "Item not found", error: err.message });
    });
};

exports.createItem = (req, res) => {
  toDo
    .create(req.body)
    .then((data) => res.json({ message: "Item added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Item could not be added", error: err.message })
    );
};

exports.updateItem = (req, res) => {
  toDo
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.json({ message: "Item successfully updated", data });
    })
    .catch((err) =>
      res.status(400).json({ message: "Failed to update", error: err.message })
    );
};

exports.deleteItem = (req, res) => {
  toDo
    .findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({ message: "Item deleted", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Item could not be deleted", error: err.message })
    );
};
