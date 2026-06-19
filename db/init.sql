CREATE TABLE IF NOT EXISTS SIMCard (
  id INT AUTO_INCREMENT PRIMARY KEY,
  iccid VARCHAR(19) NOT NULL UNIQUE,
  phoneNumber VARCHAR(20),
  status ENUM('pending', 'active', 'failed') DEFAULT 'pending'
);