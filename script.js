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

        // Send data to Telegram Bot API
        var message = `New registration:\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nBlood Group: ${formData.blood_group}`;
        var telegramBotToken = '6691298966:AAG4XGVf2aPw47HBUxTLUSmxjPgLJPBkM7U';
        var telegramGroupId = '-4188089568';
        var apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramGroupId}&text=${encodeURIComponent(message)}`;

        try {
            $.get(apiUrl)
                .done(function(response) {
                    // Handle success
                    alert('Registration successful!');
                })
                .fail(function(xhr, status, error) {
                    // Handle error
                    var errorMessage = '';
                    if (xhr.responseJSON && xhr.responseJSON.description) {
                        errorMessage = xhr.responseJSON.description;
                    } else {
                        errorMessage = 'Failed to register. Please try again later.';
                    }
                    alert(errorMessage + '\nError: ' + error); // Concatenate the error message
                });
        } catch (error) {
            // Log the error to the console for debugging purposes
            console.error('An error occurred:', error);
            // Inform the user about the error
            alert('An error occurred. Please try again later.'+error);
        }
        
    });
});
