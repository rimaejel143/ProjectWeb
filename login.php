<?php
session_start();
$valid_username = "admin";
$valid_password = "1234";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (!empty($username) && !empty($password)) {
        if ($username === $valid_username && $password === $valid_password) {
            $_SESSION['username'] = $username;
            header('Location: index.html');
            exit();
        } else {
            $error = "Invalid username or password.";
        }
    } else {
        $error = "Please fill in both fields.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f7f7f7; text-align: center; padding-top: 100px; }
        form { background: #fff; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        input { padding: 10px; margin: 10px; border: 1px solid #ccc; border-radius: 5px; width: 200px; }
        button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; }
        .error { color: red; margin-bottom: 10px; }
    </style>
</head>
<body>
    <form method="post">
        <h2>Login</h2>
        <?php if (!empty($error)) echo "<div class='error'>$error</div>"; ?>
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">LOGIN</button>
    </form>
</body>
</html>
