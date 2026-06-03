// Insert satu data
db.customers.insertOne({
    CustomerID: "NAD01",
    CompanyName: "Nadif Store",
    ContactName: "Nadifa",
    ContactTitle: "Owner",
    City: "Bandung",
    Country: "Indonesia",
    Phone: "08123456789"
})

// Insert banyak data
db.customers.insertMany([
{
    CustomerID: "NAD02",
    CompanyName: "Data Corp",
    ContactName: "Budi",
    ContactTitle: "Manager",
    City: "Jakarta",
    Country: "Indonesia"
},
{
    CustomerID: "NAD03",
    CompanyName: "AI Solution",
    ContactName: "Siti",
    ContactTitle: "Director",
    City: "Surabaya",
    Country: "Indonesia"
}
])