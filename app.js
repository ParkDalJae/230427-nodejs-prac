import mysql from "mysql";

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "matable",
});

// MySQL 연결
connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL 연결됨!");
});

// HTML 버튼 클릭 이벤트 처리
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  // MySQL에 데이터 저장
  const sql = "INSERT INTO mytable (name, age) VALUES (?, ?)";
  const values = ["홍길동", 30];
  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log("MySQL에 데이터 저장됨!");
  });
});
