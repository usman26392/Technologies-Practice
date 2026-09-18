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

        // Fetch every single country and attach its cities automatically
        const allCountries = await Country.find().populate('associatedCities');
        // console.log(allCountries)
        console.log(JSON.stringify(allCountries, null, 2));

        // Fetch Pakistan and automatically fetch all its cities
        // const countryWithCities = await Country.findOne({ name: 'Pakistan' }).populate('cities');

        // console.log(JSON.stringify(countryWithCities, null, 2));
        // console.log(countryWithCities);



    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Disconnect safely
        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB.');
    }
}

run();