import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Invalid token" });
  }

<<<<<<< HEAD
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;   // ✅ THIS LINE IS THE KEY

=======
  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      });
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = user;
>>>>>>> 904458ffb902e6588c3e75c1a36ec356407ae54a
    next();
  } catch (err) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default checkToken;