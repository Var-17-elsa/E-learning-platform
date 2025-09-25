document.addEventListener('DOMContentLoaded',() => {
    const courseListSection = document.querySelector('.course-list');
    const courseDetailsSection = document.querySelector('.course-details');
    const viewCourseButtons = document.querySelectorAll('.view-course-btn');
    const markCompleteBtn = document.getElementById('mark-complete-btn');
    const courseTitle = document.getElementById('course-title');
    const courseDescription = document.getElementById('course-description');
    const courseVideo = document.getElementById('course-video');
    const progress = document.querySelector('.progress');

    //sample data of courses
    const course = {
        '1': {
            title: 'Introduction to Wed Development',
            description: 'This course covers the fundamental of HTML,CSS, and JavaScript, essential for building modern web pages.',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL4-ikJ5L4A2y1Y2y0P2w4F4V0T0w6O9Y9',
            progress: 0
        },
        '2': {
            title: 'Python for data Science',
            description: 'An in-depth look at using Python for data analysis, including libraries like pandas, NumPy, and Matplotlib.',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL4-ikJ5L4A2y1Y2y0P2w4F4V0T0w6O9Y9',
            progress: 0
        } 
    };

    //handle course selection
    viewCourseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
         const courseCard = e.target.closest('.course-card');
         const courseId = courseCard.dataset.courseId;
         const selectedCourse = courses[courseId];
         
         if(selectedCourse) {
            courseTitle.textContent = selectedCourse.title;
            courseDescription.textContent = selectedCourse.description;
            courseVideo.src = selectedCourse.videoUrl;
            progress.style.width =  `${selectedCourse.progress}%`;

            courseListSection.classList.add('hidden');
            courseDetailsSection.classList.remove('hidden');
         }
        });
    });

    //handle marking course as complete 
    markCompleteBtn.addEventListener('click', () =>{
        //here, you would typically update a database. For this example, we just update the UI.
        const currentProgress = parseInt(progress.style.width);
        if (currentProgress < 100) {
            const newProgress = Math.min(currentProgress + 25,100);
            progress.style.width = `${newProgress}%`;
            alert(`Progress updated to ${newProgress}%!`);
        } else {
            alert('course is already complete');
        }
    });
});