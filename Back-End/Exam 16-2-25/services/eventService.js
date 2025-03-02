import mongoose from "mongoose";
import Disaster from "../models/disasterModel.js";

const getAll = () => Disaster.find();

const getOne = (id) => Disaster.findById(id);

const create = async (data) => {
    // wrapping entry in arr consistently applies schema validation before doc insertion
    return await Disaster.create([data], { runValidators: true });
}

const update = async (id, data) => {
    return await Disaster.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

const remove = async (id) => {
    return await Disaster.findByIdAndDelete(id);
}

const interest = async (id, userId) => {
    return await Disaster.findByIdAndUpdate(id, { $push: { interestedList: userId } }, { new: true, runValidators: true });
}

const search = async (query) => {
    let filter = {};

    if (query.text) {
        filter.name = { $regex: query.text, $options: 'i' };
    }
    if (query.type) {
        filter.type = { $regex: query.type, $options: 'i' };
    }

    return await Disaster.find(filter).lean();
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove,
    interest,
    search,
}