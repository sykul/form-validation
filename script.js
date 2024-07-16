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
    GB: "GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\\d{1,4}",
  },
  { IE: "(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$" },
  { FR: "\\d{2}[ ]?\\d{3}" },
  { CN: "\\d{6}" },
];
const countryCodes = [];
postcodeRegexes.forEach((country) => {
  let countryCode = Object.keys(country)[0];
  countryCodes.push(countryCode);
});

function validateEmail(address) {
  if (address.value && address.checkValidity()) {
    return true;
  }

  const parts = address.value.split("@");

  if (parts.length !== 2) {
    return false;
  }

  if (parts[0].trim().length === 0 || parts[1].trim().length === 0) {
    return false;
  }

  return true;
}

function validateCountry() {
  if (countryField.value === "") {
    return false;
  } else if (countryCodes.includes(countryField.value)) {
    console.log(countryField.value);
    return true;
  } else {
    console.log('country?')
  }
}

function validatePostcode() {
  if (countryField.value === "GB") {
  } else if (countryField.value === "IE") {
  } else if (countryField.value === "FR") {
  } else if (countryField.value === "") {
  }
}

function validatePassword() {}

submitButton.addEventListener("click", () => {
  console.log(`email: ${validateEmail(emailField)}`);
  console.log(`country: ${validateCountry(emailField)}`);
});
