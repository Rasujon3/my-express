module.exports = function (req, res, next) {
    if (req.user.role !== "admin") return res.status(403).send('Forbidden');
    next();
}

// Sujon => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTllNzkwYjcyNjU4MzU1MTFhNDg2NzEiLCJlbWFpbCI6InNAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mzc3NzU2Mjd9.BxaLEoCeLoNv6EzMAYyM3x7Zkkk_ZS9vm4BlQgTRTuE
// Risha => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTllNzk1MzQzYTQ5MjlhMTY1ZmMwNGEiLCJlbWFpbCI6InJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mzc3NzU2OTl9.2-yw9V9X-ndWfT053QqTAf7E63w1IVteW6NEqp5ZKgE