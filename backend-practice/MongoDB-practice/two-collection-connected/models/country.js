import mongoose from 'mongoose';

// Country Schema
const countrySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true }
});

export const Country = mongoose.model('Country', countrySchema);
