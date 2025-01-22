-- Create database if not exists
CREATE DATABASE IF NOT EXISTS tanzania_camping;
USE tanzania_camping;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    role ENUM('admin', 'manager', 'customer') NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Parks table
CREATE TABLE IF NOT EXISTS parks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    identifier VARCHAR(50) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    image_url VARCHAR(255),
    highlights JSON NOT NULL,
    best_time_to_visit VARCHAR(255),
    activities JSON NOT NULL,
    circuit ENUM('northern', 'southern', 'western', 'coastal') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Packages table
CREATE TABLE IF NOT EXISTS packages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255),
    duration VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    park_id INT NOT NULL,
    group_size VARCHAR(50),
    categories JSON,
    highlights JSON,
    itinerary JSON NOT NULL,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (park_id) REFERENCES parks(id) ON DELETE CASCADE
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    package_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    number_of_people INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
    special_requirements TEXT,
    payment_status ENUM('pending', 'partial', 'completed') DEFAULT 'pending',
    payment_amount DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE CASCADE
);

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    package_id INT,
    preferred_date DATE,
    number_of_people INT,
    status ENUM('pending', 'responded', 'converted', 'closed') NOT NULL DEFAULT 'pending',
    response TEXT,
    responded_by INT,
    responded_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE SET NULL,
    FOREIGN KEY (responded_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Custom Trips table
CREATE TABLE IF NOT EXISTS custom_trips (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    number_of_people INT NOT NULL,
    preferences JSON NOT NULL,
    selected_parks JSON NOT NULL,
    budget DECIMAL(10,2),
    accommodation_type ENUM('budget', 'standard', 'luxury') NOT NULL,
    special_requirements TEXT,
    status ENUM('pending', 'proposal_sent', 'accepted', 'rejected', 'completed') NOT NULL DEFAULT 'pending',
    proposed_itinerary JSON,
    total_price DECIMAL(10,2),
    valid_until DATE,
    proposal_notes TEXT,
    proposal_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT NOT NULL,
    package_id INT,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE SET NULL
);

-- Settings table
CREATE TABLE IF NOT EXISTS settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(50) UNIQUE NOT NULL,
    setting_value TEXT NOT NULL,
    setting_type ENUM('text', 'number', 'boolean', 'json') NOT NULL DEFAULT 'text',
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Itinerary Templates Table
CREATE TABLE itinerary_templates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    duration INT NOT NULL,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255) NOT NULL,
    type ENUM('safari', 'beach', 'mountain', 'cultural', 'custom') NOT NULL,
    circuit ENUM('northern', 'southern', 'western', 'coastal') NULL,
    difficulty_level ENUM('easy', 'moderate', 'challenging', 'difficult') NULL,
    base_price DECIMAL(10, 2) NULL,
    is_active BOOLEAN DEFAULT true,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL
);

-- Itinerary Days Table
CREATE TABLE itinerary_days (
    id INT PRIMARY KEY AUTO_INCREMENT,
    itinerary_template_id INT NOT NULL,
    day_number INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    activities JSON NOT NULL,
    accommodation VARCHAR(255) NOT NULL,
    meals VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL,
    FOREIGN KEY (itinerary_template_id) REFERENCES itinerary_templates(id) ON DELETE CASCADE,
    UNIQUE KEY unique_day_per_itinerary (itinerary_template_id, day_number)
);

-- Itinerary Inclusions Table
CREATE TABLE itinerary_inclusions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    itinerary_template_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (itinerary_template_id) REFERENCES itinerary_templates(id) ON DELETE CASCADE
);

-- Itinerary Exclusions Table
CREATE TABLE itinerary_exclusions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    itinerary_template_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (itinerary_template_id) REFERENCES itinerary_templates(id) ON DELETE CASCADE
);

-- Custom Itineraries Table (for customer-specific modifications)
CREATE TABLE custom_itineraries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    base_template_id INT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    duration INT NOT NULL,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255) NOT NULL,
    customer_id INT NULL,
    booking_id INT NULL,
    status ENUM('draft', 'proposed', 'accepted', 'rejected', 'completed') NOT NULL DEFAULT 'draft',
    total_price DECIMAL(10, 2) NULL,
    notes TEXT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL,
    FOREIGN KEY (base_template_id) REFERENCES itinerary_templates(id),
    FOREIGN KEY (customer_id) REFERENCES users(id),
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

-- Custom Itinerary Days Table
CREATE TABLE custom_itinerary_days (
    id INT PRIMARY KEY AUTO_INCREMENT,
    custom_itinerary_id INT NOT NULL,
    day_number INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    activities JSON NOT NULL,
    accommodation VARCHAR(255) NOT NULL,
    meals VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL,
    FOREIGN KEY (custom_itinerary_id) REFERENCES custom_itineraries(id) ON DELETE CASCADE,
    UNIQUE KEY unique_day_per_custom_itinerary (custom_itinerary_id, day_number)
);

-- Custom Itinerary Inclusions Table
CREATE TABLE custom_itinerary_inclusions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    custom_itinerary_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (custom_itinerary_id) REFERENCES custom_itineraries(id) ON DELETE CASCADE
);

-- Custom Itinerary Exclusions Table
CREATE TABLE custom_itinerary_exclusions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    custom_itinerary_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (custom_itinerary_id) REFERENCES custom_itineraries(id) ON DELETE CASCADE
);

-- Insert default admin user
INSERT INTO users (username, email, password, full_name, role)
VALUES (
    'admin',
    'admin@tanzaniacamping.com',
    '$2b$10$5QZMq5VprXkxHXPq5vH3.OQY9H5IcQnTqRJ9wCvBmj.X0qFXQZBPi', -- Default password: admin123
    'System Administrator',
    'admin'
) ON DUPLICATE KEY UPDATE id=id;

-- Insert default settings
INSERT INTO settings (setting_key, setting_value, setting_type, description) VALUES
('company_name', 'Tanzania Camping Safaris', 'text', 'Company name displayed throughout the site'),
('company_email', 'info@tanzaniacamping.com', 'text', 'Primary contact email'),
('company_phone', '+255 123 456 789', 'text', 'Primary contact phone number'),
('booking_advance_days', '7', 'number', 'Minimum days in advance for booking'),
('enable_online_booking', 'true', 'boolean', 'Enable/disable online booking feature'),
('payment_methods', '["bank_transfer", "credit_card", "mobile_money"]', 'json', 'Available payment methods'),
('cancellation_policy', 'Cancellation must be made 48 hours before the trip start date', 'text', 'Booking cancellation policy')
ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value);

-- Add a new table for package categories
CREATE TABLE IF NOT EXISTS package_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 