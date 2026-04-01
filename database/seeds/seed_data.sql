USE smarthub;

-- INSERT BUILDINGS
INSERT INTO buildings (building_name, location, floors) VALUES
('A Block', 'Hyderabad', 8),
('B Block', 'Hyderabad', 6);

-- INSERT USERS
INSERT INTO users (name, email, phone, building, floor, password) VALUES
('Anushka', 'anushka@gmail.com', '9876543210', 'A Block', '3', 'flat123'),
('Rahul', 'rahul@gmail.com', '9123456780', 'B Block', '2', 'flat123');

-- INSERT SENSORS
INSERT INTO sensors (sensor_type, sensor_value, status, building_id) VALUES
('Temperature', '30°C', 'Normal', 1),
('Gas', 'High', 'Danger', 1),
('Motion', 'Detected', 'Active', 2);

-- INSERT ACTIVITY LOGS
INSERT INTO activity_logs (user_id, sensor_id, action) VALUES
(1, 1, 'Temperature Checked'),
(1, 2, 'Gas Alert Triggered'),
(2, 3, 'Motion Detected');
