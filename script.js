$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        // Get form data
        var formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            location: $('#location').val(),
            blood_group: $('#blood_group').val()
        };

        // Validate name (alphabet characters only)
        if (!isValidAlphabetString(formData.name)) {
            alert('Please enter a valid name with alphabetic characters only.');
            return;
        }

        // Validate location (alphabet characters only)
        if (!isValidAlphabetString(formData.location)) {
            alert('Please enter a valid location with alphabetic characters only.');
            return;
        }

        // Validate mobile number (10 digits only)
        if (!isValidMobileNumber(formData.phone)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Send data to Telegram Bot API
        var message = `New registration:\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nBlood Group: ${formData.blood_group}`;
        var telegramBotToken = '6691298966:AAG4XGVf2aPw47HBUxTLUSmxjPgLJPBkM7U';
        var telegramGroupId = '-4188089568';
        var apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramGroupId}&text=${encodeURIComponent(message)}`;

        $.get(apiUrl, function(response) {
            // Handle success
            alert('Registration successful!');
        }).fail(function(xhr, status, error) {
            // Handle error
            alert('Failed to register. Please try again later.');
            console.error(error);
        });
    });

    // Function to validate alphabet characters
    function isValidAlphabetString(input) {
        var alphabetPattern = /^[a-zA-Z\s]*$/;
        return alphabetPattern.test(input);
    }

    // Function to validate mobile number
    function isValidMobileNumber(phone) {
        var phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phone);
    }
});
