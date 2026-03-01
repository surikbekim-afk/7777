// Simple guest registration function
function registerGuest(name, email) {
    // Basic registration logic
    console.log('Guest registered: ', name, email);
    return { name, email, success: true };
}

// Example usage
registerGuest('John Doe', 'john@example.com');
