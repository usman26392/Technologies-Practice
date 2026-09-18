import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Country } from "./models/country.js"
import { City } from './models/city.js';


// Load environment configuration
dotenv.config();





async function run() {
    try {
        // 1. Connect to Local MongoDB via Env variable
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected successfully to local MongoDB!");

        // Clear existing data to prevent duplicate keys on re-runs
        await Country.deleteMany({});
        await City.deleteMany({});

        // 2. Insert Countries (Pakistan and India)
        const pakistan = await Country.create({ name: 'Pakistan', code: 'PK' });
        const india = await Country.create({ name: 'India', code: 'IN' });
        console.log('Countries saved.');

        // console.log("Country Collection:", await Country.find());


        // 3. Insert Cities and associate them using the Country "_id"
        await City.create([
            { name: 'Karachi', country: pakistan._id },
            { name: 'Lahore', country: pakistan._id },
            { name: 'Mumbai', country: india._id }
        ]);
        console.log('Cities saved with relations.');

        // 4. Query Cities and 'populate' the parent Country data
        console.log('\n--- Fetching Cities with Populated Country Data ---');
        // const citiesList = await City.find(); // without joining country object
        const citiesList = await City.find().populate('country');

        citiesList.forEach(city => {
            console.log(city);
        });

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Disconnect safely
        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB.');
    }
}

run();