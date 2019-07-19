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


#### Donations

| Method | Endpoint                    | Access Control              | Description                                        |
| ------ | --------------------------- | --------------------------- | ---------------------------------------------------|
| GET    | `/api/donations/`           | owner                       | Returns all donations                              |
| GET    | `/api/donations/:id`        | owner shelter operator      | Returns donations by id                            |
| GET    | `/api/donations/:id/user`   | owner, adopters             | Returns donations by user                          |
| GET    | `/api/donations/:id/shelter`| owner, shelter operators    | Returns donations for shelter                      |
| POST   | `/api/donations/`           | adopters                    | Makes a new donation                               |
| PUT    | `/api/donations/:id`        | owners                      | Update existing donation                           |   


| Method | Endpoint                        | Access Control              | Description                                        |
| ------ | ------------------------------- | --------------------------- | ---------------------------------------------------|
| GET    | `/api/subscriptions/`           | owner                       | Returns all subscriptions                          |
| GET    | `/api/subscriptions/:id`        | owner shelter operator      | Returns subscriptions by id                        |
| GET    | `/api/subscriptions/:id/shelter`| owner, shelter operator     | Returns subscription for shelter                   |
| GET    | `/api/subscriptions/:id/level`  | owner                       | Returns subscriptions by level                     |
| POST   | `/api/subscriptions/`           | shelter                     | Makes a new subscription                           |
| PUT    | `/api/subscriptions/:id`        | owners                      | Update existing donation                           |      

# Data Model


#### 2️⃣ SUBSCRIPTIONS

---

```

{
"id": UUID,
"shelter_id": STRING,
"subscription_id": STRING,
"is_active": BOOLEAN,
"created_at": "TIMESTAMP",
"expiration_date": "TIMESTAMP"
}

```

#### DONATIONS

---

```
{
"id": UUID,
"user_id": INTEGER,
"shelter_id": INTEGER,
"amount": DECIMAL,
"created_at": TIMESTAMP
}
```

## 2️⃣ Actions

- `getDonationsByUser(id)` -- returns donation by user id

- `getDonationbyId(id)` - return donation by donation id

- `getDonationsByShelter(id)` - return donation by shelter id

`getAllDonations`

`addDonation(donation)` - add donation by input field

`updateDonation(id,change)` - update donation by id

<br><br><br>
`getAllSubscriptions`

`getSubscriptionbyID(id)` -- returns donation by id

`getSubscriptionbyShelter(id)` -- returns donaiton by shelter id

`getSubscriptionbyLevel(id)`- get subscriptions by subscription id

`addSubscription(subscription)` - add subscription

`updateSubscription(id, change)` - update subscription

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
