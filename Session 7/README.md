
# Admin Service

1) Create a directory named `admin` with a `main.py` and an `app.yaml` file
2) Edit the `main.py`
    * import packages
    * initialize the app
    * define the routes
    * define error handler
3) Create the requirement.txt file
4) Create the `app.yaml`
5) Deploy the service
6) Check that the message can be routed to the Pub / Sub by running:
`curl -i --data @update_message.json "https://admin-dot-[PROJECT-NAME]].ew.r.appspot.com/pubsub/disconnect"`

# Pub / Sub & Cloud Functions
1) Create a Pub/Sub topic
2) Create a Cloud Function triggering with a Pub/Sub entry
3) Check if the payload gets logged

# User Service

1) Create an angular app:
    * `mkdir user`
    * install `@angular/cli`: `npm install -g @angular/cli`
    * `ng new app`, use router and style you fill more comfortable with
2) Create components:
    * `mkdir src/app/components`
    * `cd src/app/components/`
    * `ng g c login-register`
    * `ng g c firsttime`
    * `ng g c profile` 
3) Create services:
    * `mkdir src/app/services`
    * `cd src/app/services/`
    * `ng g s auth`
    * `ng g s storage`
    * `ng g s firestore`
4) Create the login mechanism
5) Create the register mechanism
6) create the user setup
7) Create the user profile
