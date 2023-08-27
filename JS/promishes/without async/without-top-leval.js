import { getDetails } from "./promise.js";

let userDetails = {};

(async () => {
  userDetails = await getDetails();
  greetUser();
})();

/* async function loadUserData() {
  userDetails = await getDetails();
  greetUser();
} */

// loadUserData();

function greetUser() {
  alert(`Hello Mr. ${userDetails.name} from ${userDetails.city}`);
}
