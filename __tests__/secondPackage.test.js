require('dotenv').config();
const request = require("supertest");
const app = require("../servers/Index");
const Package = require('../models/Package');
const mongoose = require('mongoose');

const { readFileSync } = require('fs');

describe('Put /api/package/:id', () => {

    const dataPost = readFileSync('./__tests__/json/postData.json');
    const dataPostJson = JSON.parse(dataPost);

    const dataUpdate = readFileSync('./__tests__/json/updateData.json');
    const dataUpdateJson = JSON.parse(dataUpdate);

    it('should update the package data information', async () => {

        const id = new mongoose.Types.ObjectId(); // generate a unique ObjectId

        // Create a document in the database with the specified ID
        Package.create({ _id: id, ...dataPostJson });

        const response = await request(app)
            .put(`/api/package/${id}`)
            .send(dataUpdateJson)
            .set("Accept", "application/json")
            .expect(200);

        // Fetch the updated data from the database
        const updatedData = await Package.findById(id);
        const jsonStringUpdatedData = JSON.stringify(updatedData);
        const jsonParseUpdatedData = JSON.parse(jsonStringUpdatedData);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("Success update package data by id");
        expect(jsonParseUpdatedData).toMatchObject(
            {
                _id: expect.any(String),
                transaction_id: expect.any(String),
                customer_name: expect.any(String),
                customer_code: expect.any(String),
                transaction_amount: expect.any(String),
                transaction_discount: expect.any(String),
                transaction_additional_field: expect.any(String),
                transaction_payment_type: expect.any(String),
                transaction_state: expect.any(String),
                transaction_code: expect.any(String),
                transaction_order: expect.any(Number),
                location_id: expect.any(String),
                organization_id: expect.any(Number),
                created_at: expect.anything(),
                updated_at: expect.anything(),
                transaction_payment_type_name: expect.any(String),
                transaction_cash_amount: expect.any(Number),
                transaction_cash_change: expect.any(Number),
                customer_attribute: {
                    Nama_Sales: expect.any(String),
                    TOP: expect.any(String),
                    Jenis_Pelanggan: expect.any(String),
                },
                connote: {
                    connote_id: expect.any(String),
                    connote_number: expect.any(Number),
                    connote_service: expect.any(String),
                    connote_service_price: expect.any(Number),
                    connote_amount: expect.any(Number),
                    connote_code: expect.any(String),
                    connote_booking_code: expect.any(String),
                    connote_order: expect.any(Number),
                    connote_state: expect.any(String),
                    connote_state_id: expect.any(Number),
                    zone_code_from: expect.any(String),
                    zone_code_to: expect.any(String),
                    surcharge_amount: null,
                    transaction_id: expect.any(String),
                    actual_weight: expect.any(Number),
                    volume_weight: expect.any(Number),
                    chargeable_weight: expect.any(Number),
                    created_at: expect.anything(),
                    updated_at: expect.anything(),
                    organization_id: expect.any(Number),
                    location_id: expect.any(String),
                    connote_total_package: expect.any(String),
                    connote_surcharge_amount: expect.any(String),
                    connote_sla_day: expect.any(String),
                    location_name: expect.any(String),
                    location_type: expect.any(String),
                    source_tariff_db: expect.any(String),
                    id_source_tariff: expect.any(String),
                    pod: null,
                    history: expect.any(Array),
                },
                connote_id: expect.any(String),
                origin_data: {
                    customer_name: expect.any(String),
                    customer_address: expect.any(String),
                    customer_email: expect.anything(),
                    customer_phone: expect.any(String),
                    customer_address_detail: null,
                    customer_zip_code: expect.any(String),
                    zone_code: expect.any(String),
                    organization_id: expect.any(Number),
                    location_id: expect.any(String),
                },
                destination_data: {
                    customer_name: expect.any(String),
                    customer_address: expect.any(String),
                    customer_email: null,
                    customer_phone: expect.any(String),
                    customer_address_detail: expect.anything(),
                    customer_zip_code: expect.any(String),
                    zone_code: expect.any(String),
                    organization_id: expect.any(Number),
                    location_id: expect.any(String),
                },
                koli_data: expect.any(Array),
                custom_field: {
                    catatan_tambahan: expect.any(String),
                },
                currentLocation: {
                    name: expect.any(String),
                    code: expect.any(String),
                    type: expect.any(String),
                },
                __v: expect.any(Number)
            }
        );
    });

    it('should return 404 if data with the given package ID is not found', async () => {

        const response = await request(app)
            .put('/api/package/648bcc5415b1779a5155be04')
            .send(dataUpdateJson)
            .set("Accept", "application/json")
            .expect(404);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toEqual("Package data not found");
    });
});

describe('Patch /api/package/:id', () => {
    const dataPost = readFileSync('./__tests__/json/postData.json');
    const dataPostJson = JSON.parse(dataPost);

    const dataUpdatePatch = readFileSync('./__tests__/json/updateDataPatch.json');
    const dataUpdatePatchJson = JSON.parse(dataUpdatePatch);

    it('should update the package data information', async () => {
        const id = new mongoose.Types.ObjectId(); // generate a unique ObjectId

        Package.create({ _id: id, ...dataPostJson });

        const response = await request(app)
            .patch(`/api/package/${id}`)
            .send(dataUpdatePatchJson)
            .set("Accept", "application/json")
            .expect(200);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("Success update package data by id");
    });

    it('should return 404 if data with the given package ID is not found', async () => {
        const response = await request(app)
            .patch('/api/package/648bcc5415b1779a5155be04')
            .send(dataPostJson)
            .set("Accept", "application/json")
            .expect(404);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toEqual("Package data not found");
    });
});

describe('Delete /api/package/:id', () => {
    const dataPost = readFileSync('./__tests__/json/postData.json');
    const dataPostJson = JSON.parse(dataPost);

    it('should delete the package data information', async () => {
        const id = new mongoose.Types.ObjectId(); // generate a unique ObjectId

        Package.create({ _id: id, ...dataPostJson });

        const response = await request(app)
            .delete(`/api/package/${id}`)
            .set("Accept", "application/json")
            .expect(200);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("Success delete package data by id");
    });

    it('should return 404 if data with the given package ID is not found', async () => {
        const response = await request(app)
            .delete('/api/package/648bcc5415b1779a5155be04')
            .set("Accept", "application/json")
            .expect(404);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toEqual("Package data not found");
    });
});


