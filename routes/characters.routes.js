const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/characters", (req, res, next) => {
  axios
    .get("https://ih-crud-api.herokuapp.com/characters")
    .then((responseFromAPI) => {
      // console.log(responseFromAPI)
      res.render("characters/list-characters", {
        characters: responseFromAPI.data,
      });
    })
    .catch((err) => console.error(err));
});

router.get("/characters/:id", (req, res, next) => {
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then((responseFromAPI) => {
      // console.log("details: ", responseFromAPI.data)
      res.render("characters/details-character", {
        character: responseFromAPI.data,
      });
    })
    .catch((err) => console.error(err));
});

router.get("/create", (req, res) => {
  res.render("characters/create-character");
});

router.post("/create", async (req, res) => {
  const { name, occupation, weapon, debt } = req.body;

  axios
    .post("https://ih-crud-api.herokuapp.com/characters", {
      name,
      occupation,
      weapon,
      debt,
    })
    .then((responseFromAPI) => {
      // console.log("details: ", responseFromAPI.data)
      res.redirect("/characters");
    })
    .catch((err) => console.error(err));
});

router.get("/characters/:id/edit", (req, res, next) => {
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then((responseFromAPI) => {
      // console.log("details: ", responseFromAPI.data)
      res.render("characters/edit-character", {
        character: responseFromAPI.data,
      });
    })
    .catch((err) => console.error(err));
});
router.post("/characters/:id/update", async (req, res) => {
  const { name, occupation, weapon, debt } = req.body;

  axios
    .put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`, {
      name,
      occupation,
      weapon,
      debt,
    })

    .then((responseFromAPI) => {
      // console.log("details: ", responseFromAPI.data)
      res.redirect(`/characters/${req.params.id}`);
    })
    .catch((err) => console.error(err));
});
router.post("/characters/:id/delete", async (req, res) => {
  const { name, occupation, weapon, debt } = req.body;

  axios
    .delete(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)

    .then((responseFromAPI) => {
      // console.log("details: ", responseFromAPI.data)
      res.redirect(`/characters`);
    })
    .catch((err) => console.error(err));
});
module.exports = router;

// https://ih-crud-api.herokuapp.com/characters
