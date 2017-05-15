## Served Config

#### Description

A method to avoid storing some front-end configurations in your version control*. Read them them from environment variables on your server and provide an API route which your front-end can request.

#### Setup

##### Rails
```bash
cd rails-server

rails db:drop db:create

export APIKEY="superSECRETkeyHERE"

rails s
```

##### Angular
```bash
npm install -g http-server

cd angular-frontend

hs
```

#### Running

Launch a browser to `http://localhost:8080/` and open the js console to see the output.

##

(* to be clear, this does not provide a means to _hide_ your configuration from the user of the browser. The `configs` http request and resultant data are available to any moderately determined user)
