import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import * as allAnalytics from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const analytics = allAnalytics.getAnalytics(app);

export default app;
export { analytics, allAnalytics };
