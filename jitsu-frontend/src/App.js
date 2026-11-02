import { useState } from 'react';
import { ClipboardCheck, Plus, Trash2 } from 'lucide-react';

function App() {
  const [student, setStudent] = useState('');
  const [className, setClassName] = useState('Adult Fundamentals');
  const [attendance, setAttendance] = useState([]);

  function recordAttendance(event) {
    event.preventDefault();
    const name = student.trim();
    if (!name) return;

    setAttendance((records) => [
      {
        id: `${Date.now()}-${name}`,
        name,
        className,
        date: new Date().toLocaleDateString(),
      },
      ...records,
    ]);
    setStudent('');
  }

  function removeAttendance(id) {
    setAttendance((records) => records.filter((record) => record.id !== id));
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Gracie Barra Downey home">
          <span className="brand-mark">GB</span>
          <span>
            <strong>GRACIE BARRA</strong>
            <small>DOWNEY · ATTENDANCE</small>
          </span>
        </a>
        <span className="topbar-label">Academy dashboard</span>
      </header>

      <section className="content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">STUDENT MANAGEMENT</p>
            <h1>Attendance record</h1>
            <p className="subtitle">Keep track of today’s training attendance.</p>
          </div>
          <div className="date-chip">
            {new Date().toLocaleDateString(undefined, {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>

        <section className="panel checkin-panel" aria-labelledby="checkin-title">
          <div className="panel-heading">
            <div className="icon-tile">
              <ClipboardCheck size={21} />
            </div>
            <div>
              <h2 id="checkin-title">Check in a student</h2>
              <p>Add a student to the attendance list.</p>
            </div>
          </div>
          <form className="checkin-form" onSubmit={recordAttendance}>
            <label>
              Student name
              <input
                autoComplete="name"
                onChange={(event) => setStudent(event.target.value)}
                placeholder="Enter student name"
                value={student}
              />
            </label>
            <label>
              Class
              <select
                onChange={(event) => setClassName(event.target.value)}
                value={className}
              >
                <option>Adult Fundamentals</option>
                <option>Adult Advanced</option>
                <option>Kids Jiu-Jitsu</option>
                <option>No-Gi</option>
                <option>Open Mat</option>
              </select>
            </label>
            <button className="primary-button" type="submit">
              <Plus size={18} />
              Record attendance
            </button>
          </form>
        </section>

        <section className="panel records-panel" aria-labelledby="records-title">
          <div className="records-heading">
            <div>
              <h2 id="records-title">Today’s attendance</h2>
              <p>{attendance.length} students checked in</p>
            </div>
            <span className="count-badge">{attendance.length}</span>
          </div>
          {attendance.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <ClipboardCheck size={22} />
              </div>
              <strong>No attendance recorded yet</strong>
              <span>Check in the first student to get started.</span>
            </div>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Class</th>
                    <th>Date</th>
                    <th><span className="visually-hidden">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((record) => (
                    <tr key={record.id}>
                      <td className="student-cell">{record.name}</td>
                      <td>{record.className}</td>
                      <td>{record.date}</td>
                      <td className="action-cell">
                        <button
                          aria-label={`Remove ${record.name}`}
                          className="icon-button"
                          onClick={() => removeAttendance(record.id)}
                          type="button"
                        >
                          <Trash2 size={17} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <p className="local-note">
          Attendance is stored in this session only. Database saving will be
          available once the attendance API is added.
        </p>
      </section>
    </main>
  );
}

export default App;
