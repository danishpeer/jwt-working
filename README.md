# JSON WEB TOKEN

Json web tokens are basically json objects (claims) encoded as strings which can are mainly used for Authentication and Authorization in web development.

## Structure

**Header**: The header typically consists of two parts: the type of token (JWT) and the signing algorithm being used, such as HMAC SHA256 or RSA.

**Payload**: This contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims. Examples include the user ID, role, and expiration time.

**Signature**: To create the signature part, you take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, then sign it to create the JWT.

For example:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

In this JWT:

- The first part (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9) is the header, which declares the type of token (JWT) and the signing algorithm used (in this case, HMAC SHA256).

- The second part (eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ) is the payload, containing claims like the subject (sub), name (name), and issued at (iat).

- The third part (SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c) is the signature, which is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

## Flow
below image shows the flow
<p align="center">
  <img src="jwt-flow.png" height="400">
</p>

## How to use
- Clone this repository
```
git clone https://github.com/danishpeer/jwt-working.git
```

- Install the dependencies

```
npm install
```

- To run the auth server on 4000 port

```
node auth_server.js
```

- To Run the backend server on 3000 port

```
node server.js
```