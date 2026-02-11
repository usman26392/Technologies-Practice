export default function telephoneFlag() {
  window.addEventListener("load", function () {
    if (document.querySelector(".phoneiti") !== null) {
      const inputs = document.querySelectorAll(".phoneiti");
      inputs.forEach(function (intll) {
        const iti = window.intlTelInput(intll, {
          hiddenInput: (telInputName) => ({ phone: "full_phone", country: "country_code" }),
          initialCountry: "ae",
          separateDialCode: true,
          geoIpLookup: function (callback, failure) {
            fetch("https://ipinfo.io/json")
              .then((response) => response.json())
              .then((data) => {
                var countryCode = data.country ? data.country : "us";
                callback(countryCode);
              })
              .catch(() => failure && failure());
          },
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.3.1/build/js/utils.min.js",
        });
        // Wait for plugin and utils to finish initializing
        iti.promise.then(() => {
          intll.addEventListener("input", function () {
            updateHiddenField(iti);
          });
          intll.addEventListener("countrychange", function () {
            updateHiddenField(iti);
          });
        });
      });
      // Function to update the hidden field with the country code + phone number
      function updateHiddenField(iti) {
        // Only called after utils is loaded
        if (window.intlTelInputUtils) {
          const fullPhone = iti.getNumber(window.intlTelInputUtils.numberFormat.E164);
          const hiddenInput = document.getElementsByName("full_phone")[0];
          if (hiddenInput) hiddenInput.value = fullPhone;
        }
      }
    }
  });
}
