<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

`Middleware functions have access to request, response, and the next middleware function. Express sessions and JWTs are ways of creating a token that can be checked to authenticate the current user. Bcrypt is a password hashing function.`

2.  What does bcrypt do in order to prevent attacks?

`For each password, bcrypt stores a hash digest which it compares to the hashed version of that password.`

3.  What are the three parts of the JSON Web Token?

`The header, which contains the algorithm and token type; the payload, which contains various identifiers like username and id; the signature, which contains the first two things encoded, plus a "secret".`
