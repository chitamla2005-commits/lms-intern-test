LMS Management System - Intern Test 

Dự án xây dựng một phần nhỏ của hệ thống Learning Management System (LMS).

🛠 Công nghệ sử dụng 


Framework: Next.js (App Router) 


UI Library: Ant Design cho bảng và form 
+1


Styling: Tailwind CSS hỗ trợ Dark/Light mode. 


State Management: Context API để quản lý Auth. 

📋 Chức năng chính 


Xác thực: Login với validation email và password (tối thiểu 6 ký tự).


Bảo mật: Sử dụng Middleware để bảo vệ các route /courses.

Quản lý khóa học (CRUD):

Xem danh sách phân trang (10 items/page).

Thêm mới khóa học tại /courses/add.

Cập nhật thông tin tại /courses/edit/:id.

Xóa khóa học sử dụng phương thức DELETE.

🚀 Hướng dẫn chạy dự án 


Clone repository: git clone <link-github-cua-ban> 
+1


Cài đặt thư viện: npm install 

Cấu hình biến môi trường: Tạo file .env.local với nội dung:


NEXT_PUBLIC_API_URL=https://6938e7e24618a71d77d19513.mockapi.io/api/v1 


Chạy dev: npm run dev 

3. Kiểm tra các quy tắc Validation 

Hãy đảm bảo Form trong dự án của bạn tuân thủ các quy tắc sau trước khi nộp:


Email: Phải yêu cầu nhập và đúng định dạng email.


Password: Phải tối thiểu 6 ký tự.


Nút bấm: Phải bị Disable khi form không hợp lệ.


Trường bắt buộc: Tên, Danh mục, Cấp độ là bắt buộc khi thêm khóa học.

4. Hướng dẫn Deploy lên Vercel 

Để nhận được điểm cộng lớn (significant plus point), hãy thực hiện:

Đẩy code lên một Repository công khai trên GitHub.

Truy cập Vercel.com, kết nối tài khoản GitHub.

Chọn project lms-app.

Trong phần Environment Variables, thêm biến NEXT_PUBLIC_API_URL với giá trị API đã cho.

Nhấn Deploy.