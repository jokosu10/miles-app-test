require('dotenv').config();
const request = require("supertest");
const app = require("../servers/Index");
const Package = require('../models/Package');
const mongoose = require('mongoose');

const { readFileSync } = require('fs');

describe('GET /api/package', () => {
    it('should return a list of package', async () => {

        // response from hit API
        const response = await request(app)
            .get('/api/package')
            .set("Accept", "application/json")
            .expect(200);

        var dataPackage = response.body.data[0];

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toEqual("Success get all package data");
        expect(response.body).toHaveProperty("data");

        expect(dataPackage).toMatchObject(
            {
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
                }
            }
        );
    });
});

describe('GET /api/package/:id', () => {

    it('should return the data with the given ID', async () => {
        // Create a mock user object
        const mockDataPackage = {
            _id: new mongoose.Types.ObjectId().toString(), // Generate a valid ObjectId
            transaction_id: "d0090c40-539f-479a-8274-899b9970bddc",
            customer_name: "PT. AMARA PRIMATIGA",
            customer_code: "1678593",
            transaction_amount: "70700",
            transaction_discount: "0",
            transaction_additional_field: "",
            transaction_payment_type: "29",
            transaction_state: "PAID",
            transaction_code: "CGKFT20200715121",
            transaction_order: 121,
            location_id: "5cecb20b6c49615b174c3e74",
            organization_id: 6,
            created_at: "2020-07-15T11:11:12+0700",
            updated_at: "2020-07-15T11:11:22+0700",
            transaction_payment_type_name: "Invoice",
            transaction_cash_amount: 0,
            transaction_cash_change: 0,
            customer_attribute: {
                Nama_Sales: "Radit Fitrawikarsa",
                TOP: "14 Hari",
                Jenis_Pelanggan: "B2B"
            },
            connote: {
                connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
                connote_number: 1,
                connote_service: "ECO",
                connote_service_price: 70700,
                connote_amount: 70700,
                connote_code: "AWB00100209082020",
                connote_booking_code: "",
                connote_order: 326931,
                connote_state: "PAID",
                connote_state_id: 2,
                zone_code_from: "CGKFT",
                zone_code_to: "SMG",
                surcharge_amount: null,
                transaction_id: "d0090c40-539f-479a-8274-899b9970bddc",
                actual_weight: 20,
                volume_weight: 0,
                chargeable_weight: 20,
                created_at: "2020-07-15T11:11:12+0700",
                updated_at: "2020-07-15T11:11:22+0700",
                organization_id: 6,
                location_id: "5cecb20b6c49615b174c3e74",
                connote_total_package: "3",
                connote_surcharge_amount: "0",
                connote_sla_day: "4",
                location_name: "Hub Jakarta Selatan",
                location_type: "HUB",
                source_tariff_db: "tariff_customers",
                id_source_tariff: "1576868",
                pod: null,
                history: []
            },
            connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
            origin_data: {
                customer_name: "PT. NARA OKA PRAKARSA",
                customer_address: "JL. KH. AHMAD DAHLAN NO. 100, SEMARANG TENGAH 12420",
                customer_email: "info@naraoka.co.id",
                customer_phone: "024-1234567",
                customer_address_detail: null,
                customer_zip_code: "12420",
                zone_code: "CGKFT",
                organization_id: 6,
                location_id: "5cecb20b6c49615b174c3e74"
            },
            destination_data: {
                customer_name: "PT AMARIS HOTEL SIMPANG LIMA",
                customer_address: "JL. KH. AHMAD DAHLAN NO. 01, SEMARANG TENGAH",
                customer_email: null,
                customer_phone: "0248453499",
                customer_address_detail: "KOTA SEMARANG SEMARANG TENGAH KARANGKIDUL",
                customer_zip_code: "50241",
                zone_code: "SMG",
                organization_id: 6,
                location_id: "5cecb20b6c49615b174c3e74"
            },
            koli_data: [
                {
                    koli_length: 0,
                    awb_url: "https://tracking.mile.app/label/AWB00100209082020.1",
                    created_at: "2020-07-15 11:11:13",
                    koli_chargeable_weight: 9,
                    koli_width: 0,
                    koli_surcharge: [],
                    koli_height: 0,
                    updated_at: "2020-07-15 11:11:13",
                    koli_description: "V WARP",
                    koli_formula_id: null,
                    connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
                    koli_volume: 0,
                    koli_weight: 9,
                    koli_id: "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
                    koli_custom_field: {
                        awb_sicepat: null,
                        harga_barang: null
                    },
                    koli_code: "AWB00100209082020.1"
                },
                {
                    koli_length: 0,
                    awb_url: "https://tracking.mile.app/label/AWB00100209082020.2",
                    created_at: "2020-07-15 11:11:13",
                    koli_chargeable_weight: 9,
                    koli_width: 0,
                    koli_surcharge: [],
                    koli_height: 0,
                    updated_at: "2020-07-15 11:11:13",
                    koli_description: "V WARP",
                    koli_formula_id: null,
                    connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
                    koli_volume: 0,
                    koli_weight: 9,
                    koli_id: "3600f10b-4144-4e58-a024-cc3178e7a709",
                    koli_custom_field: {
                        awb_sicepat: null,
                        harga_barang: null
                    },
                    koli_code: "AWB00100209082020.2"
                },
                {
                    koli_length: 0,
                    awb_url: "https://tracking.mile.app/label/AWB00100209082020.3",
                    created_at: "2020-07-15 11:11:13",
                    koli_chargeable_weight: 2,
                    koli_width: 0,
                    koli_surcharge: [],
                    koli_height: 0,
                    updated_at: "2020-07-15 11:11:13",
                    koli_description: "LID HOT CUP",
                    koli_formula_id: null,
                    connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
                    koli_volume: 0,
                    koli_weight: 2,
                    koli_id: "2937bdbf-315e-4c5e-b139-fd39a3dfd15f",
                    koli_custom_field: {
                        awb_sicepat: null,
                        harga_barang: null
                    },
                    koli_code: "AWB00100209082020.3"
                }
            ],
            custom_field: {
                catatan_tambahan: "JANGAN DI BANTING / DI TINDIH"
            },
            currentLocation: {
                name: "Hub Jakarta Selatan",
                code: "JKTS01",
                type: "Agent"
            },
            __v: 0
        };

        const jsonString = JSON.stringify(mockDataPackage); // convert to JSON string
        const parsedObject = JSON.parse(jsonString); // parse the JSON string

        expect(parsedObject).toMatchObject(
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

    it('should return 404 if data with the given ID is not found', async () => {
        const response = await request(app)
            .get('/api/package/648bcc5415b1779a5155be05')
            .set("Accept", "application/json")
            .expect(404);
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toEqual("Package data not found");
    });

});

describe('POST /api/package', () => {
    it('Should be created a package data', async () => {
        const dataPost = readFileSync('./__tests__/json/postData.json');
        const dataPostJson = JSON.parse(dataPost);

        const mockResponse = { message: "Success save new package data" };

        const response = await request(app)
            .post('/api/package')
            .send(dataPostJson)
            .set("Accept", "application/json")
            .expect(200);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual(mockResponse.message);
        expect(response.body.data).toMatchObject({
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
        });
    });
});