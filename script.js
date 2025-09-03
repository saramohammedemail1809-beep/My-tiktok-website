/**
 * TikTok Video Showcase Website - JavaScript
 * This file handles the dynamic loading of video links and page functionality
 */

// ============================================================================
// VIDEO DATA - ADD YOUR TIKTOK VIDEOS HERE
// ============================================================================
// To add new videos, simply add new objects to this array
// Each video object should have: title, description, url, date, and views
const videoData = [
    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAts9sCF/",
        
        
    },

    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtpVnYa/", 
    },

    {
        title: "10 Universities that give 100% scholarships to international students",
        description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtsejMx/",
        
    },

    {
        title: "Funny Pet Moments",
        description: "My pet doing the most adorable things that will make your day better!",
        url: "https://www.tiktok.com/@yourusername/video/1234567890123456792",
        
    },

    {
        title: "3 Universities that give 100% scholarships to international students",
        description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtGMVt8/",
        
    },

    {
        title: "Do this if you want a full scholarship to study in America",
        description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
        url: "https://vt.tiktok.com/ZSAtGCp6v/",
},

{

    title: "100% scholarship to study in California USA as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtnTuEw/",
},

{
   title: "3 steps to get 100% scholarship to study in America",description:"If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtnsoNU/",

},

{
    title: "This is how you can study for FREE in America as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtWfhrM/",
   
},

  {
    title: "This college gives international students 100% scholarships to study in USA",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtWEFgA/",
}, 

  {
    title: "Full scholarship to study in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt78Atm/",
    
},

{  
 title: "This university gives international students 100% scholarships",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7DpVw/",
    },
{
title: "5 schools that are tuition free for international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7Ww7S/",
},

{
title: "10 schools that give 100% scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7aM2x/",
},

{
title: "Big scholarships in america for international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7uSdp/",
},

{
title: "This university will give you a scholarship to study in the Usa if you dont have the money",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7xwKW/",
},

{
title: "This U.S university is FREE if your parents make under 100k$",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt7XCbc/",
},

{
title: "Masters in Nursing scholarships for international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvh8Gs/",
},

{
title: "These 3 universities give Nursing scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvJuq6/",
},

{
title: "Funding to study in America as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvk6fN/",
},

{
title: "This university gave me a full scholarship as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvMEXS/",
},

{
title: "This college gives big scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvph7K/",
},

{
title: "This is a full scholarship for international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtv9M7C/",
},

{
title: "Full scholarship to study in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvpasd/",
},

{
title: "This university gives scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvfkaY/",
},

{
title: "This American college gives international students full scholarships",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtvwu6k/",
},

{
title: "This college gives 80k$ scholarships per year to international students in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtce9P2/",
},

{
title: "This US college gives scholarships to international students and doesnt require English Proficincy Exams",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcM9oT/",
},

{
title: "This school gives you 100% funding to study in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcM9oT/",
},

{
title: "This is how you get a scholarship to study in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcme6Y/",
},

{
title: "This American college gives full scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcADQW/",
},

{
title: "This university offers full scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtchfDW/",
},

{
title: "Study online for free at an American university",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcXGuN/",
},

{
title: "If you want to study in America then this university will give you a guaranteed scholarship",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcGLkV/",
},

{
title: "Those 2 universities offer full tuition scholarships to international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcs69g/",
},

{
title: "Want to study in the USA but worried about money?",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcscx9/",
},

{
title: "",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcscx9/",
},

{
title: "This U.S university lets anyone get a degree for FREE",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcG6qc/",
},

{
title: "This is how you get funding for your masters degree in America as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtcTtvJ/",
},

{
title: "This is how you can get free tuition as an international student in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3RPEh/",
},

{
title: "This is how you can study for free in America",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3uCDy/",
},

{
title: "I wish i knew this when i started college as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3mfud/",
},

{
title: "This is how you can study in America for free",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt39UHg/",
},

{
title: "This will save you 50k$+ as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3rdcF/",
},

{
title: "If you’re thinking of studying in America listen to this...",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3Hdo2/",
},

{
title: "This is one of the best things you can do as an international student",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3DqVY/",
},

{
title: "If youre an international student you need to hear this",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3sMYn/",
},

{
title: "the truth about visa sponsorship",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3K12C/",
},

{
title: "If youre an international student,heres the truth",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt37qN5/",
},

{
title: "Listen to this if youre an international student...",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt37qN5/",
},

{
title: "If youre thinking of studying in America listen to this...",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAt3thwh/",
},

{
title: "For international students",
    description: "If you’re thinking of studying in America as an international student but cannot afford it watch this",
    url: "https://vt.tiktok.com/ZSAtT19rd/",
},

];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Creates a video card element with all necessary content
 * @param {Object} video - Video object containing title, description, url, date, views
 * @returns {HTMLElement} Complete video card element
 */
function createVideoCard(video) {
    // Create the main card container
    const card = document.createElement('div');
    card.className = 'video-card';
    
    // Create the link wrapper
    const link = document.createElement('a');
    link.href = video.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'video-link';
    
    // Create video title
    const title = document.createElement('h3');
    title.className = 'video-title';
    title.textContent = video.title;
    
    // Create video description
    const description = document.createElement('p');
    description.className = 'video-description';
    description.textContent = video.description;
    
    // Create TikTok link button
    const tiktokButton = document.createElement('a');
    tiktokButton.href = video.url;
    tiktokButton.target = '_blank';
    tiktokButton.rel = 'noopener noreferrer';
    tiktokButton.className = 'tiktok-link';
    tiktokButton.innerHTML = '   Watch on TikTok';
    
    // Assemble the card structure (no date or views)
    link.appendChild(title);
    link.appendChild(description);
    
    card.appendChild(link);
    card.appendChild(tiktokButton);
    
    return card;

}

/**
 * Displays a loading message while videos are being loaded
 * @param {HTMLElement} container - Container element to show loading in
 */
function showLoading(container) {
    container.innerHTML = '<div class="loading">Loading videos...</div>';
}

/**
 * Displays an error message if something goes wrong
 * @param {HTMLElement} container - Container element to show error in
 * @param {string} message - Error message to display
 */
function showError(container, message) {
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--destructive);">
            <h3>Oops! Something went wrong</h3>
            <p>${message}</p>
            <button onclick="location.reload()" style="
                background: var(--accent);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                cursor: pointer;
                margin-top: 1rem;
            ">Try Again</button>
        </div>
    `;
}

/**
 * Displays a message when no videos are found
 * @param {HTMLElement} container - Container element to show message in
 */
function showNoVideos(container) {
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--muted-foreground);">
            <h3>No videos found</h3>
            <p>Check back later for new content!</p>
        </div>
    `;
}

// ============================================================================
// MAIN FUNCTIONALITY
// ============================================================================

/**
 * Loads and displays all videos in the videos container
 * This is the main function that populates the page with video cards
 */
function loadVideos() {
    // Get the container where videos will be displayed
    const videosContainer = document.getElementById('videos-container');
    
    // Check if container exists
    if (!videosContainer) {
        console.error('Videos container not found!');
        return;
    }
    
    // Show loading state
    showLoading(videosContainer);
    
    // Simulate loading delay for better UX (remove this in production)
    setTimeout(() => {
        try {
            // Check if we have video data
            if (!videoData || videoData.length === 0) {
                showNoVideos(videosContainer);
                return;
            }
            
            // Clear the container
            videosContainer.innerHTML = '';
            
            // Create and append video cards
            videoData.forEach((video, index) => {
                // Add a small delay between cards for animation effect
                setTimeout(() => {
                    const card = createVideoCard(video);
                    videosContainer.appendChild(card);
                }, index * 100);
            });
            
            // Log success
            console.log(`Successfully loaded ${videoData.length} videos`);
            
        } catch (error) {
            console.error('Error loading videos:', error);
            showError(videosContainer, 'Failed to load videos. Please try refreshing the page.');
        }
    }, 500);
}

/**
 * Updates the username in the header
 * Call this function if you want to change the username dynamically
 * @param {string} newUsername - New username to display
 */
function updateUsername(newUsername) {
    const usernameElement = document.querySelector('.username');
    if (usernameElement) {
        usernameElement.textContent = newUsername;
    }
}

/**
 * Updates the bio text in the header
 * @param {string} newBio - New bio text to display
 */
function updateBio(newBio) {
    const bioElement = document.querySelector('.bio');
    if (bioElement) {
        bioElement.textContent = newBio;
    }
}

// ============================================================================
// EVENT LISTENERS AND INITIALIZATION
// ============================================================================

/**
 * Initialize the website when the DOM is fully loaded
 */
function initializeWebsite() {
    console.log('Initializing TikTok Video Showcase...');
    
    // Load videos
    loadVideos();
    
    // Add any additional initialization code here
    console.log('Website initialized successfully!');
}

// ============================================================================
// UTILITY FUNCTIONS FOR EASY UPDATES
// ============================================================================

/**
 * Add a new video to the collection
 * Call this function to add videos dynamically (useful for future enhancements)
 * @param {Object} newVideo - Video object with title, description, url, date, views
 */
function addVideo(newVideo) {
    // Validate the video object
    const requiredFields = ['title', 'description', 'url', 'date', 'views'];
    const hasAllFields = requiredFields.every(field => newVideo.hasOwnProperty(field));
    
    if (!hasAllFields) {
        console.error('Video object must have all required fields:', requiredFields);
        return false;
    }
    
    // Add to the beginning of the array (newest first)
    videoData.unshift(newVideo);
    
    // Reload the videos to show the new one
    loadVideos();
    
    return true;
}

/**
 * Remove a video from the collection by URL
 * @param {string} videoUrl - URL of the video to remove
 */
function removeVideo(videoUrl) {
    const index = videoData.findIndex(video => video.url === videoUrl);
    if (index !== -1) {
        videoData.splice(index, 1);
        loadVideos();
        return true;
    }
    return false;
}

// ============================================================================
// START THE APPLICATION
// ============================================================================

// Wait for the DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    // DOM is already loaded
    initializeWebsite();
}

// ============================================================================
// INSTRUCTIONS FOR ADDING NEW VIDEOS
// ============================================================================
/*
TO ADD NEW TIKTOK VIDEOS:

1. Open this file (script.js)
2. Find the 'videoData' array at the top of the file
3. Add a new object to the array with this format:
   {
       title: "Your Video Title",
       description: "Brief description of your video",
       url: "https://www.tiktok.com/@yourusername/video/YOUR_VIDEO_ID",
       date: "2025-01-20", // Use YYYY-MM-DD format
       views: "1.5K" // Use K for thousands, M for millions
   }

4. Save the file and refresh your website

EXAMPLE:
{
    title: "My Latest Dance Video",
    description: "Trying out the newest viral dance trend!",
    url: "https://www.tiktok.com/@yourusername/video/1234567890123456795",
    date: "2025-01-20",
    views: "2.3K"
}

TIPS:
- Always use the full TikTok URL
- Keep descriptions concise but engaging
- Use consistent date format (YYYY-MM-DD)
- Views can be formatted as "1.2K", "5.6M", etc.
- Videos will appear in the order they're listed in the array
*/