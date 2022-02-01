import { utilService } from './util.service.js';

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return Promise.resolve(entities)
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity._id === entityId) || null
}

async function post(entityType, newEntity) {
    newEntity._id = utilService.makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function postMany(entityType, newEntities) {
    const entities = await query(entityType)
    newEntities = newEntities.map(entity => ({ ...entity, _id: utilService.makeId() }))
    entities.push(...newEntities)
    _save(entityType, entities)
    return entities
}

async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
}

async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
    return entities
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}