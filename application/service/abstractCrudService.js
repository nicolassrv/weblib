class AbstractCrudService {
    constructor(model) {
        this.model = model;
    }

    /**
     * Get one by given id
     * @param {integer} id
     * @returns entity
     */
    findOneById(id) {
        return this.model.findOne({
            where: {
                id: id
            }
        });
    }

    /**
     * Return a collection of entities
     */
    getAll() {
        return this.model.findAll();
    }

    /**
     * Persist a new entity and return created object
     * @param {object} data
     */
    create(data) {
        return this.model.create(data).then(entity => this.findOneById(entity.id));
    }

    /**
     * Delete an entity
     * @param {entity} entity
     */
    delete(entity) {
        return this.model.destroy({
            where: {
                id: entity.id
            }
        });
    }

    /**
     * Update an extisting entity and return the updated object
     * @param {integer} entityId
     * @param {object} data
     */
    update(entityId, data) {
        return this.model
            .update(data, {
                where: {
                    id: entityId
                }
            })
            .then(() => this.findOneById(entityId));
    }
}

module.exports = AbstractCrudService;