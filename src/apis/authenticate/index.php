<?php
// Include the authenticate API
include_once __DIR__ . DIRECTORY_SEPARATOR;

// Initialize the API
Authenticate::initialize();

// Handle the API call
Authenticate::handle();