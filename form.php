<html>
    <body>
        <?php
        // define variables and set to empty values
        $username = $password = "";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = test_input($_POST["username"]);
            $password = test_input($_POST["password"]);
            if ($username == "Casper" && $password == "123"){
                header('Location: Financial.html');
            }else{
                header('Location: Login.html');
            }
        }

        function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
        }
        ?>
    </body>
</html>