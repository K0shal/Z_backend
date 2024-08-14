const userRoute=require("./user.routes.js");
const adminRoute=require("./admin.routes.js");

const routes=(app) => {
  // v1
  app.use("/api/user",userRoute);
  app.use("/api/admin",adminRoute);

};
module.exports=routes;
