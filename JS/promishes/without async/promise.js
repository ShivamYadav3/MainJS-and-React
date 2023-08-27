export const getDetails = () =>
  new Promise((reply, reject) => {
    setTimeout(() => {
      reply({
        name: "Shivam",
        city: "Jabaplur",
        country: "India",
      });
    }, 4000);
  });
