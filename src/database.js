import {connect} from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost/crud-mongo");
    console.log("Db conected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
