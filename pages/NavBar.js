
export default function NavBar() {
    return (
      <nav>
        <ul style={{
         
            display: "flex",
            gap: "20px",
            justifyContent: "center"
            }}>
            <li>Header</li>
            <li>NavBar</li>
            <li>User Card</li>
            <li>Counter</li>
            <li>Show Message</li>
           
            <li>Handle Item Click</li>
        </ul>
      </nav>
    );
  }