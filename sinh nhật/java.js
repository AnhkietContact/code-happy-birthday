document.addEventListener('DOMContentLoaded', function() {
    // Thêm hiệu ứng khi click vào ảnh
    var birthdayImg = document.getElementById('birthday-img');
    var birthdayMessage = document.getElementById('birthday-message');

    birthdayImg.addEventListener('click', function() {
        // Thực hiện các hiệu ứng, ví dụ: thay đổi màu chữ
        birthdayMessage.style.color = getRandomColor();
    });

    // Hàm tạo màu ngẫu nhiên
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
