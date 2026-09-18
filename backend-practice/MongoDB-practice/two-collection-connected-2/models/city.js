import mongoose from 'mongoose';


// City Schema (with Reference to Country)

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country', // Must match the exact model name being referenced
        required: true
    }
});

export const City = mongoose.model('City', citySchema);