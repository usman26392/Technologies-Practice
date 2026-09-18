import mongoose from 'mongoose';

// Country Schema
const countrySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        code: { type: String, required: true }
    },
    {
        // 1. Crucial: You must enable virtuals to look like real JSON/Objects
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

// 2. Define the virtual relationship
countrySchema.virtual('associatedCities', {
    ref: 'City',             // The model to search inside
    localField: '_id',       // The field on the Country model
    foreignField: 'country'  // The field on the City model that holds the reference
});


export const Country = mongoose.model('Country', countrySchema);
