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

#### Shelter Routes

| Method | Endpoint                                   | Access Control | Description                                           |  Required                |
| ------ | -------------------------------------------| -------------- | ------------------------------------------------------|--------------            |         
| GET    | `/api/shelters/`                           | ?              | Returns all the shelters.                             |                          |
| GET    | `/api/shelters/:id`                        | ?              | Returns a shelter by an ID                            |   shelter_id             |
| GET    | `/api/shelters/:id/contacts`               | ?              | Return all the shelter contacts by shelter ID.        |   shelter_id             |
| GET    | `/api/shelters/contacts/:id`               | ?              | Returns a shelter contact by Id.                      |  contact_id              |
| GET    | `/api/shelters/:id/locations`              | ?              | Return all the shelter locations by shelter ID.       |   shelter_id             |
| GET    | `/api/shelters/locations/:id`              | ?              | Returns a shelter location by Id.                     |    location_id           |
| GET    | `/api/shelters/:id/users`                  | ?              | Returns all the shelter users  based on their rold id |     shelter_id           |
| GET    | `/api/shelters/follows/:shelterId/:userId` | ?              | Returns a users following a shelter                   |   shelter_id,user_id     |
| GET    | `/api/shelters/:id/follows`                | ?              | Return all the users following a shelter .            |   shelter_id             |
| POST   | `/api/shelters/:id/location`               | ?              | Add a location for a shelter.                         |    shelter_id            |
| PUT    | `/api/shelters/:id/location/:locationId`   | ?              | Update a location of a shelter.                       |  shelter_id,location_id  |
| DELETE | `/api/shelters/:id/location/:locationId`   | ?              | Delete a shelter location for a shelter.              |  shelter_id,location_id  |
| POST   | `/api/shelters/:id/contact`                | ?              | Add a contact for a shelter.                          |    shelter_id            |
| PUT    | `/api/shelters/:id/contact/:contactId`     | ?              | Update a contact of a shelter.                        |  shelter_id,contact_id   |
| DELETE | `/api/shelters/:id/contact/:contactId`     | ?              | Delete a shelter contact for a shelter.               |  shelter_id,contact_id   |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/current`        | all users           | Returns info for the logged in user.               |
| GET    | `/users/org/:userId`    | owners, supervisors | Returns all users for an organization.             |
| GET    | `/users/:userId`        | owners, supervisors | Returns info for a single user.                    |
| POST   | `/users/register/owner` | none                | Creates a new user as owner of a new organization. |
| PUT    | `/users/:userId`        | owners, supervisors |                                                    |
| DELETE | `/users/:userId`        | owners, supervisors |                                                    |

# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ SHELTERS

---

```
{
  id: INTEGER
  shelter: STRING
  is_upgraded: BOOLEAN
  EIN: STRING
  created_at: TIMESTAMP
  shelter_location_id: INTEGER
  shelter_contact_id: INTEGER
}
```

#### SHELTER_FOLLOWS

---

```
{  
  shelter_id: INTEGER foreign key in SHELTERS table
  user_id: INTEGER  
}
```

#### SHELTER_LOCATIONS

---

```
{
  id: INTEGER
  shelter_id: INTEGER foreign key in SHELTERS table
  street_address: STRING
  city: STRING
  zipcode: STRING
  state_id: INTEGER
  phone_number: STRING
  nickname: STRING
  shelter_contact_id: INTEGER
  created_at: TIMESTAMP
}
```

#### SHELTER_USERS

---

```
{ 
  id: INTEGER
  role_id: INTEGER 
  shelter_id: INTEGER foreign key in SHELTERS table
  username: STRING
  created_at: TIMESTAMP  
}
```

#### SHELTER_CONTACTS

---

```
{ 
  id: INTEGER
  shelter_id: INTEGER foreign key in SHELTERS table
  name: STRING
  email: STRING
  phone: STRING  
}
```

## 2️⃣ Models

`getAllShelters()` -> Returns all shelters

`searchShelter(filter)` -> search the Shelter Table

`getById(shelterId)` -> Returns a single shelter by shelter ID

`getShelterLocation(shelterId)` -> Returns a single location by shelter ID

`getShelterFollows(shelterId)` -> Returns all users following a shelter based on shelter ID

`addShelter(shelter)` -> Add a new Shelter

`updateShelter(shelterId, changes object)` -> Updates a single shelter by shelter ID

`deleteShelter(shelterId)` -> Delete a shelter by ID
<br>
<br>
<br>
`getUsersByShelterId(shelterId)` -> Returns all shelter users by shelter ID

`getByRoleId(roleId)` -> Returns all shelter users by role ID

`getByShelterRoleId(shelterId,roleId)` -> Returns all shelter users based on shelter ID and role ID

`addShelterUsers(user)` --> Creates a new Shelter user and returns that user.

`deleteShelterUser(shelterId,roleId)` -> deletes everything based on shelter ID and role ID
<br>
<br>
<br>
`getAllShelterLocations()` -> Returns all shelter locations

`searchShelterLocations(roleId)` -> search the Shelter locations Table

`getByShelterLocationId(shelterLocationId)` -> Returns a single shelter location by shelter ID

`getLocationByShelterId(shelterId)` -> Returns all shelter locations by shelter ID 

`addShelterLocations(shelter)` -> Add a new Shelter location

`updateShelterLocations(shelterId, changes object)` -> Updates a single shelter location by shelter ID

`deleteShelterLocations(shelterLocationId)` -> Delete a shelter location by ID
<br>
<br>
<br>
`getUsersFollowsByShelterId(shelterId)` -> Returns all shelter users who follows a shelter by shelter ID

`getByUserFollowId(userId)` -> Returns a shelter user who follows a shelter by shelter ID

`getFollowsByIds(shelterId,userId)` -> Returns a users who follows a shelter based on shelter ID and user ID

`addShelterFollows(user)` --> Creates a new user who follows the shelter and returns that user.

`deleteShelterFollows(shelterId,userId)` -> deletes a user who follows the shelter based on shelter ID and user ID
<br>
<br>
<br>
`getAllShelterContacts()` -> Returns all shelter contact

`searchShelterContacts(roleId)` -> search the Shelter contacts Table

`getByShelterContactId(shelterContactId)` -> Returns a single shelter contact by shelter ID

`getContactByShelterId(shelterId)` -> Returns all shelter contacts by shelter ID 

`addShelterContacts(shelter)` -> Add a new Shelter contact

`updateShelterContacts(shelterId, changes object)` -> Updates a single shelter contact by shelter ID

`deleteShelterContacts(shelterContactId)` -> Delete a shelter contact by ID


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
