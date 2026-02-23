// Tracking the counts
const total = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

let interviewArray = [];
let rejectedArray = [];

function calculateCount() {
    const parent = document.getElementById("jobs-card");
    total.innerText = parent.children.length;
    interviewCount.innerText = interviewArray.length;
    rejectedCount.innerText = rejectedArray.length;
}

// Toggle Style between Tabs

function showOnly(id) {
    const main = document.getElementById("jobs-card");
    main.classList.add("hidden");

    const interview = document.getElementById("interview-section");
    interview.classList.add("hidden");

    const rejected = document.getElementById("rejected-section");
    rejected.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

    const interviewTab = document.getElementById("interview-tab");
    const rejectedTab = document.getElementById("rejected-tab");
    const allTab = document.getElementById("all-tab");

    const headCount = document.getElementById("No-of-jobs");

    interviewTab.classList.remove("bg-[#3B82F6]", "text-white");
    rejectedTab.classList.remove("bg-[#3B82F6]", "text-white");
    allTab.classList.remove("bg-[#3B82F6]", "text-white");

    if (id == "interview-section") {
        interviewTab.classList.add("bg-[#3B82F6]", "text-white");
        headCount.innerText = interviewArray.length;
    }
    else if (id == "rejected-section") {
        rejectedTab.classList.add("bg-[#3B82F6]", "text-white");
        headCount.innerText = rejectedArray.length;
    }
    else if (id == "jobs-card") {
        allTab.classList.add("bg-[#3B82F6]", "text-white");
        headCount.innerText = total.innerText;
    }     
}



const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("interview")) {
        const parent = event.target.parentNode.parentNode;
        parent.querySelector(".state").innerText = "INTERVIEW";
        const jobName = parent.querySelector(".jobName").innerText;
        const bio = parent.querySelector(".bio").innerText;
        const description = parent.querySelector(".description").innerText;
        const status = parent.querySelector(".state").innerText;
        const details = parent.querySelector(".details").innerText;

        const cardInfo = {
            jobName,
            bio,
            description,
            status,
            details
        }
        const jobExist = interviewArray.find(job => job.jobName == cardInfo.jobName);
        const rejectedExist = rejectedArray.find(job => job.jobName == cardInfo.jobName);

        if (!jobExist) {
            interviewArray.push(cardInfo);
        }
        if (rejectedExist) {
            rejectedArray = rejectedArray.filter(job => job.jobName != cardInfo.jobName);
            renderRejected();
        }
        calculateCount();
        renderInterview();
    }
    else if (event.target.classList.contains("rejected")) {
        const parent = event.target.parentNode.parentNode;
        parent.querySelector(".state").innerText = "REJECTED";
        const jobName = parent.querySelector(".jobName").innerText;
        const bio = parent.querySelector(".bio").innerText;
        const description = parent.querySelector(".description").innerText;
        const status = parent.querySelector(".state").innerText;
        const details = parent.querySelector(".details").innerText;

        const cardInfo = {
            jobName,
            bio,
            description,
            status,
            details
        }
        const jobExist = rejectedArray.find(job => job.jobName == cardInfo.jobName)
        const interviewExist = interviewArray.find(job => job.jobName == cardInfo.jobName);

        if (!jobExist) {
            rejectedArray.push(cardInfo);
        }

        if (interviewExist) {
            interviewArray = interviewArray.filter(job => job.jobName != cardInfo.jobName);
            renderInterview();
        }
        calculateCount();
        renderRejected();
    }

});


function renderInterview() {
    const interviewSection = document.getElementById("interview-section");
    interviewSection.classList.add("space-y-4", "mb-5");
    interviewSection.innerHTML = " ";

    for (let job of interviewArray) {
        let div = document.createElement("div");
        div.className = "p-6 bg-base-100 border border-[#F1F2F4] flex justify-between";
        div.innerHTML = `<div> <h4 class="jobName mb-1 text-lg font-semibold"> ${job.jobName}</h4><p class="  bio text-base text-[#64748B] font-regular"> ${job.bio}</p> <p class="description my-5 font-regular text-sm text-[#64748B]"> ${job.description}</p> <div class="state mb-2 py-2 px-3 text-sm font-medium bg-[#e2fee4] w-fit"> ${job.status} </div><p class="details mb-5 text-[#323B49] text-sm"> ${job.details} </p><div class="btn-container space-x-2"><button class="interview btn btn-success btn-outline">INTERVIEW</button><button class="rejected btn btn-error btn-outline">REJECTED</button></div></div> <button class="delete btn btn-circle text-[#64748B]"> <i id="trash" class="fa-regular fa-trash-can"></i> </button>`
        interviewSection.appendChild(div);
    }
    if(interviewArray.length == 0){
        let div = document.createElement("div");
        div.className = "py-[60px] px-10 bg-base-100 text-center";
        div.innerHTML = `<img class="mx-auto mb-5"src="./nothing.png" alt="">
                        <h2 class="text-2xl font-semibold mb-1">No jobs available</h2>
                        <p class="text-base">Check back soon for new job opportunities</p>`
    
        interviewSection.appendChild(div);
    }
    
}

function renderRejected() {
    const rejectedSection = document.getElementById("rejected-section");
    rejectedSection.classList.add("space-y-4", "mb-5");
    rejectedSection.innerHTML = " ";
    
    for (let job of rejectedArray) {
        
        let div = document.createElement("div");
        
        div.className = "p-6 bg-base-100 border border-[#F1F2F4] flex justify-between";
        div.innerHTML = `<div> <h4 class="jobName mb-1 text-lg font-semibold"> ${job.jobName}</h4><p class="  bio text-base text-[#64748B] font-regular"> ${job.bio}</p> <p class="description my-5 font-regular text-sm text-[#64748B]"> ${job.description}</p> <div class="state mb-2 py-2 px-3 text-sm font-medium bg-[#FEE4E2] w-fit"> ${job.status} </div><p class="details mb-5 text-[#323B49] text-sm"> ${job.details} </p><div class="btn-container space-x-2"><button class="interview btn btn-success btn-outline">INTERVIEW</button><button class="rejected btn btn-error btn-outline">REJECTED</button></div> </div> <button class="delete btn btn-circle text-[#64748B]"> <i id="trash" class="fa-regular fa-trash-can"></i> </button>`
        rejectedSection.appendChild(div);
    }
    if(rejectedArray.length == 0){
        let div = document.createElement("div");
        div.className = "py-[60px] px-10 bg-base-100 text-center";
        div.innerHTML = `<img class="mx-auto mb-5"src="./nothing.png" alt="">
                        <h2 class="text-2xl font-semibold mb-1">No jobs available</h2>
                        <p class="text-base">Check back soon for new job opportunities</p>`
        rejectedSection.appendChild(div);
    }
    
}

// Delete Functionality

