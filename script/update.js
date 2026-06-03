// Update satu dokumen
db.customers.updateOne(
{
    CustomerID: "ALFKI"
},
{
    $set: {
        Phone: "021999999"
    }
})

// Tambah field baru
db.customers.updateOne(
{
    CustomerID: "ALFKI"
},
{
    $set: {
        Email: "alfki@example.com"
    }
})

// Update banyak dokumen
db.customers.updateMany(
{
    Country: "Germany"
},
{
    $set: {
        Region: "Europe"
    }
})