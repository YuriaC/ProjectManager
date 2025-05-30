require('dotenv').config();  // loads .env into process.env
const {cleanEnv, port, str} = require('envalid');
const env = cleanEnv(process.env, {
  PORT: port({default: 3000}),
  NODE_ENV: str(),
})

const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: env.NODE_ENV === 'development'
}));


app.listen(env.PORT, () => {
  console.log("Server listening on port", env.PORT);
}) 