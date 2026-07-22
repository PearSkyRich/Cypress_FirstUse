// Import trực tiếp file JSON từ thư mục fixtures
import users from '../fixtures/users.json'; 

describe('Kiểm thử đăng nhập với nhiều tài khoản từ JSON', () => {
  
  // Lặp qua từng object trong mảng JSON
  users.forEach((user) => {
    
    // Tạo tên bài test linh hoạt dựa vào dữ liệu JSON
    it(`Kiểm tra đăng nhập cho tài khoản: ${user.username}`, () => {
      // 1. Mở trang web
      cy.visit('https://www.saucedemo.com/');

      // 2. Nhập dữ liệu từ file JSON vào ô
      cy.get('[data-test="username"]').type(user.username);
      cy.get('[data-test="password"]').type(user.password);

      // 3. Nhấn ô đăng nhập.
      cy.contains('Login').click();

      // 4. (Tuỳ chọn) Kiểm tra kết quả dựa trên expectedStatus
      if (user.expectedStatus === 'success') {
        cy.url().should('include', '/inventory.html'); // Chuyển trang thành công
      } else if (user.expectedStatus === 'locked') {
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible'); // Báo lỗi khoá
      }
    });
    
  });
});