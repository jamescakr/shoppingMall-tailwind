const express = require("express");
const router = express.Router();
const userApi = require("./user.api");

router.use("/user", userApi);

module.exports = router;

//여기까지 공부함
//만약 /api/user라는 요청이 들어왔을때
//1. app.js에서 /api 엔드포인트를 받을때 >> indexRouter인 index.js파일로 넘겨주고
//2. index.js파일에서는 api뒤에 user라는 엔드포인트를 확인하고 다시 userApi인 user.api.js파일로 넘겨준다
