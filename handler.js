// 
const repo = require('./repositories')
const models = require('./models')
const helper = require('./helpers')

// 
const item = models.Item
const location = models.Location
const masterachievment = models.MasterAchievment
const achievmentplanning = models.AchievmentPlanning
const transactionproduction = models.TransactionProduction

// Property data error handling
let error = false

// Property data CRUD
let code
let name
let item_id
let location_id
let transactionproduction_id

let time_to
let time_from
let qty_actual
let qty_target
let time_target

module.exports = {
    // Module Item
    ItemAll: async function (req, res, next) {
        let result = await repo.all(item)
        res.send({
            code: 204,
            data: result
        })
    },
    ItemOneMultipleJoin: async function (req, res, next) {
        let entity = {model: transactionproduction, model2: achievmentplanning, alias: 'transactionproductions', alias2: 'achievmentplannings', id: req.params.id}
        const result = await repo.multipleJoin(item, entity)
        res.send({
            code: 204,
            data: result
        })
    },
    ItemAdd: async function (req, res, next) {
        code = req.body.code
        name = req.body.name
        if (code.length === 0 || name.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {code: code, name: name}
                const result = await repo.add(item, data)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully saved.' 
                    })    
                } 
                else {
                    throw('Data can\'t saved. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }
        }
    },
    ItemUpdate: async function (req, res, next) {
        code = req.body.code
        name = req.body.name
        if (code.length === 0 || name.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {code: code, name: name}
                let where = {id: req.body.id}
                const result = await repo.update(item, data, where)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully updated.' 
                    })    
                } 
                else {
                    throw('Data can\'t updated. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }
        }
    },
    ItemDelete: async function (req, res, next) {
        try {
            let where = {id: req.body.id}
            const result = await repo.delete(item, where)
            if (result) {
                res.send({
                    code: 204,
                    message: 'Data has been successfully deleted.'
                })
            }
            else {
                throw('Data can\'t deleted. Please try again!')
            }
        } catch (error) {
            res.send({
                code: 205,
                message: error 
            })
        }
    },

    // Module Locations
    LocationAll: async function(req, res, next) {
        let result = await repo.all(location)
        res.send({
            code: 204,
            data: result
        })
    },
    locationAdd: async function(req, res, next) {
        code = req.body.code
        name = req.body.name
        if (code.length === 0 || name.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {code: code, name: name}
                const result = await repo.add(location, data)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully saved.' 
                    })    
                } 
                else {
                    throw('Data can\'t saved. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }
        }
    },
    locationUpdate: async function(req, res, next) {
        code = req.body.code
        name = req.body.name
        if (code.length === 0 || name.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {code: code, name: name}
                let where = {id: req.body.id}
                const result = await repo.update(location, data, where)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully updated.' 
                    })    
                } 
                else {
                    throw('Data can\'t updated. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }
        }
    },
    locationDelete: async function(req, res, next) {
        let where = {id: req.body.id}
        try {
            const result = await repo.delete(location, where)
            if (result) {
                res.send({
                    code: 204,
                    message: 'Data has been successfully deleted.'
                })
            }
            else {
                throw('Data can\'t deleted. Please try again!')
            }
        } catch (error) {
            res.send({
                code: 205,
                message: error
            })
        }
    },
    locationOneJoin: async function(req, res, next) {
        let entity = {model: transactionproduction, alias: 'transactionproductions', id: req.params.id}
        let result = await repo.oneJoin(location, entity)
        res.send({
            code: 204,
            data: result
        })
    },

    // Module AchievmentPlannings
    AchievmentPlanningAll: async function (req, res, next) {
        let result = await repo.all(achievmentplanning)
        res.send({
            code: 204,
            data: result
        })
    },
    AchievmentPlanningAdd: async function (req, res, next) {
        code = "AP"+helper.between(1, 9999),
        console.log(code)
        // item_id = req.body.item_id,
        // qty_target = req.body.qty_target,
        // time_target = req.body.time_target
        // console.log(code)
        // if (qty_target.length === 0 || time_target.length === 0) {
        //     error = true
        //     res.send({
        //         code: 203,
        //         message: 'Please fill all field!'
        //     })
        // }
        // if (!error) {
        //     try {
        //         let data = {code: code, item_id: item_id, qty_target: qty_target, time_target: time_target}
        //         const result = await repo.add(achievmentplanning, data)
        //         if (result) {
        //             res.send({
        //                 code: 204,
        //                 message: 'Data has been successfully saved.' 
        //             })    
        //         } 
        //         else {
        //             throw('Data can\'t saved. Please try again!')
        //         }
        //     } catch (error) {
        //         res.send({
        //             code: 205,
        //             message: error 
        //         })
        //     }
        // }
    },
    AchievmentPlanningUpdate: async function (req, res, next) {
        qty_target = req.body.qty_target,
        time_target = req.body.time_target
        if (qty_target.length === 0 || time_target.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {qty_target: qty_target, time_target: time_target}
                let where = {id: req.body.id}
                const result = await repo.update(achievmentplanning, data, where)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully updated.'
                    })
                }
                else {
                    throw('Data can\'t updated. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }            
        } 
    },
    AchievmentPlanningOneJoin: async function (req, res, next) {
        let entity = {model: item, alias: 'items', id: req.params.id}
        const result = await repo.oneJoin(achievmentplanning, entity)
        res.send({
            code: 204,
            data: result
        })
    },

    // Module TransactionProductions
    TransactionProductionUpdate: async function(req, res, next) {
        qty_actual = req.body.qty_actual
        if (qty_actual.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {qty_actual: qty_actual}
                let where = {id: req.body.id}
                const result = await repo.update(transactionproduction, data, where)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully updated.'
                    })
                }
                else {
                    throw('Data can\'t updated. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            } 
        }
    },
    TransactionProductionAdd: async function(req, res, next) {
        code = "TP"+helper.between(1, 9999),
        item_id = req.body.item_id,
        qty_actual = req.body.qty_actual
        location_id = req.body.location_id
        if (qty_actual.length === 0 || item_id.length === 0 || location_id.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {code: code, qty_actual: qty_actual, item_id: item_id, location_id: location_id}
                const result = await repo.add(transactionproduction, data)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully saved.' 
                    })    
                } 
                else {
                    throw('Data can\'t saved. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }
        }
    },
    TransactionProductionMultipleJoin: async function(req, res, next) {
        let entity = {model: item, model2: location, alias: "items", alias2: "locations", id: req.params.id}
        const result = await repo.multipleJoin(transactionproduction, entity)
        // console.log(result)
        res.send({
            code: 204,
            data: result
        })
    },

    // Module MasterAchievments
    MasterAchievmentOneJoin: async function(req, res, next) {
        let entity = {model: transactionproduction, alias: 'transaction_productions', id: req.params.id}
        const result = await repo.oneJoin(masterachievment, entity)
        res.send({
            code: 204,
            data: result
        })
    },
    MasterAchievmentAdd: async function(req, res, next) {
        code = "MA"+helper.between(1, 9999),
        transactionproduction_id = req.body.transactionproduction_id,
        time_from = req.body.time_from
        time_to = req.body.time_to
        if (time_to.length === 0 || time_from.length === 0 || transactionproduction_id.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {code: code, time_to: time_to, time_from: time_from, transactionproduction_id: transactionproduction_id}
                const result = await repo.add(masterachievment, data)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully saved.' 
                    })    
                } 
                else {
                    throw('Data can\'t saved. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            }
        }
    },
    MasterAchievmentUpdate: async function(req, res, next) {
        time_to = req.body.time_to
        time_from = req.body.time_from
        if (time_to.length === 0 || time_from.length === 0) {
            error = true
            res.send({
                code: 203,
                message: 'Please fill all field!'
            })
        }
        if (!error) {
            try {
                let data = {time_to: time_to, time_from: time_from}
                let where = {id: req.body.id}
                const result = await repo.update(masterachievment, data, where)
                if (result) {
                    res.send({
                        code: 204,
                        message: 'Data has been successfully updated.'
                    })
                }
                else {
                    throw('Data can\'t updated. Please try again!')
                }
            } catch (error) {
                res.send({
                    code: 205,
                    message: error 
                })
            } 
        }
    }
}