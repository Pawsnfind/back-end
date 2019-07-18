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

#### Application Routes

| Method | Endpoint                               | Description                                          |  Required                        |
| ------ | ---------------------------------------| -----------------------------------------------------|--------------------------------- |         
| GET    | `/api/applications/`                   | Returns all the applications.                        |                                  |
| GET    | `/api/applications/:id`                | Returns an applications by ID                        |   application_id                 |
| GET    | `/api/applications/:id/notes`          | Return all the application notes by application ID.  |   application_id                 |
| GET    | `/api/applications/notes/:id`          | Returns an application note by note Id.              |  note_id                         |
| GET    | `/api/applications/:id/admin/:adminId` | Return all the notes created by shelter admin ID.    |   application_id,shelterAdmin_id |
| GET    | `/api/applications/shelter/:id`        | Returns all the applications by shelter Id.          |    shelter_id                    |        
| GET    | `/api/applications/user/:id`           | Returns all the applications by user Id              |     user_id                      |
| POST   | `/api/applications/note`               | Add a note for an application                        |                                  |
| PUT    | `/api/applications/note/:id`           | Update a note for an application .                   |   note_id                        |
| DELETE | `/api/applications/note/:id`           | Delete a note for an application .                   |    note_id                       |
| PUT    | `/api/applications/:id/status`         | Update an application status by application ID.      |  application_id                  |
| POST   | `/api/applications/`                   | Add an application.                                  |                                  |


# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ APPLICATIONS

---

```
{
  id: INTEGER
  animal_id: STRING
  shelter_id: INTEGER
  application_status_id: INTEGER
  user_id:INTEGER
  created_at: TIMESTAMP
 
}
```

#### USER

---

```
{  
  id: INTEGER
  email: STRING
  sub_id: STRING
  username: STRING
  created_at: TIMESTAMP  
}
```

####  APPLICATION_META

---

```
{
    id:  INTEGER
    application_id: INTEGER foreign key in APPLICATIONS table
    name: STRING
    street_address: STRING
    city: STRING
    state_id: INTEGER
    zip: STRING
    home_phone: STRING
    email: STRING
    cell_phone: STRING
    is_over_18: BOOLEAN
    is_homeowner: BOOLEAN
    is_in_agreement: BOOLEAN
    is_homevisit_allowed: BOOLEAN
    is_fenced: BOOLEAN
    ref_name_1: STRING
    ref_phone_1: STRING
    ref_relationship_1: STRING
    ref_name_2: STRING
    ref_phone_2: STRING
    ref_relationship_2: STRING
    is_declaration: BOOLEAN
}
```

#### APPLICATION_ADMIN

---

```
{ 
  id: INTEGER
  notes: STRING 
  application_id: INTEGER foreign key in APPLICATIONS table
  shelter_user_id: INTEGER
  created_at: TIMESTAMP  
}
```


## 2️⃣ Models

🚫 This is an example, replace this with the actions that pertain to your backend

`getAll()` -> Returns all applications

`getById(application_id)` -> Returns a single application by ID

`getBy(filter)` -> search through application by keyword

`getByShelterId(shelter_id)` -> Returns all application by Shelter ID

`getByUserId(user_id)` -> Returns an application by user ID

`getByAnimalId(animal_id)` -> Returns a single application by animal ID

`add(application object)` -> Create a new applications

`update(application_id,application object)` -> Update an application by ID

`remove(application_id)` -> Delete an application_id by ID
<br>
<br>
<br>
`getById(application_metaId)` -> Returns a single application meta by application meta ID

`getBy(filter)` -> search through application meta by keyword

`add(application meta object)` --> Creates a new application meta 

`update(application_metaId, changes object)` -> Updates the application meta.

`remove(application_metaId)` -> deletes the application meta
<br>
<br>
<br>
`getById(application_adminId)` -> Returns a single application admin by application admin ID

`getBy(filter)` -> search through application admin by keyword

`getByApplicationId(application_id)` -> Returns a single application admin by application ID

`add(note object)` --> Creates a new application note 

`update(application_adminId, changes object)` -> Updates the application note by note ID.

`remove(application_adminId)` -> deletes the application note bu note ID

`findMatch(application_Id,application_adminId)` -> find a match by application ID and application admin ID


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
