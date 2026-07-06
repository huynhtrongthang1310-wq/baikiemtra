$(document).ready(function() {
    
    // 1. Hiệu ứng rê chuột vào các bài viết (Card)
    $('.card').hover(
        function() {
            $(this).css({'box-shadow': '0px 4px 15px rgba(0,0,0,0.2)', 'transform': 'scale(1.02)'});
            $(this).css('transition', 'all 0.3s ease');
        },
        function() {
            $(this).css({'box-shadow': 'none', 'transform': 'scale(1)'});
        }
    );

    // 2. Xử lý Form Bình luận ở trang Chi tiết
    $('#commentForm').on('submit', function(e) {
        e.preventDefault(); // Ngăn trang bị tải lại

        // Lấy dữ liệu từ input
        let name = $('#commentName').val();
        let content = $('#commentContent').val();

        // Tạo cấu trúc hiển thị bình luận mới
        let newComment = `
            <div class="user-comment" style="border-bottom: 1px dashed #ccc; padding: 10px 0;">
                <strong>${name}:</strong>
                <p>${content}</p>
            </div>
        `;

        // Thêm vào danh sách và hiệu ứng hiện từ từ (SlideDown)
        $(newComment).hide().appendTo('#commentList').slideDown();

        // Xóa sạch form sau khi gửi
        $('#commentName').val('');
        $('#commentContent').val('');
    });
});
