import { getDetails } from "./promise.js";
const userDetails = await getDetails();

console.log(userDetails);

function greetUser() {
  alert(`Hello Mr. ${userDetails.name} from ${userDetails.city}`);
}

greetUser();
