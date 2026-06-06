'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <main>
        <div style={{ backgroundColor: 'var(--primary)' }}>
          <Navbar />
        </div>
        <div className="container" style={{ padding: '100px 20px', minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
            <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Admin Login</h1>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="admin@enova.com" required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                <input type="password" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="••••••••" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div style={{ backgroundColor: 'var(--primary)' }}>
        <Navbar />
      </div>
      <div className="container" style={{ padding: '100px 20px', minHeight: '60vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1>Admin Dashboard</h1>
          <button onClick={() => setIsLoggedIn(false)} className="btn" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>Logout</button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: 'var(--primary)' }}>Course Management</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Content Management</li>
              <li style={{ padding: '10px 0' }}>Settings</li>
            </ul>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h2>Manage Courses</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Add, edit, or remove courses from the platform.</p>
            <button className="btn btn-primary" style={{ marginBottom: '20px' }}>+ Add New Course</button>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>Course Title</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Price</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px' }}>Principles of Written English, Part 1</td>
                  <td style={{ padding: '12px' }}>Language</td>
                  <td style={{ padding: '12px' }}>$85</td>
                  <td style={{ padding: '12px' }}>
                    <button style={{ color: 'var(--primary)', marginRight: '10px' }}>Edit</button>
                    <button style={{ color: 'red' }}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
