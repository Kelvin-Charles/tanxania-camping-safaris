<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/../models/Package.php';

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Debug logging
error_log("Request URI: " . $_SERVER['REQUEST_URI']);
error_log("Script filename: " . $_SERVER['SCRIPT_FILENAME']);
error_log("Document root: " . $_SERVER['DOCUMENT_ROOT']);

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Parse the URL path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// Remove base path for XAMPP setup
$basePath = '/tanzania/php-backend/public';
$path = str_replace($basePath, '', $path);
$path = trim($path, '/');

// Debug logging
error_log("Processed path: " . $path);

$segments = explode('/', $path);

// Debug logging
error_log("URL segments: " . print_r($segments, true));

// Remove 'api' from the beginning if it exists
if (isset($segments[0]) && $segments[0] === 'api') {
    array_shift($segments);
}

// Debug logging
error_log("Segments after api removal: " . print_r($segments, true));

$package = new Package();

try {
    // Debug logging
    error_log("Processing route with segments: " . print_r($segments, true));
    
    // Route the request
    if (empty($segments[0]) || $segments[0] === 'packages') {
        // GET /api/packages
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            if (!isset($segments[1])) {
                // Get all packages
                $filters = [
                    'parkId' => $_GET['parkId'] ?? null,
                    'featured' => isset($_GET['featured']) ? $_GET['featured'] === 'true' : null,
                    'minPrice' => $_GET['minPrice'] ?? null,
                    'maxPrice' => $_GET['maxPrice'] ?? null,
                    'duration' => $_GET['duration'] ?? null
                ];

                $packages = $package->getAll($filters);
                echo json_encode([
                    'status' => 'success',
                    'data' => ['packages' => $packages]
                ]);
                exit();
            }
            // GET /api/packages/featured
            elseif ($segments[1] === 'featured') {
                $packages = $package->getFeaturedPackages();
                echo json_encode([
                    'status' => 'success',
                    'data' => ['packages' => $packages]
                ]);
                exit();
            }
            // GET /api/packages/category/{category}
            elseif ($segments[1] === 'category' && isset($segments[2])) {
                $category = urldecode($segments[2]);
                error_log("Looking for category: " . $category);
                $packages = $package->getPackagesByCategory($category);
                echo json_encode([
                    'status' => 'success',
                    'data' => ['packages' => $packages]
                ]);
                exit();
            }
            // GET /api/packages/{id}
            elseif (is_numeric($segments[1])) {
                $id = (int)$segments[1];
                $packageData = $package->findById($id);
                
                if ($packageData) {
                    echo json_encode([
                        'status' => 'success',
                        'data' => ['package' => $packageData]
                    ]);
                } else {
                    http_response_code(404);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Package not found'
                    ]);
                }
                exit();
            }
        }
    }

    // If we get here, no route matched
    error_log("No route matched for path: " . $path);
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