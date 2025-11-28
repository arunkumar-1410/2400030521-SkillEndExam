// pages/departments.js

export default function DepartmentsPage({ departments }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Departments & Faculty
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Contact details of each department and its faculty members.
          </p>
        </header>

        {/* Departments List */}
        <section className="grid gap-6 sm:grid-cols-2">
          {departments.map((dept) => (
            <article
              key={dept.id}
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100"
            >
              <h2 className="text-xl font-semibold mb-1">{dept.name}</h2>
              <p className="text-gray-500 text-sm mb-3">
                {dept.description}
              </p>

              {/* Department Contact */}
              <div className="mb-4 text-sm">
                <p>
                  <span className="font-medium">Office:</span> {dept.office}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${dept.phone}`}
                    className="underline underline-offset-2"
                  >
                    {dept.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${dept.email}`}
                    className="underline underline-offset-2"
                  >
                    {dept.email}
                  </a>
                </p>
              </div>

              {/* Faculty List */}
              <div>
                <h3 className="font-semibold mb-2">Faculty</h3>
                <ul className="space-y-2 text-sm">
                  {dept.faculty.map((member) => (
                    <li
                      key={member.name}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 rounded-lg px-3 py-2"
                    >
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-gray-500 text-xs">
                          {member.designation}
                        </p>
                      </div>
                      <div className="mt-1 sm:mt-0 text-xs sm:text-sm text-right">
                        <p>
                          <a
                            href={`mailto:${member.email}`}
                            className="underline underline-offset-2"
                          >
                            {member.email}
                          </a>
                        </p>
                        <p>
                          <a
                            href={`tel:${member.phone}`}
                            className="underline underline-offset-2"
                          >
                            {member.phone}
                          </a>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

// This runs at build time and provides static data
export async function getStaticProps() {
  // Static department data
  const departments = [
    {
      id: 1,
      name: "Computer Science and Engineering",
      description:
        "Focuses on software development, algorithms, data structures, and systems.",
      office: "Block A, Room 201",
      phone: "+91-98765-00001",
      email: "cse@college.edu",
      faculty: [
        {
          name: "Dr. Ramesh Kumar",
          designation: "Head of Department",
          email: "ramesh.kumar@college.edu",
          phone: "+91-98765-00011",
        },
        {
          name: "Prof. Anitha Rao",
          designation: "Associate Professor",
          email: "anitha.rao@college.edu",
          phone: "+91-98765-00012",
        },
      ],
    },
    {
      id: 2,
      name: "Electronics and Communication Engineering",
      description:
        "Covers electronics, communication systems, embedded systems, and VLSI.",
      office: "Block B, Room 105",
      phone: "+91-98765-00002",
      email: "ece@college.edu",
      faculty: [
        {
          name: "Dr. S. Lakshmi",
          designation: "Head of Department",
          email: "lakshmi.s@college.edu",
          phone: "+91-98765-00021",
        },
        {
          name: "Prof. Vikas Sharma",
          designation: "Assistant Professor",
          email: "vikas.sharma@college.edu",
          phone: "+91-98765-00022",
        },
      ],
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      description:
        "Deals with machines, manufacturing, design, and thermal engineering.",
      office: "Block C, Room 310",
      phone: "+91-98765-00003",
      email: "mech@college.edu",
      faculty: [
        {
          name: "Dr. Priya Nair",
          designation: "Head of Department",
          email: "priya.nair@college.edu",
          phone: "+91-98765-00031",
        },
        {
          name: "Prof. Arjun Singh",
          designation: "Assistant Professor",
          email: "arjun.singh@college.edu",
          phone: "+91-98765-00032",
        },
      ],
    },
  ];

  return {
    props: {
      departments,
    },
  };
}
