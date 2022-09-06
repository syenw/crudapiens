module.exports = {
    all: function(obj) {
        return obj.findAll()
    },
    one: async function(obj, data) {
        return obj.findOne({
            where: {id: data.id}
        })
    },
    oneJoin: function(obj, data) {
        return obj.findOne({
            where: {id: data.id}, include: [{
                model: data.model, as: data.alias
            }]
        })
    },
    multipleJoin: function(obj, data) {
        return obj.findOne({
            where: {id: data.id}, 
            include: [
                {
                    model: data.model, 
                    as: data.alias,
                },
                {
                    model: data.model2, 
                    as: data.alias2,
                },
            ]
        })
    },
    add: function(obj, data) {
        return obj.create(data)
    },
    update: function(obj, data, where) {
        return obj.update(data, {where: where})
    },
    delete: function(obj, where) {
        return obj.destroy({where: where})
    },
}





















