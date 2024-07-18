const emailField = document.getElementById("email");
const countryField = document.getElementById("country");
const postcodeField = document.getElementById("postcode");
const passwordField = document.getElementById("password");
const passwordConfirmationField = document.getElementById(
  "password-confirmation"
);
const submitButton = document.getElementById("submit-button");
const postcodeRegexes = [
  {
    country: "GB",
    regex:
      /^GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4}$/,
  },
  {
    country: "IE",
    regex: /^(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/,
  },
  { country: "FR", regex: /^\d{2}[ ]?\d{3}$/ },
  { country: "CN", regex: /^\d{6}$/ },
];

const countryCodes = postcodeRegexes.map((object) => object.country);

function validateEmail(emailField) {
  if (emailField.validity.typeMismatch) {
    emailField.setCustomValidity("Please type an email address");
    return false;
  } else {
    emailField.setCustomValidity("");
  }

  const parts = emailField.value.split("@");

  if (parts.length !== 2) {
    emailField.setCustomValidity("invalid email address");
    return false;
  }

  if (parts[0].trim().length === 0 || parts[1].trim().length === 0) {
    emailField.setCustomValidity("");
    return false;
  }
  if (emailField.checkValidity()) {
    emailField.setCustomValidity("");
    return true;
  }

  return false;
}

function validateCountry(countryField) {
  if (countryField.value === "") {
    return false;
  } else if (countryCodes.includes(countryField.value)) {
    return true;
  } else {
    return false;
  }
}

function validatePostcode(postcodeField, countryField, postcodeRegexes) {
  if (countryField.value.length === 0) {
    postcodeField.setCustomValidity("select a country first");
    return false;
  }

  const postcodeRegexObject = postcodeRegexes.filter(
    (item) => item.country === `${countryField.value}`
  );
  const postcodeRegex = postcodeRegexObject[0].regex;

  if (postcodeRegex.test(postcodeField.value)) {
    postcodeField.setCustomValidity("");
    return true;
  } else {
    postcodeField.setCustomValidity("invalid postcode");
  }
}

function validatePassword(passwordField) {
  if (passwordField.value.length < 5) {
    return "needs to be between 5 and 20 characters";
  } else if (passwordField.value.length > 20) {
    return "needs to be between 5 and 20 characters";
  } else if (/\%/.test(passwordField.value)) {
    return "can't contain '%'";
  } else {
    return true;
  }
}

function checkPasswordsMatch(passwordField, passwordConfirmationField) {
  if (passwordField.value === passwordConfirmationField.value) {
    return true;
  } else {
    return false;
  }
}

emailField.addEventListener("change", () => {
  validateEmail(emailField);
  emailField.reportValidity();
});

countryField.addEventListener("change", () => {
  validateCountry(countryField);
  countryField.reportValidity();
});

postcodeField.addEventListener("change", () => {
  validatePostcode(postcodeField, countryField, postcodeRegexes);
  postcodeField.reportValidity();
});

passwordField.addEventListener("change", () => {
  validatePassword(passwordField);
  passwordField.reportValidity();
});

passwordConfirmationField.addEventListener("change", () => {
  checkPasswordsMatch(passwordField, passwordConfirmationField);
  passwordConfirmationField.reportValidity();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`email: ${validateEmail(emailField)}`);
  console.log(`country: ${validateCountry(countryField)}`);
  console.log(
    `postcode: ${validatePostcode(
      postcodeField,
      countryField,
      postcodeRegexes
    )}`
  );
  console.log(`password: ${validatePassword(passwordField)}`);
  console.log(
    `password match: ${checkPasswordsMatch(
      passwordField,
      passwordConfirmationField
    )}`
  );
});

const email = document.getElementById("mail");

countryField.value = "CN";
