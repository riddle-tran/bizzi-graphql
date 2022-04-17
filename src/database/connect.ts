import mongoose from "mongoose";

import { BIZZI_MONGOOSE_URL } from "configs";

mongoose.connect(BIZZI_MONGOOSE_URL);

const database = mongoose.connection;

export default database;
