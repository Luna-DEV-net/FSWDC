const { Router } = require("express"); const router = Router();
const { Posts }  = require("./../models")

router.get("/", async(req, res) => {
    const listOfPosts = await Posts.findAll();
    res.status(200).json(listOfPosts);
})

router.post("/", async (req, res) => {
    await Posts.create(req.body)
    res.json(req.body)
})


module.exports = router;