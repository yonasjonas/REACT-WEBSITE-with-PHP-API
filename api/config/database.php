<?php
class Database{
  
    // specify your own database credentials
    private $host = "mysql4341int.cp.blacknight.com";
    private $db_name = "db1385940_food";
    private $username = "u1385940_jonas";
    private $password = "_sFmcfVL";
    public $conn;
  
    // get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
?>