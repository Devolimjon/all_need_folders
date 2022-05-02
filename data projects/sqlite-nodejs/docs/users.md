# Users

**`POST`** /register

**Request:**
```json
{
  "name": "Olimtoy",
  "age": 13,
  "username": "makhmudov",
  "password": "max256"
}
```

**Response:**
**`OK 200`** 
```json
{
   "message": "Register successful!",
   "user": {
      "id": "0",
      "name": "Olimtoy",
      "age": 13,
      "username": "makhmudov"
   }
}
```
**`500 Internal server error`**

**`POST`** /login

**Request:**
```json
{
  "username": "makhmudov",
  "password": "max256"
}
```
**Response:**
**`OK 200`** 
``` json
{
  "message": "Login successfuly"
}
```
**`401 Unauthorized`** 
``` json 
{
 "message": "Do`g`ri Yoz, uxlatjak boma bizani, biza moshni!"
}
```
**`404 Not Found`** 

```json
{
  "message": "Login successfuly"
}
```