## Served Config

#### Description

A method to avoid storing some front-end configurations in your version control*. Read them them from environment variables on your server and provide an API route which your front-end can request.

#### Setup

```bash
cd rails-server

rails db:drop db:create

export APIKEY="YOUR_API_KEY_HERE"

rails s
```

(* to be clear, this does not provide a means to _hide_ your configuration from the user of the browser. The `configs` http request and resultant data are available to any moderately determined user)
