const div = document.getElementById('root');
const bt = document.getElementById('btn');

const h1 = document.createElement('h1');
h1.innerText = "Data Is Loading...";

let obj = {
    Name: "SWIKRITI SINGH",
    Roll: 203,
    Branch: "CSE - AIML",
    Clg: "ABES Engineering College",

    Email: "swikritisan07@gmail.com",
    Phone: "9625471762",
    Location: "Ghaziabad, Uttar Pradesh",

    TechStack: "Java, DSA, HTML, CSS, JavaScript",

    Skills: "Java, Data Structures, Algorithms, Web Development",

    Education: "B.Tech in Computer Science & Engineering (AI & ML)",

    Projects: "Resume Builder, Portfolio, ToDo List, AI Interview Agent",

    LinkedIn: "linkedin.com/in/swikriti-singh-05530233b",
    GitHub: "github.com/Swikriti12345"
};

function display() {

    div.innerHTML = "";
    div.appendChild(h1);

    setTimeout(() => {

        let table = `
            <table>

                <tr>
                    <th colspan="2" class="resume-title">
                        Resume
                    </th>
                </tr>

                <tr>
                    <th>Name</th>
                    <td>${obj.Name}</td>
                </tr>

                <tr>
                    <th>Roll No.</th>
                    <td>${obj.Roll}</td>
                </tr>

                <tr>
                    <th>Branch</th>
                    <td>${obj.Branch}</td>
                </tr>

                <tr>
                    <th>College</th>
                    <td>${obj.Clg}</td>
                </tr>

                <tr>
                    <th>Email</th>
                    <td>${obj.Email}</td>
                </tr>

                <tr>
                    <th>Phone</th>
                    <td>${obj.Phone}</td>
                </tr>

                <tr>
                    <th>Location</th>
                    <td>${obj.Location}</td>
                </tr>

                <tr>
                    <th>Tech Stack</th>
                    <td>${obj.TechStack}</td>
                </tr>

                <tr>
                    <th>Skills</th>
                    <td>${obj.Skills}</td>
                </tr>

                <tr>
                    <th>Education</th>
                    <td>${obj.Education}</td>
                </tr>

                <tr>
                    <th>Projects</th>
                    <td>${obj.Projects}</td>
                </tr>

                <tr>
                    <th>LinkedIn</th>
                    <td>${obj.LinkedIn}</td>
                </tr>

                <tr>
                    <th>GitHub</th>
                    <td>${obj.GitHub}</td>
                </tr>

            </table>
        `;

        div.innerHTML = table;

    }, 1000);
}

bt.addEventListener('click', display);