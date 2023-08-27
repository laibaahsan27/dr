const ServiceRequest = require('../Models/ServiceRequest.js');


const bookService=(async (req, res) => {
    try {
      const {
        fullName,
        phoneNumber,
        email,
        selectedService,
      } = req.body;
  
      const newServiceRequest = new ServiceRequest({
        fullName,
        phoneNumber,
        email,
        selectedService,
      });
  
      await newServiceRequest.save();
  
      res.status(201).json({ message: 'Service request submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting service request' });
    }
  });

const getServiceRequest=(async (req, res) => {
    try {
        const serviceRequests = await ServiceRequest.find();
        res.status(200).json(serviceRequests);
    } catch (error) {
        res.status(500).json({ message: 'Error getting service requests' });
    }
});

module.exports = {
    bookService,
    getServiceRequest,
};
