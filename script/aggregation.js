// Jumlah customer per negara
db.customers.aggregate([
{
    $group: {
        _id: "$Country",
        TotalCustomer: {
            $sum: 1
        }
    }
}
])

// Negara dengan customer terbanyak
db.customers.aggregate([
{
    $group: {
        _id: "$Country",
        TotalCustomer: {
            $sum: 1
        }
    }
},
{
    $sort: {
        TotalCustomer: -1
    }
}
])

// Jumlah customer per kota
db.customers.aggregate([
{
    $group: {
        _id: "$City",
        TotalCustomer: {
            $sum: 1
        }
    }
}
])