# MongoDB Customer Dataset Practice

Repository ini berisi kumpulan script latihan MongoDB menggunakan dataset **customers.json**. Materi disusun secara bertahap mulai dari pembuatan database, manipulasi data (CRUD), hingga penggunaan Aggregation Framework dan Indexing.

## Dataset

Dataset yang digunakan:

```text
customers.json
```

Dataset berisi data pelanggan (customer) dengan atribut seperti:

- CustomerID
- CompanyName
- ContactName
- ContactTitle
- City
- Country
- Phone

## Struktur Materi

### 1. Database dan Collection

Mempelajari cara membuat dan mengelola database serta collection pada MongoDB.

**Materi:**

- Membuat database
- Memilih database aktif
- Membuat collection
- Menampilkan collection

**File:**

```text
database_collection.js
```

---

### 2. Insert Data

Mempelajari cara menambahkan data ke dalam collection.

**Materi:**

- insertOne()
- insertMany()

**File:**

```text
02_insert_data.js
```

---

### 3. Query Data

Mempelajari cara membaca dan memfilter data.

**Materi:**

- find()
- findOne()
- Projection
- Sorting
- Limit
- Filtering

**File:**

```text
read_query.js
```

---

### 4. Update Data

Mempelajari cara memperbarui data yang sudah ada.

**Materi:**

- updateOne()
- updateMany()
- $set
- $unset

**File:**

```text
update_data.js
```

---

### 5. Delete Data

Mempelajari cara menghapus data dari collection.

**Materi:**

- deleteOne()
- deleteMany()

**File:**

```text
delete_data.js
```

---

### 6. Aggregation Framework

Mempelajari teknik analisis data menggunakan Aggregation Framework.

**Materi:**

- $group
- $sum
- $sort
- Analisis data berdasarkan kategori

**File:**

```text
aggregation.js
```

---

### 7. Indexing

Mempelajari cara meningkatkan performa query menggunakan index.

**Materi:**

- createIndex()
- getIndexes()

**File:**

```text
indexing.js
```

---

### 8. Exercise

Berisi latihan mandiri untuk menguji pemahaman peserta terhadap materi yang telah dipelajari.

**File:**

```text
exercise.js
```

---

## Cara Menjalankan

### 1. Jalankan MongoDB Server

Pastikan MongoDB Server telah terinstal dan berjalan pada komputer.

### 2. Buka MongoDB Shell

```bash
mongosh
```

### 3. Buat Database

Sebelum menjalankan script, buat atau pilih database terlebih dahulu.

```javascript
use("bootcampDE")
```

### 4. Buat Collection

Gunakan collection dengan nama:

```javascript
customers
```

Nama collection harus sesuai dengan dataset dan script yang digunakan agar seluruh perintah dapat berjalan dengan benar.

### 5. Import Dataset

Jika menggunakan file `customers.json`, import data terlebih dahulu menggunakan:

```bash
mongoimport --db northwind --collection customers --file customers.json --jsonArray
```

### 6. Jalankan Script

Jalankan setiap file secara bertahap sesuai urutan materi:

1. databaseCollection.js
2. insert_data.js
3. read_query.js
4. update_data.js
5. delete_data.js
6. aggregation.js
7. indexing.js
8. exercise.js

Script dapat dijalankan melalui:

- MongoDB Shell (mongosh)
- MongoDB Compass Playground

---

## Struktur Folder

```text
mongodb-customers-practice/
│
├── dataset/
│   └── customers.json
│
├── scripts/
│   ├── 01_database_collection.js
│   ├── 02_insert_data.js
│   ├── 03_read_query.js
│   ├── 04_update_data.js
│   ├── 05_delete_data.js
│   ├── 06_aggregation.js
│   ├── 07_indexing.js
│   └── 08_exercise.js
│
└── README.md
```

---
**Catatan:** Pastikan nama database, collection, dan dataset yang digunakan konsisten dengan script yang tersedia. Pada modul ini digunakan database `bootcampDE` dan collection `customers`.
