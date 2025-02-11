const jobListings = [
    { title: 'Software Engineer Intern', company: 'Tech Corp', location: 'New York, NY', type: 'Internship'},
    { title: 'Web Developer', company: 'Web Solutions', location: 'Remote', type: 'Part-Time'},
    { title: 'Data Analyst Intern', company: 'Data Inc.', location: 'San Francisco, CA', type: 'Internship' },
    { title: 'UX/UI Designer', company: 'Creative Studio', location: 'Austin, TX', type: 'Part-Time' },
    { title: 'Marketing Intern', company: 'Marketing Co.', location: 'Boston, MA', type: 'Internship' },
    { title: 'Software Engineer', company: 'Tech Corp', location: 'New York, NY', type: 'On Location'},
    { title: 'Web Developer Intern', company: 'Web Solutions', location: 'Remote', type: 'Internship'},
    { title: 'Data Analyst', company: 'Data Inc.', location: 'San Francisco, CA', type: 'On Location' },
    { title: 'UX/UI Designer', company: 'Creative Studio', location: 'Austin, TX', type: 'On Location' },
    { title: 'Marketing Intern', company: 'Marketing Co.', location: 'Boston, MA', type: 'Work From Home' },
    { title: 'Software Engineer', company: 'Tech Corp', location: 'New York, NY', type: 'Work From Home'},
    { title: 'Web Developer', company: 'Web Solutions', location: 'Remote', type: 'On Location'},
    { title: 'Data Analyst Intern', company: 'Data Inc.', location: 'San Francisco, CA', type: 'On Location' },
    { title: 'Data Entry', company: 'Creative Studio', location: 'Austin, TX', type: 'Part-Time' },
    { title: 'Marketing Intern', company: 'Marketing Co.', location: 'Boston, MA', type: 'Work From Home' },
    { title: 'Data Entry', company: 'Creative Studio', location: 'Austin, TX', type: 'Work From Home' },
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