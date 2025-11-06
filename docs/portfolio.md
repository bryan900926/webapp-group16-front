### 🔹 API: `getUserPortfolios`

**Description:**

- get all portfolios for each user

**Method:** `GET`
**Endpoint:** `/api/v1/portfolio/{userId}`

**Response:**

```json
{
  "portfolios": {
    "portfolio1": [
      {"ratio": 10, "assetName": "TSMC"},
      {"ratio": 90, "assetName": "AAPL"}
    ],
    "portfolio2": [
      {"ratio": 10, "assetName": "TSMC"},
      {"ratio": 90, "assetName": "AAPL"}
    ],
    "portfolio3": [
      {"ratio": 10, "assetName": "TSMC"},
      {"ratio": 90, "assetName": "AAPL"}
    ]
  },
  "code": 1,
  "message": "Portfolio successfully added"
}

{
    "portfolios": [],
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
  "portfolioName": [
    { "ratio": 10, "assetName": "TSMC" },
    { "ratio": 90, "assetName": "AAPL" }
  ]
}
```

**Response:**

```json
{
    "portfolioName": [{"ratio":10, "assetName": "TSMC"}, {"ratio":90, "assetName": "AAPL"}],
    "code": 1,
    "message": "portfolio successfully added"
}
{
    "assets": [],
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

**Response:**

```json
{
    "code": 1,
    "message": "portfolio successfully deleted"
}
{
    "code": 0,
    "message": "portfolio fail to be deleted"
}
```
