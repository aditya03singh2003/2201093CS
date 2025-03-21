# Average Calculator Microservice

This project is an HTTP microservice that calculates the average of numbers fetched from a third-party test server. The service maintains a sliding window of unique numbers and exposes a REST API for interaction.

---

## Features
- Supports fetching **prime**, **Fibonacci**, **even**, and **random** numbers.
- Maintains a sliding window (default size: 10) for storing unique numbers.
- Calculates the average of numbers in the sliding window.
- Handles errors and ignores API responses exceeding 500ms.

---

## API Endpoint

### `GET /numbers/:type`
- **Path Parameters**:
  - `p` for **Prime**
  - `f` for **Fibonacci**
  - `e` for **Even**
  - `r` for **Random**
- **Response**:
  - `windowPrevState`: State before API call.
  - `windowCurrState`: State after API call.
  - `numbers`: Fetched numbers.
  - `avg`: Average of the current window.

---

## Setup and Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with:
   ```env
   MY_ACCESS_TOKEN=your_access_token
   ```
3. Start the server:
   ```bash
   npm start
   ```

---

## Notes
- Only unique numbers are stored.
- If the window exceeds its size, older numbers are removed.
- API requests to the third-party server timeout after 500ms.

--- 

## License
Open-sourced under the MIT License.