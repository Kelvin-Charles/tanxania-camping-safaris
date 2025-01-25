<?php
// Set CORS headers based on origin
$allowedOrigins = [
    'https://manage.tanzaniacampingsafaris.com',
    'http://localhost:3000'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

require_once __DIR__ . '/../config/database.php';

// Enable error logging
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug.log');
error_reporting(E_ALL);
ini_set('display_errors', 1);

// At the top of the file, after the headers
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug.log');
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Parse the URL path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$basePath = '/tanzania/php-backend/public/api';
$path = str_replace($basePath, '', $path);
$path = trim($path, '/');

// Debug the path
error_log("Requested path: " . $_SERVER['REQUEST_URI']);
error_log("Parsed path: " . $path);

$segments = explode('/', $path);

// Debug the segments
error_log("Segments: " . print_r($segments, true));

// At the top of your file, after the require statement
error_log("Request Method: " . $_SERVER['REQUEST_METHOD']);
error_log("Raw Request Body: " . file_get_contents('php://input'));

try {
    // Handle authentication routes
    if ($segments[0] === 'auth') {
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($segments[1]) && $segments[1] === 'login') {
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($data['email']) || !isset($data['password'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Email and password are required'
                ]);
                exit();
            }

            $db = Database::getInstance()->getConnection();
            $stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$data['email']]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$user || !password_verify($data['password'], $user['password'])) {
                http_response_code(401);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid email or password'
                ]);
                exit();
            }

            // Generate access token
            $access_token = bin2hex(random_bytes(32));
            
            // Update user's token in database
            $updateStmt = $db->prepare("UPDATE users SET updated_at = NOW() WHERE id = ?");
            $updateStmt->execute([$user['id']]);

            // Remove sensitive data
            unset($user['password']);
            unset($user['created_at']);
            unset($user['updated_at']);

            echo json_encode([
                'status' => 'success',
                'access_token' => $access_token,
                'token_type' => 'Bearer',
                'user' => $user
            ]);
            exit();
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($segments[1]) && $segments[1] === 'logout') {
            // Handle logout
            echo json_encode([
                'status' => 'success',
                'message' => 'Logged out successfully'
            ]);
            exit();
        }

        if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($segments[1]) && $segments[1] === 'me') {
            // Get auth header
            $headers = getallheaders();
            $auth_header = isset($headers['Authorization']) ? $headers['Authorization'] : '';
            
            if (!$auth_header || !preg_match('/Bearer\s+(.*)$/i', $auth_header, $matches)) {
                http_response_code(401);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Unauthorized'
                ]);
                exit();
            }

            $token = $matches[1];
            
            // Here you would validate the token
            // For now, we'll just return success
            echo json_encode([
                'status' => 'success',
                'user' => [
                    'id' => 1,
                    'name' => 'Admin',
                    'email' => 'admin@tanzaniacampingsafaris.com'
                ]
            ]);
            exit();
        }
    }

    // Handle packages routes
    if ($segments[0] === 'packages') {
        // Add image upload endpoint
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($segments[1]) && $segments[1] === 'upload-image') {
            try {
                if (!isset($_FILES['image'])) {
                    throw new Exception('No image file uploaded');
                }

                $file = $_FILES['image'];
                $fileName = uniqid() . '_' . basename($file['name']);
                $uploadPath = __DIR__ . '/uploads/packages/' . $fileName;
                
                // Validate file type
                $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                if (!in_array($file['type'], $allowedTypes)) {
                    throw new Exception('Invalid file type. Only JPG, PNG, GIF, and WebP are allowed.');
                }

                // Validate file size (5MB max)
                if ($file['size'] > 5 * 1024 * 1024) {
                    throw new Exception('File too large. Maximum size is 5MB.');
                }

                if (!move_uploaded_file($file['tmp_name'], $uploadPath)) {
                    throw new Exception('Failed to move uploaded file');
                }

                // Return the URL for the uploaded image
                $imageUrl = 'http://localhost/tanzania/php-backend/public/uploads/packages/' . $fileName;
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Image uploaded successfully',
                    'data' => ['url' => $imageUrl]
                ]);
                exit;
            } catch (Exception $e) {
                error_log("Image upload error: " . $e->getMessage());
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Failed to upload image',
                    'debug_message' => $e->getMessage()
                ]);
                exit;
            }
        }

        error_log("Matched packages route");
        error_log("Request Method: " . $_SERVER['REQUEST_METHOD']);
        error_log("Segments: " . print_r($segments, true));

        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            try {
                $db = Database::getInstance()->getConnection();
                
                // Log the connection status
                error_log("Database connection established");
                
                // First, let's check if the packages table exists and has data
                $checkStmt = $db->query("SELECT COUNT(*) FROM packages");
                $count = $checkStmt->fetchColumn();
                error_log("Number of packages in database: " . $count);
                
                // Get packages with related data
                $query = "
                    SELECT 
                        p.*,
                        GROUP_CONCAT(DISTINCT c.id) as category_ids,
                        GROUP_CONCAT(DISTINCT c.name) as category_names,
                        pk.name as park_name
                    FROM packages p
                    LEFT JOIN package_categories pc ON p.id = pc.package_id
                    LEFT JOIN categories c ON pc.category_id = c.id
                    LEFT JOIN parks pk ON p.park_id = pk.id
                    GROUP BY p.id
                    ORDER BY p.created_at DESC
                ";
                
                error_log("Executing query: " . $query);
                
                $stmt = $db->query($query);
                $packages = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                error_log("Number of packages fetched: " . count($packages));
                
                // Process the packages
                foreach ($packages as &$package) {
                    // Convert price to float
                    $package['price'] = floatval($package['price']);
                    
                    // Process categories
                    $package['categories'] = $package['category_ids'] ? 
                        array_map('intval', explode(',', $package['category_ids'])) : [];
                    $package['category_names'] = $package['category_names'] ? 
                        explode(',', $package['category_names']) : [];
                    
                    // Remove redundant fields
                    unset($package['category_ids']);
                    
                    // Ensure JSON fields are decoded
                    $package['highlights'] = json_decode($package['highlights'] ?? '[]');
                    $package['itinerary'] = json_decode($package['itinerary'] ?? '[]');
                }

                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => $packages
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                error_log("Database error in packages route: " . $e->getMessage());
                error_log("SQL State: " . $e->getCode());
                error_log("Error trace: " . $e->getTraceAsString());
                
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // POST create package
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($segments[1])) {
            error_log("Inside POST handler for packages");
            try {
                $data = json_decode(file_get_contents('php://input'), true);
                error_log("Received package data: " . print_r($data, true));
                
                if (!isset($data['title']) || empty($data['title'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Package title is required'
                    ]);
                    exit;
                }

                if (!isset($data['description']) || empty($data['description'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Package description is required'
                    ]);
                    exit;
                }

                if (!isset($data['price']) || !is_numeric($data['price'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Valid price is required'
                    ]);
                    exit;
                }

                if (!isset($data['duration']) || empty($data['duration'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Duration is required'
                    ]);
                    exit;
                }

                if (!isset($data['park_id']) || !is_numeric($data['park_id'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Valid park_id is required'
                    ]);
                    exit;
                }

                $db = Database::getInstance()->getConnection();
                
                // Start transaction
                $db->beginTransaction();
                
                try {
                    // Insert package with all required fields
                    $stmt = $db->prepare("
                        INSERT INTO packages (
                            name, title, description, price, duration, 
                            park_id, group_size, categories, highlights, itinerary,
                            image_url, featured, created_at, updated_at
                        ) VALUES (
                            :name, :title, :description, :price, :duration,
                            :park_id, :group_size, :categories, :highlights, :itinerary,
                            :image_url, :featured, NOW(), NOW()
                        )
                    ");
                    
                    // Validate JSON fields
                    $categories = is_string($data['categories']) ? $data['categories'] : json_encode([]);
                    $highlights = is_string($data['highlights']) ? $data['highlights'] : json_encode([]);
                    $itinerary = is_string($data['itinerary']) ? $data['itinerary'] : json_encode([]);

                    // Validate that JSON fields are valid JSON
                    if (json_decode($categories) === null || 
                        json_decode($highlights) === null || 
                        json_decode($itinerary) === null) {
                        throw new Exception('Invalid JSON data provided');
                    }

                    $result = $stmt->execute([
                        'name' => $data['name'],
                        'title' => $data['title'],
                        'description' => $data['description'],
                        'price' => $data['price'],
                        'duration' => $data['duration'],
                        'park_id' => $data['park_id'],
                        'group_size' => $data['group_size'],
                        'categories' => $categories,
                        'highlights' => $highlights,
                        'itinerary' => $itinerary,
                        'image_url' => $data['image_url'],
                        'featured' => isset($data['featured']) ? (int)$data['featured'] : 0
                    ]);

                    if (!$result) {
                        throw new Exception('Failed to insert package: ' . implode(', ', $stmt->errorInfo()));
                    }

                    $packageId = $db->lastInsertId();
                    error_log("Package inserted with ID: " . $packageId);
                    
                    // Insert categories if they exist
                    if (!empty($data['categories'])) {
                        $stmt = $db->prepare("
                            INSERT INTO package_categories (package_id, category_id)
                            VALUES (:package_id, :category_id)
                        ");
                        
                        $categoryIds = json_decode($categories);
                        foreach ($categoryIds as $categoryId) {
                            $stmt->execute([
                                'package_id' => $packageId,
                                'category_id' => $categoryId
                            ]);
                        }
                    }
                    
                    // Insert parks if they exist
                    if (!empty($data['parks'])) {
                        $stmt = $db->prepare("
                            INSERT INTO package_parks (package_id, park_id)
                            VALUES (:package_id, :park_id)
                        ");
                        
                        foreach ($data['parks'] as $parkId) {
                            $stmt->execute([
                                'package_id' => $packageId,
                                'park_id' => $parkId
                            ]);
                        }
                    }
                    
                    $db->commit();
                    
                    echo json_encode([
                        'status' => 'success',
                        'message' => 'Package created successfully',
                        'data' => ['id' => $packageId]
                    ]);
                    exit();
                    
                } catch (Exception $e) {
                    $db->rollBack();
                    error_log("Database error in package creation: " . $e->getMessage());
                    error_log("SQL State: " . $e->getCode());
                    error_log("Error trace: " . $e->getTraceAsString());
                    error_log("Package data: " . print_r($data, true));
                    error_log("SQL Parameters: " . print_r($stmt->errorInfo(), true));
                    throw $e;
                }
                
            } catch (Exception $e) {
                error_log("Error creating package: " . $e->getMessage());
                error_log("Error trace: " . $e->getTraceAsString());
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Failed to create package',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // PUT update package
        if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($segments[1])) {
            error_log("Inside PUT handler for packages");
            try {
                // Clean and validate the package ID
                $packageId = intval(preg_replace('/[^0-9]/', '', $segments[1]));
                
                if (!$packageId) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Invalid package ID'
                    ]);
                    exit;
                }

                $data = json_decode(file_get_contents('php://input'), true);
                error_log("Updating package ID: " . $packageId);
                error_log("Raw update data: " . print_r($data, true));
                
                // Validate required fields
                if (!isset($data['title']) || empty($data['title'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Package title is required'
                    ]);
                    exit;
                }

                if (!isset($data['description']) || empty($data['description'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Package description is required'
                    ]);
                    exit;
                }

                if (!isset($data['price']) || !is_numeric($data['price'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Valid price is required'
                    ]);
                    exit;
                }

                $db = Database::getInstance()->getConnection();

                // Start transaction
                $db->beginTransaction();

                try {
                    // Prepare the data for update
                    $updateData = [
                        'name' => $data['name'],
                        'title' => $data['title'],
                        'description' => $data['description'],
                        'price' => $data['price'],
                        'duration' => $data['duration'],
                        'park_id' => $data['park_id'],
                        'group_size' => $data['group_size'],
                        'highlights' => is_string($data['highlights']) ? $data['highlights'] : json_encode($data['highlights']),
                        'itinerary' => is_string($data['itinerary']) ? $data['itinerary'] : json_encode($data['itinerary']),
                        'image_url' => $data['image_url'],
                        'featured' => isset($data['featured']) ? (int)$data['featured'] : 0,
                        'id' => $packageId
                    ];

                    error_log("Formatted update data: " . print_r($updateData, true));

                    // Update package
                    $updateQuery = "
                        UPDATE packages 
                        SET 
                            name = :name,
                            title = :title,
                            description = :description,
                            price = :price,
                            duration = :duration,
                            park_id = :park_id,
                            group_size = :group_size,
                            highlights = :highlights,
                            itinerary = :itinerary,
                            image_url = :image_url,
                            featured = :featured,
                            updated_at = NOW()
                        WHERE id = :id
                    ";

                    $stmt = $db->prepare($updateQuery);
                    error_log("Executing update query with parameters: " . print_r($updateData, true));
                    $result = $stmt->execute($updateData);
                    
                    if (!$result) {
                        error_log("Update query failed. Error info: " . print_r($stmt->errorInfo(), true));
                        throw new Exception("Failed to update package data");
                    }

                    // Update categories
                    error_log("Deleting existing categories for package: " . $packageId);
                    $deleteCategories = "DELETE FROM package_categories WHERE package_id = :package_id";
                    $stmt = $db->prepare($deleteCategories);
                    $deleteResult = $stmt->execute(['package_id' => $packageId]);
                    
                    if (!$deleteResult) {
                        error_log("Failed to delete existing categories. Error info: " . print_r($stmt->errorInfo(), true));
                        throw new Exception("Failed to delete existing categories");
                    }

                    // Then, add new categories
                    $categories = $data['categories'];
                    if (!empty($categories)) {
                        error_log("Adding new categories: " . print_r($categories, true));
                        $insertCategory = "INSERT INTO package_categories (package_id, category_id) VALUES (:package_id, :category_id)";
                        $stmt = $db->prepare($insertCategory);
                        
                        foreach ($categories as $categoryId) {
                            $insertResult = $stmt->execute([
                                'package_id' => $packageId,
                                'category_id' => $categoryId
                            ]);
                            
                            if (!$insertResult) {
                                error_log("Failed to insert category. Error info: " . print_r($stmt->errorInfo(), true));
                                throw new Exception("Failed to insert category: " . $categoryId);
                            }
                        }
                    }

                    // Commit transaction
                    $db->commit();
                    error_log("Package update completed successfully");

                    echo json_encode([
                        'status' => 'success',
                        'message' => 'Package updated successfully',
                        'data' => ['id' => $packageId]
                    ]);
                    exit;
                } catch (Exception $e) {
                    error_log("Error in transaction: " . $e->getMessage());
                    error_log("Rolling back transaction");
                    $db->rollBack();
                    throw $e;
                }
            } catch (Exception $e) {
                error_log("Error updating package: " . $e->getMessage());
                error_log("Stack trace: " . $e->getTraceAsString());
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Failed to update package',
                    'debug_message' => $e->getMessage(),
                    'debug_trace' => $e->getTraceAsString(),
                    'debug_data' => [
                        'package_id' => $packageId,
                        'request_data' => $data,
                        'formatted_data' => $updateData ?? null
                    ]
                ]);
                exit;
            }
        }

        // DELETE package
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($segments[1])) {
            try {
                $packageId = $segments[1];
                $db = Database::getInstance()->getConnection();
                
                // Start transaction
                $db->beginTransaction();
                
                try {
                    // First, delete related records in package_categories
                    $query = "DELETE FROM package_categories WHERE package_id = :id";
                    $stmt = $db->prepare($query);
                    $stmt->execute(['id' => $packageId]);
                    
                    // Delete related records in package_parks
                    $query = "DELETE FROM package_parks WHERE package_id = :id";
                    $stmt = $db->prepare($query);
                    $stmt->execute(['id' => $packageId]);
                    
                    // Then delete the package
                    $query = "DELETE FROM packages WHERE id = :id";
                    $stmt = $db->prepare($query);
                    $stmt->execute(['id' => $packageId]);
                    
                    // Commit transaction
                    $db->commit();
                    
                    echo json_encode([
                        'status' => 'success',
                        'message' => 'Package deleted successfully'
                    ]);
                    exit();
                } catch (Exception $e) {
                    $db->rollBack();
                    throw $e;
                }
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }
    }

    // Handle bookings routes
    if ($segments[0] === 'bookings') {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            try {
                $db = Database::getInstance()->getConnection();
                $stmt = $db->query("
                    SELECT 
                        id,
                        customer_name,
                        package_id,
                        booking_date,
                        status,
                        COALESCE(total_amount, 0) as total_amount,
                        created_at,
                        updated_at
                    FROM bookings 
                    ORDER BY created_at DESC
                ");
                $bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                // Ensure total_amount is numeric
                $bookings = array_map(function($booking) {
                    $booking['total_amount'] = floatval($booking['total_amount']);
                    return $booking;
                }, $bookings);

                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => $bookings
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                // If table doesn't exist, return empty array
                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => []
                    ]
                ]);
                exit();
            }
        }
    }

    // Handle enquiries routes
    if ($segments[0] === 'enquiries') {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            try {
                $db = Database::getInstance()->getConnection();
                $stmt = $db->query("SELECT * FROM enquiries ORDER BY created_at DESC");
                $enquiries = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => $enquiries
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                // If table doesn't exist, return empty array
                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => []
                    ]
                ]);
                exit();
            }
        }
    }

    // Handle categories routes
    if ($segments[0] === 'categories') {
        $db = Database::getInstance()->getConnection();

        // GET all categories
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            try {
                error_log("Fetching categories data");
                
                // First, check if the categories table exists and has data
                $checkStmt = $db->query("SELECT COUNT(*) FROM categories");
                $count = $checkStmt->fetchColumn();
                error_log("Number of categories in database: " . $count);
                
                $stmt = $db->query("
                    SELECT 
                        c.*,
                        COUNT(DISTINCT pc.package_id) as package_count
                    FROM categories c
                    LEFT JOIN package_categories pc ON c.id = pc.category_id
                    GROUP BY c.id
                    ORDER BY c.name ASC
                ");
                $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                error_log("Number of categories fetched: " . count($categories));
                error_log("Categories data: " . print_r($categories, true));
                
                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => $categories
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                error_log("Database error in categories route: " . $e->getMessage());
                error_log("SQL State: " . $e->getCode());
                error_log("Error trace: " . $e->getTraceAsString());
                
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // POST create category
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($segments[1])) {
            try {
                $data = json_decode(file_get_contents('php://input'), true);
                
                if (!isset($data['name']) || empty($data['name'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Category name is required'
                    ]);
                    exit;
                }

                $query = "INSERT INTO categories (name, description, created_at, updated_at) 
                          VALUES (:name, :description, NOW(), NOW())";
                $stmt = $db->prepare($query);
                $stmt->execute([
                    'name' => $data['name'],
                    'description' => $data['description'] ?? ''
                ]);
                
                $categoryId = $db->lastInsertId();
                
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Category created successfully',
                    'data' => [
                        'id' => $categoryId,
                        'name' => $data['name'],
                        'description' => $data['description'] ?? ''
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // PUT update category
        if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($segments[1])) {
            try {
                $categoryId = $segments[1];
                $data = json_decode(file_get_contents('php://input'), true);
                
                if (!isset($data['name']) || empty($data['name'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Category name is required'
                    ]);
                    exit;
                }

                $query = "UPDATE categories 
                          SET name = :name, 
                              description = :description,
                              updated_at = NOW()
                          WHERE id = :id";
                $stmt = $db->prepare($query);
                $stmt->execute([
                    'id' => $categoryId,
                    'name' => $data['name'],
                    'description' => $data['description'] ?? ''
                ]);
                
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Category updated successfully'
                ]);
                exit();
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // DELETE category
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($segments[1])) {
            try {
                $categoryId = $segments[1];
                
                // First, delete related records in package_categories
                $query = "DELETE FROM package_categories WHERE category_id = :id";
                $stmt = $db->prepare($query);
                $stmt->execute(['id' => $categoryId]);
                
                // Then delete the category
                $query = "DELETE FROM categories WHERE id = :id";
                $stmt = $db->prepare($query);
                $stmt->execute(['id' => $categoryId]);
                
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Category deleted successfully'
                ]);
                exit();
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }
    }

    // Handle parks routes
    if ($segments[0] === 'parks') {
        $db = Database::getInstance()->getConnection();

        // GET all parks
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            try {
                error_log("Fetching parks data");
                
                // First, check if the parks table exists and has data
                $checkStmt = $db->query("SELECT COUNT(*) FROM parks");
                $count = $checkStmt->fetchColumn();
                error_log("Number of parks in database: " . $count);
                
                $stmt = $db->query("
                    SELECT 
                        p.*,
                        COUNT(DISTINCT pp.package_id) as package_count
                    FROM parks p
                    LEFT JOIN package_parks pp ON p.id = pp.park_id
                    GROUP BY p.id
                    ORDER BY p.name ASC
                ");
                $parks = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                error_log("Number of parks fetched: " . count($parks));
                error_log("Parks data: " . print_r($parks, true));
                
                echo json_encode([
                    'status' => 'success',
                    'data' => [
                        'data' => $parks
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                error_log("Database error in parks route: " . $e->getMessage());
                error_log("SQL State: " . $e->getCode());
                error_log("Error trace: " . $e->getTraceAsString());
                
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // POST create park
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($segments[1])) {
            try {
                $data = json_decode(file_get_contents('php://input'), true);
                error_log("Received park data: " . print_r($data, true));
                
                if (!isset($data['name']) || empty($data['name'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Park name is required'
                    ]);
                    exit;
                }

                // Generate identifier from name
                $identifier = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $data['name']));
                
                // Validate circuit
                $validCircuits = ['northern', 'southern', 'western', 'coastal'];
                if (!isset($data['circuit']) || !in_array(strtolower($data['circuit']), $validCircuits)) {
                    $data['circuit'] = 'northern'; // Default to Northern if invalid or not set
                } else {
                    $data['circuit'] = strtolower($data['circuit']);
                }

                $db = Database::getInstance()->getConnection();
                
                $query = "INSERT INTO parks (name, description, identifier, circuit, image_url, created_at) 
                         VALUES (:name, :description, :identifier, :circuit, :image_url, NOW())";
                
                error_log("Executing query: " . $query);
                
                $stmt = $db->prepare($query);
                $params = [
                    'name' => $data['name'],
                    'description' => $data['description'] ?? '',
                    'identifier' => $identifier,
                    'circuit' => $data['circuit'],
                    'image_url' => $data['image_url'] ?? ''
                ];
                
                error_log("Query parameters: " . print_r($params, true));
                
                $stmt->execute($params);
                $parkId = $db->lastInsertId();
                
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Park created successfully',
                    'data' => [
                        'id' => $parkId,
                        'identifier' => $identifier,
                        'name' => $data['name'],
                        'description' => $data['description'] ?? '',
                        'circuit' => $data['circuit'],
                        'image_url' => $data['image_url'] ?? '',
                        'package_count' => 0
                    ]
                ]);
                exit();
            } catch (PDOException $e) {
                error_log("Database error creating park: " . $e->getMessage());
                error_log("SQL State: " . $e->getCode());
                error_log("Error trace: " . $e->getTraceAsString());
                
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // PUT update park
        if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($segments[1])) {
            try {
                $parkId = $segments[1];
                $data = json_decode(file_get_contents('php://input'), true);
                
                if (!isset($data['name']) || empty($data['name'])) {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Park name is required'
                    ]);
                    exit;
                }

                // Validate circuit
                $validCircuits = ['northern', 'southern', 'western', 'coastal'];
                if (isset($data['circuit'])) {
                    if (!in_array(strtolower($data['circuit']), $validCircuits)) {
                        $data['circuit'] = 'northern'; // Default to northern if invalid
                    } else {
                        $data['circuit'] = strtolower($data['circuit']);
                    }
                }

                $query = "UPDATE parks 
                          SET name = :name, 
                              description = :description,
                              circuit = :circuit,
                              image_url = :image_url,
                              updated_at = NOW()
                          WHERE id = :id";
                $stmt = $db->prepare($query);
                $stmt->execute([
                    'id' => $parkId,
                    'name' => $data['name'],
                    'description' => $data['description'] ?? '',
                    'circuit' => $data['circuit'] ?? 'northern',
                    'image_url' => $data['image_url'] ?? ''
                ]);
                
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Park updated successfully'
                ]);
                exit();
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }

        // DELETE park
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($segments[1])) {
            try {
                $parkId = $segments[1];
                $db = Database::getInstance()->getConnection();
                
                // Start transaction
                $db->beginTransaction();
                
                try {
                    // First, delete related records in package_parks
                    $query = "DELETE FROM package_parks WHERE park_id = :id";
                    $stmt = $db->prepare($query);
                    $stmt->execute(['id' => $parkId]);
                    
                    // Delete related packages (this will cascade delete package_categories)
                    $query = "DELETE FROM packages WHERE park_id = :id";
                    $stmt = $db->prepare($query);
                    $stmt->execute(['id' => $parkId]);
                    
                    // Then delete the park
                    $query = "DELETE FROM parks WHERE id = :id";
                    $stmt = $db->prepare($query);
                    $stmt->execute(['id' => $parkId]);
                    
                    // Commit transaction
                    $db->commit();
                    
                    echo json_encode([
                        'status' => 'success',
                        'message' => 'Park deleted successfully'
                    ]);
                    exit();
                } catch (Exception $e) {
                    $db->rollBack();
                    throw $e;
                }
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Database error occurred',
                    'debug_message' => $e->getMessage()
                ]);
                exit();
            }
        }
    }

    // If we get here, no route matched
    http_response_code(404);
    echo json_encode([
        'status' => 'error',
        'message' => 'Endpoint not found'
    ]);

} catch (Exception $e) {
    error_log("Error processing request: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Internal server error: ' . $e->getMessage()
    ]);
} 