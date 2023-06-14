'use strict';
const mongoose = require("mongoose")

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Define the sub-document schema for the objects in the array
const subKoliDataSchema = new Schema({
  // Define the fields for each object in the array
  koli_length: {
    type: Number,
  },
  awb_url: {
    type: String
  },
  created_at: {
    type: Date
  },
  koli_chargeable_weight: {
    type: Number
  },
  koli_width: {
    type: Number
  },
  koli_surcharge: {
    type: Array
  },
  koli_height: {
    type: Number
  },
  updated_at: {
    type: Date
  },
  koli_description: {
    type: String
  },
  koli_formula_id: {
    type: ObjectId
  },
  connote_id: {
    type: String,
    required: true,
  },
  koli_volume: {
    type: Number
  },
  koli_weight: {
    type: Number
  },
  koli_id: {
    type: String,
    required: true,
  },
  koli_custom_field: {
    awb_sicepat: {
      type: String
    },
    harga_barang: {
      type: Number
    }
  },
  koli_code: {
    type: String
  }
});

const packageSchema = Schema(
  {
    transaction_id: {
      type: String,
      required: true,
    },
    customer_name: {
      type: String
    },
    customer_code: {
      type: String
    },
    transaction_amount: {
      type: String
    },
    transaction_discount: {
      type: String
    },
    transaction_additional_field: {
      type: String
    },
    transaction_payment_type: {
      type: String
    },
    transaction_state: {
      type: String
    },
    transaction_code: {
      type: String
    },
    transaction_order: {
      type: Number
    },
    location_id: {
      type: ObjectId,
      required: true,
    },
    organization_id: {
      type: Number
    },
    created_at: {
      type: Date
    },
    updated_at: {
      type: Date
    },
    transaction_payment_type_name: {
      type: String
    },
    transaction_cash_amount: {
      type: Number
    },
    transaction_cash_change: {
      type: Number
    },
    customer_attribute: {
      Nama_Sales: {
        type: String
      },
      TOP: {
        type: String
      },
      Jenis_Pelanggan: {
        type: String
      }
    },
    connote: {
      connote_id: {
        type: String,
        required: true,
      },
      connote_number: {
        type: Number
      },
      connote_service: {
        type: String
      },
      connote_service_price: {
        type: Number
      },
      connote_amount: {
        type: Number
      },
      connote_code: {
        type: String
      },
      connote_booking_code: {
        type: String
      },
      connote_order: {
        type: Number
      },
      connote_state: {
        type: String
      },
      connote_state_id: {
        type: Number
      },
      zone_code_from: {
        type: String
      },
      zone_code_to: {
        type: String
      },
      surcharge_amount: {
        type: Number
      },
      transaction_id: {
        type: String,
        required: true,
      },
      actual_weight: {
        type: Number
      },
      volume_weight: {
        type: Number
      },
      chargeable_weight: {
        type: Number
      },
      created_at: {
        type: Date
      },
      updated_at: {
        type: Date
      },
      organization_id: {
        type: Number
      },
      location_id: {
        type: ObjectId,
        required: true,
      },
      connote_total_package: {
        type: Date
      },
      connote_surcharge_amount: {
        type: Date
      },
      connote_sla_day: {
        type: Date
      },
      location_name: {
        type: String
      },
      location_type: {
        type: String
      },
      source_tariff_db: {
        type: String
      },
      id_source_tariff: {
        type: String
      },
      pod: {
        type: String
      },
      history: {
        type: Array
      }
    },
    connote_id: {
      type: String,
      required: true,
    },
    origin_data: {
      customer_name: {
        type: String
      },
      customer_address: {
        type: String
      },
      customer_email: {
        type: String
      },
      customer_phone: {
        type: String
      },
      customer_address_detail: {
        type: String
      },
      customer_zip_code: {
        type: String
      },
      zone_code: {
        type: String
      },
      organization_id: {
        type: Number
      },
      location_id: {
        type: ObjectId,
        required: true,
      }
    },
    destination_data: {
      customer_name: {
        type: String
      },
      customer_address: {
        type: String
      },
      customer_email: {
        type: String
      },
      customer_phone: {
        type: String
      },
      customer_address_detail: {
        type: String
      },
      customer_zip_code: {
        type: String
      },
      zone_code: {
        type: String
      },
      organization_id: {
        type: Number
      },
      location_id: {
        type: ObjectId,
        required: true,
      }
    },
    koli_data: [subKoliDataSchema],
    custom_field: {
      catatan_tambahan: {
        type: String
      }
    },
    currentLocation: {
      name: {
        type: String
      },
      code: {
        type: String
      },
      type: {
        type: String
      }
    }
  }
);

const Package = mongoose.model('package', packageSchema)

module.exports = Package;