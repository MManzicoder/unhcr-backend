const signupValidator = (req, res, next)=>{

    req.check("username", "Username is required").notEmpty();
    req.check("email", "Email is required")
       .matches(/.+\@.+\..+/)
       .withMessage("Invalid email!")
       .isLength({
           min: 4, max: 32
       })
       .withMessage("Email must be between 4 and 32 characters long!")
    req.check("password", "Password is required").notEmpty();
    req.check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long!")
    .matches(/\d/)
    .withMessage("Password must contain a number!");
    const errors = req.validationErrors();
    if(errors){
        const fError = errors.map(error=>error.msg)[0];
        return res.status(400).json({err: fError});
    }
   next();
}

const validateCategory = (req, res, next)=>{
    req.check("name", "Category name is required!").notEmpty()
        .isLength({ max: 25})
        .withMessage("name must not be greater than 25 characters long!")
    const errors = req.validationErrors();
    if(errors){
        const fError = errors.map(error=>error.msg)[0];
        return res.status(400).json({err: fError});
    }
   next();
}

const validateProduct = (req, res, next)=>{
    req.check("name", "Product name is required!").notEmpty()
        .isLength({ max: 25})
        .withMessage("name must not be greater than 25 characters long!")
    req.check("description", "Description is required").notEmpty()
        .isLength({ max : 2000})
        .withMessage("Description must not be more than 2000 characters")
    req.check("price", "Price is required").notEmpty();
    req.check("category", "Category is required").notEmpty();
    req.check("photo", "Product photo is required").notEmpty();
    const errors = req.validationErrors();
    if(errors){
        const fError = errors.map(error=>error.msg)[0];
        return res.status(400).json({err: fError});
    }
   next();
}

module.exports ={
    signupValidator,
    validateCategory,
    validateProduct
} 