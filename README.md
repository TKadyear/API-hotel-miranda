# REST API Hotel Miranda
This is a REST API of [Hotel Miranda]() and [Dashboard Miranda]()

## How to start
```bash
# Clone this repository
$ git clone https://github.com/TKadyear/API-hotel-miranda.git

# Go into the repository
$ cd API-hotel-miranda

# Install dependencies
$ npm install

# Listen the port
$ npm run start
```
## HTTP Verbs
| Verb   | Description          |
| ------ | -------------------- |
| GET    | Retrieving resources |
| POST   | Creating resources   |
| PUT    | Updating resources   |
| DELETE | Deleting resources   |

## Error messages

Common Status Codes	Description
200 - OK	Everything worked as expected
400 - Bad Request	The request was unacceptable, often due to missing a required parameter
401 - Unauthorized	Invalid Access Token
403 - Forbidden	Missing permissions to perform request
404 - Not Found	The requested resource doesn’t exist
500, 503	Something went wrong on our end
## User oAuth

