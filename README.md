🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend deployed at [Heroku](https://prod-pawsnfind.herokuapp.com) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework goes here

🚫 Why did you choose this framework?

- NodeJS with express framework
- knex for database connection 


## 2️⃣ Endpoints

#### User Routes

| Method | Endpoint                | Access Control | Description                                  | Required                      |
| ------ | ----------------------- | -------------- | -------------------------------------------- | ----------------------------- |
| GET    | `/api/users`            | ?              | Returns all users in system.                 |                               |
| GET    | `/api/users/:id`        | ?              | Returns a user given an user id.             | id                            | 
| GET    | `/api/users/:id/complete`| ?             | Returns complete user data given an user id. | id                            | 
| GET    | `/api/users/:username`  | ?              | Returns a user given a username.             | username                      |
| GET    | `/api/users/:email`     | ?              | Returns a user given an email.               | email                         |
| GET    | `/api/users/:sub_id`    | ?              | Returns a user given a sub id.               | sub_id                        |
| POST   | `/api/users/`           | ?              | Add a new user.                              | email, sub_id, username       |
| PUT    | `/api/users/:id`        | ?              | Update a user's information.                 | id                            |
| DELETE | `/api/users/:id`        | ?              | Delete a user.                               | id                            |

#### User Meta Routes

| Method | Endpoint                              | Access Control | Description                                 | Required                |
| ------ | ------------------------------------- | ------------   | ------------------------------------------- | ----------------------- |
| GET    | `api/users/meta/:id`                  | ?              | Returns user meta given id.                 | id                      |
| GET    | `api/users/:user_id/meta`             | ?              | Returns user meta given user id.            | user_id                 |
| GET    | `api/users/meta/state/:state_id`      | ?              | Returns user metas given state id.          | state_id                |
| GET    | `api/users/meta/suid/:shelter_user_id`| ?              | Returns user metas given shelter user id.   | shelter_user_id         |
| GET    | `api/users/meta/num/:phone_number`    | ?              | Returns user metas given phone number.      | phone_number            |
| GET    | `api/users/meta/zip/:zip`             | ?              | Returns user metas given zip code.          | zip                     |
| GET    | `api/users/meta/city/:city`           | ?              | Returns user metas given city.              | city                    |
| POST   | `/api/users/meta`                     | ?              | Creates a new user meta.                    | user_id, shelter_user_id|
| PUT    | `/api/users/meta/:id`                 | ?              | Updates a user meta.                        | id                      |
| DELETE | `/api/users/meta/:id`                 | ?              | Deletes a user meta.                        | id                      |

# Data Model

#### 2️⃣ USERS

---

```
{
  id: UUID
  email: STRING
  sub_id: INTEGER
  username: BOOLEAN
  created_at: STRING
}
```

#### USER_META

---

```
{
  id: UUID
  user_id: UUID foreign key in USERS table
  phone_number: STRING
  name: STRING
  street_address: STRING
  city: STRING
  state_id: UUID foreign key in STATES table
  zip: STRING
  shelter_user_id: UUID foreign key in SHELTER_USERS table
}
```

## 2️⃣ Actions

`getUsers()` -> Returns all users

`getUserById(id)` -> Returns a single user by ID

`getCompleteUserDataById(id)` -> Returns complete user data for a single user by ID

`getUserByUsername(username)` -> Returns a single user by username

`getUserByEmail(email)` -> Returns a single user by email

`getUserBySubId(sub_id)` -> Returns a single user by sub id

`createUser()` -> Returns the created user

`updateUser(id)` -> Update a user by ID

`deleteUser(id)` -> Delete a user by ID
<br>
<br>
<br>
`getUserMetaById(id)` -> returns a user meta by ID

`getUserMetaByUserId(user_id)` -> Returns a user meta by user ID

`getUserMetaByStateId(state_id)` -> Returns a user meta by state ID

`getUserMetaByShelterUserId(shelter_user_id)` -> Returns a user meta by shelter user ID

`getUserMetaByPhoneNumber(phone_number)` -> Returns user meta by phone number

`getUserMetaByZip(zip)` -> Returns user meta by zip

`getUserMetaByCity(city)` -> Returns user meta by city

`createUserMeta()` --> Creates a new user meta and returns it. 

`updateUserMeta(id, changes)` -> Updates a single user meta by ID.

`deleteUserMeta(id)` -> deletes user meta by ID

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation] (https://github.com/Pawsnfind/front-end/blob/master/README.md)
