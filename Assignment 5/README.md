# Overview

API Testing with JMeter using RESTful API.  
This project covers CRUD operations (`GET`, `POST`, `PATCH`, `DELETE`) and CSV-based data-driven testing.

**API Used:** https://api.restful-api.dev

---

# Test Plan Structure

```text
Restful API Test Plan
└── Restful API Thread Group
    ├── HTTP Request Defaults
    ├── HTTP Header Manager
    ├── CSV Data Set Config
    ├── POST Object
    │   └── JSON Extractor
    ├── GET Object
    ├── PATCH Object
    ├── DELETE Object
    ├── GET After Delete
    ├── View Results Tree
    └── Summary Report
```

---

# Thread Group Configuration

| Property | Value |
|----------|-------|
| Number of Threads | 1 |
| Ramp-Up Period | 1 |
| Loop Count | 3 |

---

# HTTP Request Defaults

| Field | Value |
|------|------|
| Protocol | https |
| Server Name | api.restful-api.dev |

---

# HTTP Header Manager

| Header | Value |
|--------|-------|
| Content-Type | application/json |

---

# API Endpoints Tested

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/objects` | Create new object |
| GET | `/objects/${id}` | Retrieve object |
| PATCH | `/objects/${id}` | Update object |
| DELETE | `/objects/${id}` | Delete object |
| GET | `/objects/${id}` | Verify deletion |

---

# CSV Data Setup

## Filename

```text
users.csv
```

## CSV Content

```csv
name,year,price
Laptop,2025,1200
Phone,2024,800
Tablet,2023,500
```

## Variables Used

```text
${name}, ${year}, ${price}
```

---

# Request Configurations

## POST Object

### Method
```text
POST
```

### Path
```text
/objects
```

### Request Body

```json
{
  "name": "${name}",
  "data": {
    "year": ${year},
    "price": ${price}
  }
}
```

---

## GET Object

### Method
```text
GET
```

### Path

```text
/objects/${id}
```

---

## PATCH Object

### Method
```text
PATCH
```

### Path

```text
/objects/${id}
```

### Request Body

```json
{
  "name": "Updated Laptop"
}
```

---

## DELETE Object

### Method
```text
DELETE
```

### Path

```text
/objects/${id}
```

---

## GET After Delete

### Method
```text
GET
```

### Path

```text
/objects/${id}
```

---

# JSON Extractor Configuration

| Field | Value |
|------|------|
| Variable Name | id |
| JSON Path | $.id |
| Match No. | 1 |

---

# Test Execution Results

## CRUD Cycle Validation

| Iteration | Name | POST | GET | PATCH | DELETE | Final GET |
|----------|------|------|------|------|------|------|
| 1 | Laptop | 200 OK | 200 OK | 200 OK | 200 OK | 404 Not Found |
| 2 | Phone | 200 OK | 200 OK | 200 OK | 200 OK | 404 Not Found |
| 3 | Tablet | 200 OK | 200 OK | 200 OK | 200 OK | 404 Not Found |

---

# Summary Statistics

| Metric | Value |
|--------|------|
| Total Samples | 15 |
| Average Response Time | 440 ms |
| Throughput | 2.2/sec |
| Success Rate | 100% |

---

# Files Included

| File | Description |
|------|-------------|
| `Restful API Test Plan.jmx` | JMeter test plan file |
| `users.csv` | CSV data file for data-driven testing |
| `README.md` | Project documentation |

---

# Conclusion

This assignment successfully demonstrated API testing using Apache JMeter with CRUD operations and CSV-based parameterization. All API requests executed successfully with a 100% success rate, validating proper request handling and response verification using JSON Extractor.
