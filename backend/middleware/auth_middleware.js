import { getAuth } from 'firebase-admin/auth';
import firebase_app from "../firebase/firebase.js";

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  
  // Check if token exists
  if (!headerToken) {
    return response.status(401).send({ message: "No token provided" });
  }
  if (headerToken.split(" ")[0] !== "Bearer") {
    return response.status(401).send({ message: "Invalid token" });
  }

  const token = headerToken.split(" ")[1];

  getAuth(firebase_app)
    .verifyIdToken(token)
    .then((decodedToken) => {
      request.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error("Error verifying token:", error);
      return response.status(403).send({ message: "Could not authorize" });
    });
}

export default authMiddleware;
