<?php
require_once __DIR__ . '/../config/database.php';

class Package {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function getAll($filters = []) {
        $query = "
            SELECT p.*, pk.name as park_name, pk.identifier as park_identifier,
                   GROUP_CONCAT(DISTINCT c.name) as category_names
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id
            LEFT JOIN package_categories pc ON p.id = pc.package_id
            LEFT JOIN categories c ON pc.category_id = c.id 
            WHERE 1=1
        ";
        $params = [];

        if (isset($filters['parkId'])) {
            $query .= " AND p.park_id = ?";
            $params[] = $filters['parkId'];
        }

        if (isset($filters['featured'])) {
            $query .= " AND p.featured = 1";
        }

        if (isset($filters['minPrice'])) {
            $query .= " AND p.price >= ?";
            $params[] = $filters['minPrice'];
        }

        if (isset($filters['maxPrice'])) {
            $query .= " AND p.price <= ?";
            $params[] = $filters['maxPrice'];
        }

        if (isset($filters['duration'])) {
            $query .= " AND p.duration = ?";
            $params[] = $filters['duration'];
        }

        $query .= " GROUP BY p.id ORDER BY p.created_at DESC";

        $stmt = $this->db->prepare($query);
        $stmt->execute($params);
        $packages = $stmt->fetchAll();

        foreach ($packages as &$package) {
            $package['categories'] = $package['category_names'] ? explode(',', $package['category_names']) : [];
            unset($package['category_names']);
            $package['itinerary'] = json_decode($package['itinerary'], true);
            $package['highlights'] = json_decode($package['highlights'], true);
            $package['price'] = floatval($package['price']);
        }

        return $packages;
    }

    public function findById($id) {
        $query = "
            SELECT p.*, pk.name as park_name, pk.identifier as park_identifier,
                   GROUP_CONCAT(DISTINCT c.name) as category_names
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id
            LEFT JOIN package_categories pc ON p.id = pc.package_id
            LEFT JOIN categories c ON pc.category_id = c.id 
            WHERE p.id = ?
            GROUP BY p.id
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        $package = $stmt->fetch();

        if ($package) {
            $package['categories'] = $package['category_names'] ? explode(',', $package['category_names']) : [];
            unset($package['category_names']);
            $package['itinerary'] = json_decode($package['itinerary'], true);
            $package['highlights'] = json_decode($package['highlights'], true);
            $package['price'] = floatval($package['price']);
        }

        return $package;
    }

    public function getPackagesByCategory($category) {
        $query = "
            SELECT p.*, pk.name as park_name, pk.identifier as park_identifier,
                   GROUP_CONCAT(DISTINCT c.name) as category_names
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id
            JOIN package_categories pc ON p.id = pc.package_id
            JOIN categories c ON pc.category_id = c.id 
            WHERE c.name = ?
            GROUP BY p.id
            ORDER BY p.created_at DESC
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute([$category]);
        $packages = $stmt->fetchAll();

        foreach ($packages as &$package) {
            $package['categories'] = $package['category_names'] ? explode(',', $package['category_names']) : [];
            unset($package['category_names']);
            $package['itinerary'] = json_decode($package['itinerary'], true);
            $package['highlights'] = json_decode($package['highlights'], true);
            $package['price'] = floatval($package['price']);
        }

        return $packages;
    }

    public function getFeaturedPackages() {
        $query = "
            SELECT p.*, pk.name as park_name, pk.identifier as park_identifier,
                   GROUP_CONCAT(DISTINCT c.name) as category_names
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id
            LEFT JOIN package_categories pc ON p.id = pc.package_id
            LEFT JOIN categories c ON pc.category_id = c.id 
            WHERE p.featured = 1
            GROUP BY p.id 
            ORDER BY p.created_at DESC
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $packages = $stmt->fetchAll();

        foreach ($packages as &$package) {
            $package['categories'] = $package['category_names'] ? explode(',', $package['category_names']) : [];
            unset($package['category_names']);
            $package['itinerary'] = json_decode($package['itinerary'], true);
            $package['highlights'] = json_decode($package['highlights'], true);
            $package['price'] = floatval($package['price']);
        }

        return $packages;
    }
} 