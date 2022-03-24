const express = require("express");
const { body, validationResult } = require("express-validator");
const user = require("../model/usermodel");

const router = express.Router();

const User = require("../model/usermodel");

router.post("/",
    body("first_name")
        .trim()
        .not()
        .isEmpty()
        .withMessage("first name cannot be empty"),
    body("last_name")
        .trim()
        .not()
        .isEmpty()
        .withMessage("last name cannot be empty"),
    body("email")
        .isEmail()
        .custom(async (value) => {
            const user = await user.findOne({ email: value });

            if (user) {
                throw new Error("email is already taken");
            }
            return true
        }),
    body("pincode")
        .not()
        .isEmpty()
        .isLength({ min: 6, max: 6 })
        .withMessage("Please enter a valid Pincode"),
    body("age")
        .not()
        .isEmpty()
        .withMessage("age cannot be Empty")
        .isNumeric()
        .withMessage("Please enter a valid age between 1 to 100")
        .custom((value) => {
            if (value < 1 || value > 100) {
                throw new Error("incorrect age provided");
            }
            return true;
        }),
    body("gender")
        .not()
        .isEmpty()
        .withMessage("please fill the gender section"),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            console.log({ errors });
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
            }

            const user = await user.create(req.body);

            return res.status(201).send(user);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    })


module.exports = router