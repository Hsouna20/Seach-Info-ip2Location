const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LocationModel = require('./model/address')



const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/SearchInfo").then(
    ()=>{
        console.log('MongoDb is connected');
    }).catch(err =>{
        console.log(err);
    })



    app.get('/getinfo', async (req, res) => {
        const ipAddress = req.query.ip;
      
        // Convert IP address to a number
        const ipAddressAsNumber = convertIpAddressToNumber(ipAddress);
      
        try {
            console.log(ipAddressAsNumber);
          // Find the matching location in the database
          const location = await LocationModel.findOne({
            ip_from: { $lte: ipAddressAsNumber },
            ip_to: { $gte: ipAddressAsNumber },
          });
          if (location) {
            res.json({ result: location });
          } else {
            res.json({ result: 'No information found for this IP address.' });
          }
        } catch (error) {
          console.error('Error querying database:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      
      function convertIpAddressToNumber(ipAddress) {
        const ipAddressWithoutDots = ipAddress.replace(/\./g, '');
        const ipAddressAsNumber = parseInt(ipAddressWithoutDots);
        if (isNaN(ipAddressAsNumber)) {
          throw new Error('Invalid IP address format');
        }
        return ipAddressAsNumber;
        
      }
      
      
      



app.listen(3008 , ()=>{
    console.log("server is running on port 3008");
})