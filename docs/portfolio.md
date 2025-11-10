### 🔹 API: `getUserPortfolios`

**Description:**

- get all portfolios for each user

**Method:** `GET`
**Endpoint:** `/api/v1/portfolio/{userId}`

**Success Response:**

```json
{
  "data": [
    {"name": "portfolio1",
     "allocation":
      {"TSMC":10}, //companyname: ratio(%)
      {"AAPL":90}
    },
    {"name": "portfolio1",
     "allocation":
      {"TSMC":10}, //companyname: ratio(%)
      {"AAPL":90}
    },
  ],
  "code": 1,
  "message": "Portfolio successfully added"
}
```

**Failure Response:**

```json
{
  "data": [],
  "code": 0,
  "message": "portfolio fail to be added"
}
```

### 🔹 API: `updateUserPortfolio`

**Description:**

- add new type of portfolio for use
- if not portfolio name exsit in the database, replacing the old one
- I think adding and replacing logic can be merged in this fucntion ?

**Method:** `POST`
**Endpoint:** `/api/v1/portfolio/{userId}`
**Content-Type:** `application/json`
**Request Body**

```json
{
  "portfolioName": { "TSMC": 10, "AAPL": 90 }
}
```

**Sucess Response:**

```json
{
  "data": {
    "name": "portfolioName",
    "allocation": { "TSMC": 10, "APPL": 90 }
  },
  "code": 1,
  "message": "portfolio successfully added"
}
```

**Failure Response:**

```json
{
  "data": {},
  "code": 0,
  "message": "portfolio fail to be added"
}
```

### 🔹 API: `deleteUserPortfolio`

**Description:**

- Delete portfolio for user

**Method:** `DELETE`
**Endpoint:** `/api/v1/portfolio/{userId}/{portfolioName}`
**Parameter**

| Name            | Type   | Required | Description        |
| --------------- | ------ | -------- | ------------------ |
| `userId`        | number | ✅       | id of user.        |
| `portfolioName` | string | ✅       | name of portfolio. |

**Success Response:**

```json
{
  "code": 1,
  "message": "portfolio successfully deleted"
}
```

**Failure Response:**

```json
{
  "code": 0,
  "message": "portfolio fail to be deleted"
}
```

### 🔹 API: `pertfolioPerformance`

**Description:**

- Get portfolio performance for user

**Method:** `DELETE`
**Endpoint:** `/api/v1/portfolio/performance/{userId}/{portfolioName}`
**Parameter**

| Name            | Type   | Required | Description        |
| --------------- | ------ | -------- | ------------------ |
| `userId`        | number | ✅       | id of user.        |
| `portfolioName` | string | ✅       | name of portfolio. |

**Success Response:**

```json
{
  "code": 1,
  "data": {
    "name": "portfolioName",
    "history": {
      "2024-01-01": 100, //data:price
      "2024-01-02": 101,
      "2024-01-03": 102
    }
  },
  "message": "portfolio history successfully retrieved"
}
```

**Failure Response:**

```json
{
  "code": 0,
  "data": {},
  "message": "portfolio history fail to be retrieved"
}
```
