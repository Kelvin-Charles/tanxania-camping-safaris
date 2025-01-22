<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ParkController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\SettingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
});

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::prefix('auth')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

    // Package routes
    Route::apiResource('packages', PackageController::class);
    Route::post('/packages/{package}/image', [PackageController::class, 'updateImage']);

    // Category routes
    Route::apiResource('categories', CategoryController::class);

    // Park routes
    Route::apiResource('parks', ParkController::class);
    Route::post('/parks/{park}/image', [ParkController::class, 'updateImage']);

    // Booking routes
    Route::apiResource('bookings', BookingController::class);
    Route::patch('/bookings/{booking}/status', [BookingController::class, 'updateStatus']);

    // Enquiry routes
    Route::apiResource('enquiries', EnquiryController::class);
    Route::patch('/enquiries/{enquiry}/status', [EnquiryController::class, 'updateStatus']);

    // Settings routes
    Route::get('/settings', [SettingController::class, 'index']);
    Route::put('/settings', [SettingController::class, 'update']);
}); 