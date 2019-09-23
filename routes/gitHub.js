const express = require("express");
const router = express.Router();
const Github = require("../services/gitHub");

router.get("/", (req, res, next) => {
  res.send("holaaaaa bienvenido a los servicios de donantes");
});

router.post("/apitoken", async (req, res, next) => {
  const github = new Github();
  console.log(req.body)
  const {oauthToken} = req.body
  const apiToken = await github.getToken(oauthToken);
  if(apiToken){
      res.status(200).json({
        token: apiToken.split('&')[0].replace('access_token=',''),
        error: false
      });
  }else{
    res.status(200).json({
        token: '',
        error: true
      });
  }
});

module.exports = router;