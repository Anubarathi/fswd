import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {/* Sidebar Navigation */}
        <nav
          style={{
            width: "200px",
            padding: "20px",
            background: "#f0f0f0",
            height: "100vh",
            boxSizing: "border-box",
          }}
        >
          <h2>Student Dashboard</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/">Dashboard</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/courses">Courses</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/profile">Profile</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main style={{ padding: "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Dashboard() {
  return <h1>Welcome to your Dashboard!</h1>;
}

function Courses() {
  return (
    <>
      <h1>Your Courses</h1>
      <ul>
        <li>Mathematics</li>
        <li>Science</li>
        <li>History</li>
      </ul>
    </>
  );
}

function Profile() {
  return (
    <>
      <h1>Your Profile</h1>
      <p>Name: Jane Doe</p>
      <p>Email: jane.doe@example.com</p>
    </>
  );
}

function Settings() {
  return <h1>Settings Page</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
