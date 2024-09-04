import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    a: {
        type: Number,
    },
    b: {
        type: Number,
    },
    c: {
        type: Number
    },
    sum: {
        type: Number
    }
})

export {
    TestSchema
}