use("bootcampDE") //contoh nama database, bisa diganti sesuai kebutuhan

// Menampilkan seluruh data
db.customers.find()

// Menampilkan satu data
db.customers.findOne()

// Filter berdasarkan negara

db.customers.find({
    Country: "Germany"
})

// Filter berdasarkan kota

db.customers.find({
    City: "Berlin"
})

// Projection

db.customers.find(
{},
{
    CompanyName: 1,
    Country: 1,
    _id: 0
})

// Sorting
db.customers.find().sort({
    CompanyName: 1
})

// Limit
db.customers.find().limit(10)