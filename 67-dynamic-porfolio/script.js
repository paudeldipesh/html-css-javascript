const FAKE_API_URL = window.location.href.replace(
  /\/[^/]*\.html$/,
  "/data.json"
);

const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function getData() {
  try {
    const response = await fetch(FAKE_API_URL, getOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function displayData() {
  const { information, experiences, skills } = await getData();
  const [name, title, location, introduction, about] = information;

  document.getElementById("name").innerText = name;
  document.getElementById("title").innerText = title;
  document.getElementById("location").innerText = location;
  document.getElementById("introduction").innerText = introduction;
  document.getElementById("about").innerText = about;

  const experienceList = document.getElementById("experience-list");
  experiences.forEach((experience) => {
    const li = document.createElement("li");
    li.innerText = `${experience.position} at ${experience.company} (${experience.job_type})`;
    experienceList.appendChild(li);
  });

  const skillsList = document.getElementById("skills-list");
  skills.forEach((skill) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    img.src = skill.src;
    li.innerText = skill.name;
    div.appendChild(li);
    div.appendChild(img);
    skillsList.appendChild(div);
  });
}

window.addEventListener("load", displayData);
