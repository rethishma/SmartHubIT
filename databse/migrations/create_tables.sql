-- Create Database
CREATE DATABASE IF NOT EXISTS smarthub;
USE smarthub;

-- USERS TABLE
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(15),
  building VARCHAR(50),
  floor VARCHAR(10),
  password VARCHAR(255)
);

-- BUILDINGS TABLE
CREATE TABLE buildings (
  building_id INT PRIMARY KEY AUTO_INCREMENT,
  building_name VARCHAR(100),
  location VARCHAR(100),
  floors INT
);

-- SENSORS TABLE
CREATE TABLE sensors (
  sensor_id INT PRIMARY KEY AUTO_INCREMENT,
  sensor_type VARCHAR(50),
  sensor_value VARCHAR(50),
  status VARCHAR(50),
  building_id INT,
  FOREIGN KEY (building_id)
  REFERENCES buildings(building_id)
  ON DELETE CASCADE
);

-- ACTIVITY LOGS TABLE
CREATE TABLE activity_logs (
  log_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  sensor_id INT,
  action VARCHAR(100),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id)
  REFERENCES users(user_id)
  ON DELETE CASCADE,

  FOREIGN KEY (sensor_id)
  REFERENCES sensors(sensor_id)
  ON DELETE CASCADE
);
