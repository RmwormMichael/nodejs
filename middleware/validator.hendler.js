const booom = require('@hapi/boom')

function validatorHendler (schema, property) {
    return(req, res, next) => {
        const data = req[property]
        const {error} = schema.validate(data)
        if(error) {
            next(booom.badRequest(error))
        }
        next()
    }
}

module.exports = validatorHendler;
