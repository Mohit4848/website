const jobListings = [
    { title: 'Software Engineer Intern', company: 'Tech Corp', location: 'Pune', type: 'Internship'},
    { title: 'Web Developer', company: 'Web Solutions', location: 'Pune', type: 'Internship'},
    { title: 'Data Analyst Intern', company: 'Data Inc.', location: 'Pune', type: 'Internship' },
    { title: 'UX/UI Designer', company: 'Creative Studio', location: 'Pune', type: 'Internship' },
    { title: 'Marketing Intern', company: 'Marketing Co.', location: 'Pune', type: 'Internship' },
    { title: 'Data Entry', company: 'Creative Studio', location: 'Pune', type: 'Internship' },
    { title: 'Devops Engineer Intern', company: 'Tech Corp', location: 'Pune', type: 'Internship'},
    { title: 'Python Developer', company: 'Web Solutions', location: 'Pune', type: 'Internship'},
    { title: 'Java Intern', company: 'Data Inc.', location: 'Pune', type: 'Internship' },
    { title: 'Frontend Developer', company: 'Creative Studio', location: 'Pune', type: 'Internship' },
    { title: 'Backend developer', company: 'Marketing Co.', location: 'Pune', type: 'Internship' },
    { title: 'Cloud Computing', company: 'Creative Studio', location: 'Pune', type: 'Internship' },
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