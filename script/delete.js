// Hapus satu data
db.customers.deleteOne({
    CustomerID: "NAD03"
})

// Hapus banyak data
db.customers.deleteMany({
    Country: "Indonesia"
})