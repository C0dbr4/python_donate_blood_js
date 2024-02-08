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

        $.get(apiUrl, function(response) {
            // Handle success
            alert('Registration successful!');
        }).fail(function(xhr, status, error) {
            // Handle error
            alert('Failed to register. Please try again later.');
            console.error(error);
        });
    });
});
