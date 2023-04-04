 import { Schema, Types, model, Model } from "mongoose";
 import { Client } from "../interfaces/client.interfaces";

 const ClientSchema = new Schema<Client>(
    {
        name: {
            type: String,
            required: true,
        },
        cpf: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
        versionKey: false,
    }
 );

 const ClientModel = model('Clients', ClientSchema);
 export default ClientModel;