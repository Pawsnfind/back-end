🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend delpoyed at [🚫name service here](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here

🚫 Why did you choose this framework?

-    Point One
-    Point Two
-    Point Three
-    Point Four

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project


### Internal Routes

#### Ages Table

`/api/internal/paws/ages`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all age info                              |
| GET    | `/:id`                  | Developers          | Returns age info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new age record                          |
| PUT    | `/:id`                  | Developers          | Edits an age record                               |
| DELETE | `/:id`                  | Developers          | Deletes an age record                             |

```
{
  "id": "UUID pKey auto required",
  "age": "STRING Unique required"
}
```
`getAll()` -> Returns all items

`getById(id)` -> Returns a single age by ID

`getBy(filter)` -> Returns an age by chosen field to filter

`add(age)` -> Returns the count of item created

`update(id, change)` -> Updates item and returns confirmation count of updated item

`remove(id)` -> Deletes an item by ID and returns a confirmation count of items deleted

---

#### Animal Status Table

`/api/internal/paws/animal_status`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all animal status info                              |
| GET    | `/:id`                  | Developers          | Returns animal status info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new animal status record                          |
| PUT    | `/:id`                  | Developers          | Edits an animal status record                               |
| DELETE | `/:id`                  | Developers          | Deletes an animal status record                             |

```
{
  "id": "UUID pKey auto required",
  "animal_status": "STRING unique required"
}

```
`getAll()` -> Returns all items

`getById(id)` -> Returns a single animal status by ID

`getBy(filter)` -> Returns an animal status by chosen field to filter

`add(status)` -> Returns the count of item created

`update(id, change)` -> Updates item and returns confirmation count of updated item

`remove(id)` -> Deletes an item by ID and returns a confirmation count of items deleted

---

#### Application Status Table

`/api/internal/paws/application_status`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all application status info                              |
| GET    | `/:id`                  | Developers          | Returns application status info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new application status record                          |
| PUT    | `/:id`                  | Developers          | Edits an application status record                               |
| DELETE | `/:id`                  | Developers          | Deletes an application status record                             |

```
{
  "id": "UUID pKey auto required",
  "application_status": "STRING unique required"
}

```


#### Breeds Table

`/api/internal/paws/breeds`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all breeds info                              |
| GET    | `/:id`                  | Developers          | Returns breeds info for particular id.               |
| GET    | `/species/:id`          | Developers          | Returns breeds info for particular species id.               |
| POST   | `/`                     | Developers          | Creates a new breed record                          |
| PUT    | `/:id`                  | Developers          | Edits a breed record                               |
| DELETE | `/:id`                  | Developers          | Deletes a breed record                             |

```
{
  "id": "UUID pKey auto required",
  "species_id": "fKey-species integer",
  "breed": "STRING unique required"
}

```
#### Coat Length Table

`/api/internal/paws/coat_length`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all coat length info                              |
| GET    | `/:id`                  | Developers          | Returns coat length info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new coat length record                          |
| PUT    | `/:id`                  | Developers          | Edits a coat length record                               |
| DELETE | `/:id`                  | Developers          | Deletes a coat length record                             |

```
{
  "id": "UUID pKey auto required",
  "coat_length": "STRING Unique required"
}

```

#### Roles Table

`/api/internal/paws/roles`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all roles info                              |
| GET    | `/:id`                  | Developers          | Returns roles info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new roles record                          |
| PUT    | `/:id`                  | Developers          | Edits a roles record                               |
| DELETE | `/:id`                  | Developers          | Deletes a roles record                             |

```
{
  "id": "UUID pKey auto required",
  "roles": "STRING Unique required"
}

```

#### Size Table

`/api/internal/paws/size`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all size info                              |
| GET    | `/:id`                  | Developers          | Returns size info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new size record                          |
| PUT    | `/:id`                  | Developers          | Edits a size record                               |
| DELETE | `/:id`                  | Developers          | Deletes a size record                             |

```
{
  "id": "UUID pKey auto required",
  "size": "STRING Unique required"
}

```
#### Species Table

`/api/internal/paws/species`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all species info                              |
| GET    | `/:id`                  | Developers          | Returns species info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new species record                          |
| PUT    | `/:id`                  | Developers          | Edits a species record                               |
| DELETE | `/:id`                  | Developers          | Deletes a species record                             |

```
{
  "id": "UUID pKey auto required",
  "species": "STRING Unique required"
}

```
#### States Table

`/api/internal/paws/states`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all state info                              |
| GET    | `/:id`                  | Developers          | Returns state info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new state record                          |
| PUT    | `/:id`                  | Developers          | Edits a state record                               |
| DELETE | `/:id`                  | Developers          | Deletes a state record                             |

```
{
  "id": "UUID pKey auto required",
  "state": "STRING Unique required"
}

```
#### Subscriptions Table

`/api/internal/paws/subscriptions`  

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/`                     | Developers          | Returns all subscription info                              |
| GET    | `/:id`                  | Developers          | Returns subscription info for particular id.               |
| POST   | `/`                     | Developers          | Creates a new subscription record                          |
| PUT    | `/:id`                  | Developers          | Edits a subscription record                               |
| DELETE | `/:id`                  | Developers          | Deletes a subscription record                             |

```
{
  "id": "UUID pKey auto required",
  "subscription": "STRING Unique required",
  "subscription_duration_mo": "INTEGER required",
  "price": "DECIMAL required"
}

```

# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ ORGANIZATIONS

---

```
{
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
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

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
