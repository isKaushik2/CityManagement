import "./BloodDonation.css";
import { useState } from "react";

const bloodTypes = [
  { type: "O-",  count: 18,  tag: "CRITICAL" },
  { type: "A-",  count: 82,  tag: "STABLE" },
  { type: "B-",  count: 34,  tag: "LOW" },
  { type: "AB+", count: 95,  tag: "OPTIMAL" },
  { type: "O+",  count: 60,  tag: "STABLE" },
  { type: "A+",  count: 45,  tag: "LOW" },
  { type: "B+",  count: 70,  tag: "STABLE" },
  { type: "AB-", count: 12,  tag: "CRITICAL" },
];

const mockDonors = [
  { id: 1, name: "Rahim Khan",   initials: "RK", blood: "O+",  district: "Dhaka",      age: 28, lastDonated: "2 months ago", phone: "+880 1711-223344" },
  { id: 2, name: "Fatema Akter", initials: "FA", blood: "A+",  district: "Chittagong", age: 24, lastDonated: "4 months ago", phone: "+880 1812-334455" },
  { id: 3, name: "Milon Sarkar", initials: "MS", blood: "B-",  district: "Sylhet",     age: 31, lastDonated: "1 month ago",  phone: "+880 1911-445566" },
  { id: 4, name: "Nila Begum",   initials: "NB", blood: "O-",  district: "Rajshahi",   age: 26, lastDonated: "3 months ago", phone: "+880 1755-556677" },
  { id: 5, name: "Karim Uddin",  initials: "KU", blood: "AB+", district: "Khulna",     age: 35, lastDonated: "5 months ago", phone: "+880 1688-667788" },
];

const districts = [
  "Any district",
  "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna",
  "Barisal", "Rangpur", "Mymensingh",
];

const bloodGroups = ["Any blood group", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

function BloodDonation() {
  const [showForm, setShowForm]             = useState(false);
  const [searchBlood, setSearchBlood]       = useState("Any blood group");
  const [searchDistrict, setSearchDistrict] = useState("Any district");
  const [searched, setSearched]             = useState(false);
  const [revealedPhones, setRevealedPhones] = useState({});

  const [form, setForm] = useState({
    name: "", phone: "", blood: "", district: "", age: "", lastDonated: "",
  });

  const handleSearch = () => setSearched(true);

  const filteredDonors = mockDonors.filter((d) => {
    const bloodMatch    = searchBlood    === "Any blood group" || d.blood    === searchBlood;
    const districtMatch = searchDistrict === "Any district"    || d.district === searchDistrict;
    return bloodMatch && districtMatch;
  });

  const togglePhone = (id) =>
    setRevealedPhones((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleFormChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    // TODO: POST to /api/donors
    console.log(form);
    setShowForm(false);
  };

  return (
    <div className="bloodDonationPage">
      <div className="container">

        {/* Hero */}
        <div className="heroSection">
          <div className="heroText">
            <h1 className="heroTitle">
              Give blood, <span className="heroAccent">save a life</span>
            </h1>
            <p className="heroDescription">
              Find a donor near you or register yourself to help
              citizens in emergencies across Bangladesh.
            </p>
            <div className="heroButtons">
              <button className="donateBtn" onClick={() => setShowForm(true)}>
                Register as donor
              </button>
            </div>
          </div>
        </div>

        {/* Blood supply status */}
        <div className="bloodStatusSection">
          <h2 className="statusTitle">Real-time blood supply status</h2>
          <div className="statusCards">
            {bloodTypes.map((blood) => (
              <div className="statusCard" key={blood.type}>
                <h3>{blood.type}</h3>
                <p className="statusCount">{blood.count} donors</p>
                <span className={`statusTag tag-${blood.tag.toLowerCase()}`}>
                  {blood.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search donors */}
        <div className="searchSection">
          <h2 className="searchTitle">Find a donor</h2>
          <p className="searchSub">
            Search by blood group and district to find available donors near you
          </p>
          <div className="searchRow">
            <div className="formGroup">
              <label>Blood group</label>
              <select value={searchBlood} onChange={(e) => setSearchBlood(e.target.value)}>
                {bloodGroups.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div className="formGroup">
              <label>District</label>
              <select value={searchDistrict} onChange={(e) => setSearchDistrict(e.target.value)}>
                {districts.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <button className="searchBtn" onClick={handleSearch}>Search</button>
          </div>

          {searched && (
            <div className="donorResults">
              <p className="resultsCount">
                {filteredDonors.length} donor{filteredDonors.length !== 1 ? "s" : ""} found
              </p>
              {filteredDonors.length === 0 ? (
                <div className="noResults">No donors found for this search.</div>
              ) : (
                filteredDonors.map((donor) => (
                  <div className="donorCard" key={donor.id}>
                    <div className="donorLeft">
                      <div className="donorAvatar">{donor.initials}</div>
                      <div>
                        <div className="donorName">{donor.name}</div>
                        <div className="donorMeta">
                          {donor.district} · last donated {donor.lastDonated} · age {donor.age}
                        </div>
                      </div>
                    </div>
                    <div className="donorRight">
                      <span className="bloodBadge">{donor.blood}</span>
                      <button className="phoneBtn" onClick={() => togglePhone(donor.id)}>
                        {revealedPhones[donor.id] ? donor.phone : "Show number"}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Eligibility */}
        <div className="eligibilitySection">
          <div className="eligibilityCardMain">
            <h2>Am I eligible?</h2>
            <p className="eligibilityIntro">
              Most people can give blood if they are in good health. Check our basic requirements:
            </p>
            {[
              { title: "Age requirement",  desc: "Between 17 and 65 years old." },
              { title: "Weight limit",     desc: "Weigh at least 50kg (110 lbs)." },
              { title: "Health condition", desc: "Feeling well and healthy on the day of donation." },
              { title: "Identification",   desc: "Valid government-issued photo ID required." },
            ].map((item) => (
              <div className="eligibilityItem" key={item.title}>
                <span className="checkIcon">✓</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Popup form */}
      {showForm && (
        <div className="popupOverlay">
          <div className="popupCard">
            <h2>Register as a donor</h2>
            <p className="popupSub">Your details will only be visible to logged-in users</p>

            <div className="popupRow">
              <div className="formGroup">
                <label>Full name</label>
                <input name="name" type="text" placeholder="Your full name" onChange={handleFormChange}/>
              </div>
              <div className="formGroup">
                <label>Phone number</label>
                <input name="phone" type="text" placeholder="+880 ..." onChange={handleFormChange}/>
              </div>
            </div>

            <div className="popupRow">
              <div className="formGroup">
                <label>Blood group</label>
                <select name="blood" onChange={handleFormChange}>
                  <option value="">Select blood group</option>
                  {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="formGroup">
                <label>District</label>
                <select name="district" onChange={handleFormChange}>
                  {districts.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
            </div>

            <div className="popupRow">
              <div className="formGroup">
                <label>Age</label>
                <input name="age" type="number" placeholder="18–65" onChange={handleFormChange}/>
              </div>
              <div className="formGroup">
                <label>Last donation date</label>
                <input name="lastDonated" type="date" onChange={handleFormChange}/>
              </div>
            </div>

            <div className="formButtons">
              <button className="cancelBtn" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="submitBtn" onClick={handleSubmit}>Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BloodDonation;