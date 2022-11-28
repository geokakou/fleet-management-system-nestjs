## Fleet Management System

### Build and Run Microservices
```bash
$ docker-compose up --build -V
```

You can find the postman collection on file `fms.postman_collection.json`.

For assign a Driver to a Car, there is the below endpoint
```bash
Post http://localhost:3000/trips
{
  "driverId": "10001",
  "carRegNumber": "AAA111",
  "isActive": true
}
```