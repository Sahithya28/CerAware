const ip = "180.235.121.245"; // Define IP with port

const baseUrl = `http://${ip}/cervicalcancer`; // Define base URL using the IP

const config = {
  ip, // IP address
  baseUrl, // Add baseUrl to the config
  login: `${baseUrl}/userlogin.php`, // Use baseUrl for login
  signup: `${baseUrl}/patient.php`, // Use baseUrl for login
  doclog: `${baseUrl}/doctorlogin.php`, // Use baseUrl for login
  docsign: `${baseUrl}/doctorprofile.php`, // Use baseUrl for login
  answerquestions: `${baseUrl}/answerquestions1.php`, // Use baseUrl for answerquestions
  getCategoryUrl: (category) => `${baseUrl}/age21.php?category=${category}`, // Use baseUrl for category
  getPatientDetailsUrl: (username) => `${baseUrl}/patientdetails.php?username=${username}`,
  age21to34: `${baseUrl}/age21bw35.php`,
  attend: (username) => `${baseUrl}/docques.php?username=${username}`,
  search: `${baseUrl}/doctorsearch.php`,
  time: `${baseUrl}/time.php`,

  // Use baseUrl for answerquestions
  // Use baseUrl for patient details with username
};

export default config;
