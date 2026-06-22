# Go2Sim Coding Challenge

Solution built using the following technologies:

*   **Language:** TypeScript
*   **Frontend:** React, Redux Toolkit, Redux-Saga
*   **Backend:** Express
*   **Database:** MySQL via TypeORM
*   **Deployment:** Docker and Docker Compose

### Get started:

```bash
$ docker compose up --build
```

[Open in browser](http://localhost:3000)

### Endpoints:
/server contains a postman.json collection

`GET /api/sims`: Fetch a history of all SIM activation logs.
`POST /api/sims/activate`: Accepts an `iccid` payload, to simulate network behavior.


### What next?
- endpoint to reuse/update an iccid
- /activate to accept all params
- pagination on /sims response
- api security
- activated device sorting (iccid/phone/status)
- only display active/failed status sims
