import "./CitizenDashboard.css";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const mockComplaints = [
  { id: 1, title: "Broken street light near main road", area: "Sadar", date: "3 days ago", status: "in-progress" },
  { id: 2, title: "Water supply disruption for 2 days", area: "Sadar", date: "1 week ago", status: "pending" },
  { id: 3, title: "Illegal dumping near school", area: "Hossainpur", date: "2 weeks ago", status: "resolved" },
  { id: 4, title: "Pothole on Station Road", area: "Sadar", date: "1 month ago", status: "resolved" },
];

const mockActivity = [
  { id: 1, text: "Your complaint about street light is now in progress", time: "2 hours ago", color: "blue" },
  { id: 2, text: "Pothole complaint was marked as resolved", time: "3 days ago", color: "cyan" },
  { id: 3, text: "You submitted a new complaint about water supply", time: "1 week ago", color: "yellow" },
  { id: 4, text: "You registered as a blood donor", time: "2 weeks ago", color: "cyan" },
];

const statusLabel = { pending: "Pending", "in-progress": "In progress", resolved: "Resolved" };
const statusClass = { pending: "pill-pending", "in-progress": "pill-progress", resolved: "pill-resolved" };

function Dashboard() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const pendingCount = mockComplaints.filter((c) => c.status === "pending").length;

  return (
    <div className="dashPage">
      <div className="dashContainer">

        <div className="dashWelcome">
            <div className="dashWelcomeInner">
               
                 <div className="dashWelcomeSub">Welcome back,</div>
                 <h2 className="dashWelcomeName">
                 <span className="dashWelcomeAccent">{user?.name ?? "Citizen"}</span>
                </h2>
              <p className="dashWelcomeDesc">
                  Track your complaints, registrations and activity all in one place.
               </p>
            </div>
        </div>

        {/* Stats */}
        <div className="dashStats">
          <div className="dashStat">
            <div className="dashStatLabel">Complaints</div>
            <div className="dashStatVal">{mockComplaints.length}</div>
            <div className="dashStatSub">{pendingCount} pending</div>
          </div>
          <div className="dashStat">
            <div className="dashStatLabel">Volunteer</div>
            <div className="dashStatBadge badge-cyan">Registered</div>
            <div className="dashStatSub">Since Jan 2026</div>
          </div>
          <div className="dashStat">
            <div className="dashStatLabel">Blood donor</div>
            <div className="dashStatBadge badge-cyan">O+</div>
            <div className="dashStatSub">Dhaka district</div>
          </div>
        </div>

        {/* Complaints */}
        <div className="dashSection">
          <div className="dashSectionTitle">Your complaints</div>
          {mockComplaints.map((c) => (
            <div className="complaintCard" key={c.id}>
              <div>
                <div className="complaintTitle">{c.title}</div>
                <div className="complaintMeta">Submitted {c.date} · {c.area}</div>
              </div>
              <span className={`statusPill ${statusClass[c.status]}`}>
                {statusLabel[c.status]}
              </span>
            </div>
          ))}
        </div>

        {/* Registrations */}
        <div className="dashRegs">
          <div className="dashSectionTitle" style={{ gridColumn: "1/-1" }}>Your registrations</div>
          <div className="regCard">
            <div className="regIcon regIcon-cyan">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z"/>
                <circle cx="8" cy="6" r="1.5"/>
              </svg>
            </div>
            <div className="regTitle">Volunteer program</div>
            <div className="regDetail">Active since Jan 2026</div>
            <div className="regDetail">Next event: Apr 10</div>
          </div>
          <div className="regCard">
            <div className="regIcon regIcon-red">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M8 13C5 13 3 10.5 3 8.5c0-1.5 1-3 2.5-4.5L8 1l2.5 3C12 5.5 13 7 13 8.5 13 10.5 11 13 8 13z"/>
              </svg>
            </div>
            <div className="regTitle">Blood donor</div>
            <div className="regDetail">Blood group: O+</div>
            <div className="regDetail">District: Dhaka</div>
          </div>
        </div>

        {/* Activity */}
        <div className="dashSection">
          <div className="dashSectionTitle">Recent activity</div>
          {mockActivity.map((a) => (
            <div className="activityItem" key={a.id}>
              <div className={`activityDot dot-${a.color}`}></div>
              <div>
                <div className="activityText">{a.text}</div>
                <div className="activityTime">{a.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="newComplaintBtn" onClick={() => navigate("/ReportPage")}>
          Submit a new complaint
        </button>

      </div>
    </div>
  );
}

export default Dashboard;