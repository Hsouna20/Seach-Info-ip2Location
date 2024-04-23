const mongoose = require('mongoose');

const ProxySchema = new mongoose.Schema({
  ip_from: {
    type: Number, // Assuming MongoDB stores Int32 as Number
    required: true
  },
  ip_to: {
    type: Number, // Assuming MongoDB stores Int32 as Number
    required: true
  },
  proxy_type: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  country_name: {
    type: String,
    required: true
  },
  region_name: {
    type: String
  },
  city_name: {
    type: String
  },
  ISP: {
    type: mongoose.Schema.Types.Mixed // Mixed type for ISP field
  },
  domain: {
    type: String
  },
  usage_type: {
    type: String
  },
  asn: {
    type: mongoose.Schema.Types.Mixed // Mixed type for asn field
  },
  provider: {
    type: String
  },
  last_seen: {
    type: Number, // Assuming MongoDB stores Int32 as Number
    required: true
  }
});

const ProxyModel = mongoose.model('Proxy', ProxySchema);

module.exports = ProxyModel;
