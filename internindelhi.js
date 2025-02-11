const jobListings = [
    { title: 'Software Engineer Intern', company: 'Tech Corp', location: 'Delhi, India', type: 'Internship'},
    { title: 'Web Developer', company: 'Web Solutions', location: 'Delhi, India', type: 'Internship'},
    { title: 'Data Analyst Intern', company: 'Data Inc.', location: 'Delhi, India', type: 'Internship' },
    { title: 'UX/UI Designer', company: 'Creative Studio', location: 'Delhi, India', type: 'Internship' },
    { title: 'Marketing Intern', company: 'Marketing Co.', location: 'Delhi, India', type: 'Internship' },
    { title: 'Data Entry', company: 'Creative Studio', location: 'Delhi, India', type: 'Internship' },
    { title: 'Devops Engineer Intern', company: 'Tech Corp', location: 'Delhi, India', type: 'Internship'},
    { title: 'Python Developer', company: 'Web Solutions', location: 'Delhi, India', type: 'Internship'},
    { title: 'Java Intern', company: 'Data Inc.', location: 'Delhi, India', type: 'Internship' },
    { title: 'Frontend Developer', company: 'Creative Studio', location: 'Delhi, India', type: 'Internship' },
    { title: 'Backend developer', company: 'Marketing Co.', location: 'Delhi, India', type: 'Internship' },
    { title: 'Cloud Computing', company: 'Creative Studio', location: 'Delhi, India', type: 'Internship' },
];

document.getElementById('searchButton').addEventListener('click', searchJobs);

function displayJobs(jobs) {
    const list = document.getElementById('list');
    list.innerHTML = ''; // Clear previous listings
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `<h3>${job.title}</h3><p>${job.company} - ${job.location} - ${job.type}</p>`;
        list.appendChild(jobCard);
    });
}

function searchJobs() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredJobs = jobListings.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query) || 
        job.location.toLowerCase().includes(query) ||
        job.type.toLowerCase().includes(query)
    );
    displayJobs(filteredJobs);
}

// Initial display of jobs
displayJobs(jobListings);