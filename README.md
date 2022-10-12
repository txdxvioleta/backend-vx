# API REST - VX ACADEMY

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` 
`DB_HOST`
`DB_USER`
`DB_PASSWORD`
`DB_NAME` 
`DB_PORT`


## Usage/Examples

```javascript
#SERVER:
PORT = port

# DATABASE:
DB_HOST = host
DB_USER = user
DB_PASSWORD = password
DB_PORT = 3306 (default port)
DB_NAME = db_name
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/txdxvioleta/backend-vx.git
```

Go to the project directory

```bash
  cd backend-vx
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start 
```


**HTTP Methods**
- `GET` - Requests retrieve resource information
- `POST` - The server creates a new entry in a database
- `PUT` - Updates an existing resource
- `DELETE` - Deletes resource or related component

## API Reference

### Products:


#### Get all products:

```http
  GET /products/
```

#### Get product by id:

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get product by category:

```http
  GET /products/categories/${category}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Id of item to fetch |




#### Create new product:

```http
  POST /products/
```



#### Update product:

```http
  UPDATE /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Delete product:

```http
  DELETE /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Categories:

#### Get all categories:

```http
  GET /categories/
```

#### Get categories by id:

```http
  GET /categories/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create new category:

```http
  POST /categories/
```

#### Update category:

```http
  UPDATE /categories/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Delete category:

```http
  DELETE /categories/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Feedback

If you have any feedback, please reach out to us at gcaram95@gmail.com


## Authors

- [@txdxvioleta](https://www.github.com/txdxvioleta)
